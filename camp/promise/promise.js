/**
 * Created by pengchaoyang on 2018/11/6
 */
function INTERNAL () {}
function isFunction (func) {
  return typeof func === 'function'
}
function isObject (obj) {
  return typeof obj === 'object'
}
function isArray (arr) {
  return Array.isArray(arr)
}

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

module.exports = Promise

function Promise (resolver) {
  if (!isFunction(resolver)) {
    throw new TypeError('resolver must be a function')
  }
  this.state = PENDING
  this.value = void 0
  this.queue = []
  if (resolver !== INTERNAL) {
    safelyResolveThen(this, resolver)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if ((!isFunction(onFulfilled) && this.state === FULFILLED) ||
    (!isFunction(onRejected) && this.state === REJECTED)) {
    return this
  }
  const promise = new this.constructor(INTERNAL)                            //返回新的promise
  if (this.state !== PENDING) {
    const resolver = this.state === FULFILLED ? onFulfilled : onRejected
    unwrap(promise, resolver, this.value)
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected))            //加入队列，状态改变后执行
  }
  return promise                                                              //这里返回的promise是QueueItem里的。这里已经是新的promise对象，不再是self了
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)                                      //只是then的语法糖
}

function QueueItem (promise, onFulfilled, onRejected) {
  this.promise = promise
  this.callFulfilled = function (value) {
    doResolve(this.promise, value)
  }
  this.callRejected = function (error) {
    doReject(this.promise, error)
  }
  if (isFunction(onFulfilled)) {
    this.callFulfilled = function (value) {
      /**
       * new promise((resolve,reject)=>{}).then(func(){return new Promise()})
       * 如果func是函数，即onFulfilled，需要继续调用onFulfilled，并且是在nextTick。
       * 并获取返回值，doResolve(promise, returnValue)
       */
      unwrap(this.promise, onFulfilled, value)
    }
  }
  if (isFunction(onRejected)) {
    this.callRejected = function (error) {
      unwrap(this.promise, onRejected, error)
    }
  }
}

function unwrap (promise, func, value) {
  process.nextTick(function () {
    let returnValue
    try {
      returnValue = func(value)                         //执行 状态变化之后的函数，带上value
    } catch (error) {
      return doReject(promise, error)                   //执行onFulfilled出错也能捕获到
    }
    if (returnValue === promise) {                      //返回值不能是自己，因为自己是promise，还会继续解promise 就会造成死循环
      doReject(promise, new TypeError('Cannot resolve promise with itself'))
    } else {
      doResolve(promise, returnValue)
    }
  })
}

function doResolve (self, value) {
  try {
    /**
     * new Promise(resolver)
     * .then((value)=>{
     *    return new Promise(resolver2).then(func)
     * })
     * 判断then的return value 是否是promise ,是的话取出func来接着执行，并等待状态变更
     */
    const then = getThen(value)                     //doResolve 的value 是promise 对象，且promise.then是函数的情况下，用这个promise作为上下文绑定在then上
    if (then) {
      safelyResolveThen(self, then)                 //resolve(new Promise().then())  会递归的先深度优先解开所有promise。self会从第一个开始一直传递下去
    } else {                                        //递归基，resolve的情况
      self.state = FULFILLED
      self.value = value                            //这个value 是最深的一个Promise的resolve值。new Promise((resolve,reject)=>{resolve(Promise.resolve(1))}).then(console.log) ==> 1
      self.queue.forEach(function (queueItem) {     //执行队列里面的多个then，这里的then不是链式调用的then，链式返回的每次promise对象都不是原来的
        /**
         * p.then(func1)
         * p.then(func2)
         * p.then(func3)
         * 这里其实是forEach 包装了func1、func2、func3的queueItem队列，value都是self的value
         */
        queueItem.callFulfilled(value)
      })
    }
    return self                                //返回值一定是promise，方便链式调用
  } catch (error) {
    return doReject(self, error)
  }
}

function doReject (self, error) {              //会递归的设置所有队列和孩子promise为reject
  self.state = REJECTED
  self.value = error
  self.queue.forEach(function (queueItem) {               //没有调用then和catch 的那个promise 的queue为空，最后递归终止于此
    queueItem.callRejected(error)
  })
  return self
}

function getThen (promise) {
  const then = promise && promise.then
  if (promise && (isObject(promise) || isFunction(promise)) && isFunction(then)) {
    return function applyThen () {
      then.apply(promise, arguments)
    }
  }
}

function safelyResolveThen (self, then) {
  let called = false
  try {
    then(function (value) {
      if (called) {
        return
      }
      called = true
      doResolve(self, value)
    }, function (error) {
      if (called) {
        return
      }
      called = true
      doReject(self, error)
    })
  } catch (error) {
    if (called) {
      return
    }
    called = true
    doReject(self, error)
  }
}

Promise.resolve = resolve
function resolve (value) {
  if (value instanceof this) {                      //是promise直接返回
    return value
  }
  return doResolve(new this(INTERNAL), value)
}

Promise.reject = reject
function reject (reason) {
  return doReject(new this(INTERNAL), reason)
}

Promise.all = all
function all (iterable) {
  const self = this
  if (!isArray(iterable)) {
    return this.reject(new TypeError('must be an array'))
  }

  const len = iterable.length
  let called = false
  if (!len) {
    return this.resolve([])
  }

  const values = new Array(len)
  let resolved = 0
  let i = -1
  const promise = new this(INTERNAL)

  while (++i < len) {
    allResolver(iterable[i], i)
  }
  return promise
  function allResolver (value, i) {
    //resolve(value) 非promise 包装一下
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true                                    //reject 一个就结束
        doReject(promise, error)
      }
    })
    function resolveFromAll (outValue) {
      values[i] = outValue
      if (++resolved === len && !called) {               //当resolve 个数和输入个数相等且状态第一次改变时执行
        called = true
        doResolve(promise, values)
      }
    }
  }
}

Promise.race = race
function race (iterable) {
  const self = this
  if (!isArray(iterable)) {
    return this.reject(new TypeError('must be an array'))
  }

  const len = iterable.length
  let called = false
  if (!len) {
    return this.resolve([])
  }

  let i = -1
  const promise = new this(INTERNAL)

  while (++i < len) {
    resolver(iterable[i])
  }
  return promise
  function resolver (value) {
    self.resolve(value).then(function (response) {
      if (!called) {                              //一个resolve就resolve
        called = true
        doResolve(promise, response)
      }
    }, function (error) {
      if (!called) {
        called = true
        doReject(promise, error)
      }
    })
  }
}