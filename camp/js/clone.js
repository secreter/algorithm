/**
 * Created by pengchaoyang on 2018/12/27
 */
function clone(o,map=new WeakMap()){
  if(typeof o!=='object') return o
  if(o==null) return o
  if(map.has(o)) return map.get(o) // 解决循环引用
  if(Object.prototype.toString.call(o).slice(8,-1)==='RegExp') return new RegExp(o)
  if(Object.prototype.toString.call(o).slice(8,-1)==='Date') return new Date(o.getTime())
  let obj={}
  if(Array.isArray(o)){
    obj=[]
  }
  map.set(o,obj)
  for(let k in o){
    if(!o.hasOwnProperty(k)) continue
    obj[k]=typeof o[k]==='object'?clone(o[k],map):o[k]
  }
  return obj
}

let a={
  b:{
    name:'bob'
  },
  c:[1,2,3],
  d:/reg/g,
  e:new Date(),
  f:function(){},
  g:null,
  h:undefined,
  i:3
}
a.loop=a
console.log(a)

console.log(clone(a))