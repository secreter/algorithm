/*
* 写一个函数has_cycle判断任何一个对象是否有循环引用的情况。
* */
function hasCycle(node,next=(node)=>node.next){
  let slow=node,fast=node
  while(slow&&fast){
    slow=next(slow)
    if(!next(fast)||!next(next(fast)))
      break
    fast=next(next(fast))
    if(slow===fast) return true
  }
  return false
}
let node1={}
let node2={child:node1}
let node3={child:node2}
let node4={child:node3}
let node5={child:node4}
node1.child=node3
console.log(hasCycle(node5,node=>node.child))
