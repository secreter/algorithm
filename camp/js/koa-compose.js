/**
 * Created by pengchaoyang on 2018/12/26
 */

// compose函数需要传入一个数组队列 [fn,fn,fn,fn]
function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      // 执行一遍next之后,这个index值将改变
      index = i

      let fn = middleware[i]            //中间件执行完之前，前一个中间件调用的时候，会把下一个中间件赋值给next函数，这样await next()的时候，就会执行下一个中间件，环环相扣，直到没有中间件
      if (i === middleware.length) {
        //中间件执行过之后，next赋值给fn,next来源于首次调用执行函数的回调，可以看成callback,当所有中间件都执行完的时候，可以最后再执行一个回调
        //但注意，这个next是在最后一个中间件之后执行，但并不表示执行已经都完了，这里是洋葱模型的中心；执行完之后，逆序执行next 后面的语句，出洋葱
        fn = next       //其实也是，最后一个中间件可以不写next,或者说写了也不会继续执行，这个next可以看成是最后一个next的补充
      }
      //立即返回处于resolve状态promise实例,以便后续逻辑继续执行
      //最后一个中间件，不调用next()就立即返回
      if (!fn) return Promise.resolve()
      try {
        //   await next();  //当fn里面执行这句话时,就会执行dispatch(i+1),导致洋葱执行过程
        //   整个过程类似堆栈执行释放过程中的的递归调用,虽然有差异,可借用类比思考其执行顺序流程
        // dispatch.bind(null, i + 1)就是中间件的next参数，此时已经绑定了i,如果调用两次next,就会执行相同的dispatch (i) ,第二次执行i必然小于index
        // function next () {return dispatch(i + 1)}
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        //这里捕捉到的应该是一些语法错误之类的，Promise抛出发回被Promise.resolve直接传递
        return Promise.reject(err)
      }
    }
  }
}

async function say (ctx,next) {
  console.log('hello,come in !')
  await next()
  console.log('goodbye')
}

async function work (ctx,next) {
  console.log('work')
  await next()
}

let middleware=[say,work]
let runAllFn=compose(middleware)
runAllFn(null,()=>{console.log('done ,exec callback')}).then()