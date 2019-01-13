function promiseAll(promises){
  return new Promise((resolve,reject)=>{
    if(!Array.isArray(promises)) throw Error('not array')
    let total=promises.length
    let resolvedCount=0
    let resolvedList=new Array(total)
    for (let i=0;i<total;i++){
      (function (i) {
        Promise.resolve(promises[i])
          .then((data)=>{
            resolvedList[i]=data
            resolvedCount++
            if(resolvedCount===total){
              resolve(resolvedList)
            }
          })
          .catch(e=>{
            reject(e)
          })
      })(i)
    }
  })
}

let p1=new Promise((resolve,reject)=>{
  resolve(1)
})
let p2=new Promise((resolve,reject)=>{
  setTimeout(reject(2),0)
})
promiseAll([p1,p2]).then((data)=>{
  console.log(data)
}).catch(e=>{
  console.log(e,'e')
})
