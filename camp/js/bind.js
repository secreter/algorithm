/**
 * Created by pengchaoyang on 2018/12/26
 */
'use strict'
Function.prototype.bind=bind
// function bind(){
//   var target = this                 //要bind的函数本身
//   var that=Array.prototype.slice.call(arguments,0,1)[0]     //将要绑定到的对象
//   var bindArgs=Array.prototype.slice.call(arguments,1)   //预置参数
//   function bound(){
//     //arguments 和this 都变了
//     var callArgs=Array.prototype.slice.call(arguments) //后置参数
//     if(this instanceof bound){
//       //用new 调用，忽略that
//       return target.apply(this,bindArgs.concat(callArgs))  //执行
//     }else{
//       return target.apply(that,bindArgs.concat(callArgs))  //执行
//     }
//
//   }
//   // 实现继承，让bound函数生成的实例通过原型链能追溯到target函数
//   // 即 实例可以获取/调用target.prototype上的属性/方法
//   var Empty = function () {}
//   Empty.prototype=target.prototype
//   bound.prototype = new Empty()  // 这里如果不加入Empty，直接bound.prototype = target.prototype的话
//   // 改变bound.prototype则会影响到target.prototype，原型继承基本都会加入这么一个中间对象做屏障
//   return bound
// }

function bind (context) {
  var target=this
  var bindArgs=Array.prototype.slice.call(arguments,1)
  function bound () {
    var args=Array.prototype.slice.call(arguments,0)
    if(this instanceof bound){
      return target.apply(this,bindArgs.concat(args))
    }else{
      return target.apply(context,bindArgs.concat(args))
    }
  }
  function F () {}
  F.prototype=target.prototype
  bound.prototype=new F()
  return bound
}

function A(name,sex){
  console.log(name,sex)
  console.log(this)
}
let B=A.bind(this,'bob','m')
B()
let a=new B()
console.log(B.prototype)
