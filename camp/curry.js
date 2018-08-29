/**
 * Created by pengchaoyang on 2018/8/29
 */
/**
 * 函数式编程当中有一个非常重要的概念就是 函数柯里化。一个接受 任意多个参数 的函数，如果执行的时候传入的参数不足，那么它会返回新的函数，新的函数会接受剩余的参数，直到所有参数都传入才执行操作。这种技术就叫柯里化。请你完成 curry 函数，它可以把任意的函数进行柯里化，效果如下：
 *
 *
 const f = (a, b, c d) => { ... }
 const curried = curry(f)

 curried(a, b, c, d)
 curried(a, b, c)(d)
 curried(a)(b, c, d)
 curried(a, b)(c, d)
 curried(a)(b, c)(d)
 curried(a)(b)(c, d)
 curried(a, b)(c)(d)
 // ...
 // 这些函数执行结果都一样

 // 经典加法例子
 const add = curry((a, b) => a + b)
 const add1 = add(1)

 add1(1) // => 2
 add1(2) // => 3
 add1(3) // => 4
 */
//bind一直在累加参数，直到实参累计长度等于形参，开始执行
const curry = (fn, arity = fn.length, ...args) =>
	args.length < arity ?  curry.bind(void(0), fn, arity, ...args) :fn(...args)

// const curry = ( f, arr = []) => (...args) => ( totalArgs => totalArgs.length === f.length ? f(...totalArgs) : curry(f, totalArgs))([...arr, ...args]);

function _add(a, b, c, d){
    return a + b + c + d
}

const add = curry(_add)

// console.log( add(1) ) // 函数
// console.log( add(1)(2) ) // 函数
// console.log( add(1)(2)(3) ) // 函数
console.log ( add(1)(2)(3)(4) ) // 10
curry(_add,1,2,3,4)
