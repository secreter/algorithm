
//////////////////////////////////////////////////////////////////
//v1
// function myPromise(constructor){
//   let self=this
//   self.status="pending"
//   self.value=undefined
//   self.reason=undefined
//   function resolve (value) {
//     if(self.status==='pending'){
//       self.value=value
//       self.status='resolved'
//     }
//   }
//
//   function reject (reason) {
//     if(self.status==='pending'){
//       self.reason=reason
//       self.status='rejected'
//     }
//   }
//
//   try{
//     constructor(resolve,reject)
//   }catch (e) {
//     reject(e)
//   }
// }
// myPromise.prototype.then=function (onFulfilled, onRejected) {
//   let self=this
//   switch (self.status) {
//     case 'resolved':
//       onFulfilled(self.value)
//       break
//     case 'rejected':
//       onRejected(self.reason)
//       break
//     default:
//   }
// }
////////////////////////////////////////////////////////

//v2   基于观察者模式，支持异步resolve
// function myPromise(constructor){
//   let self=this
//   self.status="pending"
//   self.value=undefined
//   self.reason=undefined
//   self.onFulfilledArray=[]
//   self.onRejectedArray=[]
//   function resolve (value) {
//     if(self.status==='pending'){
//       self.value=value
//       self.status='resolved'
//       self.onFulfilledArray.forEach(fn=>{
//         fn(self.value)
//       })
//     }
//   }
//
//   function reject (reason) {
//     if(self.status==='pending'){
//       self.reason=reason
//       self.status='rejected'
//       self.onRejectedArray.forEach(fn=>{
//         fn(self.value)
//       })
//     }
//   }
//
//   try{
//     constructor(resolve,reject)
//   }catch (e) {
//     reject(e)
//   }
// }
// myPromise.prototype.then=function (onFulfilled, onRejected) {
//   let self=this
//   switch (self.status) {
//     case 'pending':
//       self.onFulfilledArray.push(onFulfilled)
//       self.onRejectedArray.push(onRejected)
//       break
//     case 'resolved':
//       onFulfilled(self.value)
//       break
//     case 'rejected':
//       onRejected(self.reason)
//       break
//     default:
//   }
// }

//////////////////////////////////////////
//V3 支持链式调用
function myPromise(constructor){
  let self=this
  self.status="pending"
  self.value=undefined
  self.reason=undefined
  self.onFulfilledArray=[]
  self.onRejectedArray=[]
  function resolve (value) {
    if(self.status==='pending'){
      self.value=value
      self.status='resolved'
      self.onFulfilledArray.forEach(fn=>{
        fn(self.value)
      })
    }
  }

  function reject (reason) {
    if(self.status==='pending'){
      self.reason=reason
      self.status='rejected'
      self.onRejectedArray.forEach(fn=>{
        fn(self.value)
      })
    }
  }

  try{
    constructor(resolve,reject)
  }catch (e) {
    reject(e)
  }
}
myPromise.prototype.then=function (onFulfilled, onRejected) {
  let self=this,promise2
  switch (self.status) {
    case 'pending':
      promise2=new myPromise((resolve,reject)=>{
        self.onFulfilledArray.push(function () {
          try {
            let res=onFulfilled(self.value)
            resolve(res)
          }catch (e) {
            reject(e)
          }
        })
        self.onRejectedArray.push(function () {
          try {
            let res=onRejected(self.reason)
            reject(res)
          }catch (e) {
            reject(e)
          }
        })
      })

      break
    case 'resolved':
      promise2=new Promise((resolve,reject)=>{
        try {
          let res=onFulfilled(self.value)
          resolve(res)
        }catch (e) {
          reject(e)
        }
      })
      break
    case 'rejected':
      promise2=new Promise((resolve,reject)=>{
        try {
          let res=onRejected(self.reason)
          reject(res)
        }catch (e) {
          reject(e)
        }
      })
      break
    default:
  }
  return promise2
}

let p=new myPromise((resolve,reject)=>{
  setTimeout(resolve('222'),2)
})

p.then((data)=>{
  console.log(data)
  return 333
},(e)=>{
  console.log('e',e)
}).then((d)=>{
  console.log(d)
})
