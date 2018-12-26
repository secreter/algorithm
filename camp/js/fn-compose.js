/**
 * Created by pengchaoyang on 2018/12/26
 */
function compose (middleware) {
  if(!Array.isArray(middleware)) throw Error('arg is not an Array')
  return function (context,next) {
    let index=-1
    return dispatch(0)
    function dispatch (i) {
      if(i<=index) throw Error('next exec more then one time')
      index=i
      let fn=middleware[i]
      if(i===middleware.length) fn=next             //这里的next相当于cb
      if(!fn) return Promise.resolve()         //结束
      try{
        return Promise.resolve(fn(context,dispatch.bind(null,++i)))
      }catch (e){
        console.log('catch')
        return Promise.reject(e)
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
runAllFn(null,()=>{console.log('done ,exec callback')})
  .then()
.catch(e=>{
  console.error(e)
})