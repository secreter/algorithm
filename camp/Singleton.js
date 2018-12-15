//利用属性做静态变量，保证只生成一个实例
// class Singleton{
//   constructor (data){
//     if(Singleton.instance){
//       return Singleton.instance
//     }
//     this.data=data
//     Singleton.instance=this
//   }
// }

//还可以使用闭包或者立即执行函数


//这里使用proxy

class Singleton{
  constructor (data){
    this.data=data
  }
}

Singleton=new Proxy(Singleton,{
  construct (target, argArray, newTarget) {
    if(!target.instance) {
      //属性不可读
      Object.defineProperty(target,'instance',{
        value:new target(...argArray)
      })
    }
    return target.instance
  }
})
let s=new Singleton(11)
let b=new Singleton(12)
console.log(s.data)
console.log(b.data)
console.log(b.constructor)