/**
 * Created by pengchaoyang on 2018/12/17
 */
function rebuild (preOrder,inOrder) {
  if(preOrder.length!==inOrder.length||preOrder.length===0||inOrder.length===0) throw Error('invalid args')
  const {left,root,right}=findSub(preOrder,inOrder)
  if(left.preOrder.length>0){
    root.leftChild=rebuild (left.preOrder,left.inOrder)

  }
  if(right.preOrder.length>0){
    root.rightChild=rebuild (right.preOrder,right.inOrder)
  }
  return root
}

function findSub (preOrder,inOrder) {
  const rootData=preOrder[0]
  const index=inOrder.indexOf(rootData)
  let sub={
    root:new Node(rootData),
    left:{
      preOrder:preOrder.slice(1,index+1),
      inOrder:inOrder.slice(0,index)
    },
    right:{
      inOrder:inOrder.slice(index+1),
      preOrder:preOrder.slice(index+1)
    },
  }
  return sub
}

class Node{
  constructor (data){
    this.data=data
    this.leftChild=null
    this.rightChild=null
  }
}

let root=rebuild([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])

function postTraverse (root) {
  if(root===null) return
  postTraverse(root.leftChild)
  postTraverse(root.rightChild)
  console.log(root.data)
}
postTraverse(root)