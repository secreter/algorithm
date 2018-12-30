function retry(fn,times=3) {
  return function (...args) {
    return new Promise((resolve,reject)=>{
      function exec(times){
        console.log('retry times:',times)
        fn(...args)
          .then(resolve)             //resolve出口
          .catch(e=>{
            if (times===0) return reject(e)  //reject 出口
            exec(--times)
          })
      }
      exec(times)
    })
  }
}

function fn (num) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      Date.now()%2===0?reject(num):resolve(num)
    },300)
  })
}
let retryFn=retry(fn)
retryFn(22)
.then(res=>{
  console.log('resolve:',res)
})
.catch(e=>{
  console.log('reject:',e)
})