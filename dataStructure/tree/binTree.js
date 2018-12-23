class BinNode{
  constructor (data={},parent=null){
    this.parent=parent
    this.data=data
    this.leftChild=null
    this.rightChild=null
    this.height=0      //子树的高度，空树-1
  }

  /**
   * 子树规模
   */
  size(){
    let s=1
    if(this.leftChild) s+=this.leftChild.size()
    if(this.rightChild) s+=this.rightChild.size()
    return s
  }

  /**
   * 作为左孩子插入
   * @param data
   */
  insertAsLeftChild(data){
    return this.leftChild=new BinNode(data,this)
  }
  insertAsRightChild(data){
    return this.rightChild=new BinNode(data,this)
  }

  /**
   * 中序遍历下，该元素的直接后继
   */
  succ(){

  }

  /**
   * 层次遍历
   */
  traverseLevel(){

  }
  /**
   * 前序遍历
   */
  traversePre(){

  }
  /**
   * 中序遍历
   */
  traverseIn(){

  }
  /**
   * 后序遍历
   */
  traversePost(){

  }

}



class BinTree {
  constructor (node){
    this._size=0
    this._root=node
  }

  /**
   * 空树高度为-1
   * @param node
   * @private
   */
  _getHeight(node){
    return node?node.height:-1
  }

  /**
   * 更新节点的高度(子树高度，只有一个节点为0，空树-1)
   */
  _updateHeight(node){
    //根 加上较高子树的高度
    return node.height=1+Math.max(this._getHeight(node.leftChild),this._getHeight(node.rightChild))
  }

  /**
   * 更新节点node以及祖先的高度
   * 某个节点的高度变化，可能会导致祖先节点的的高度都变化
   * o(n=depth(node))
   * @param node
   */
  _updateHeightAbove(node){
    while (node){
      this._updateHeight(node)
      node=node.parent
    }
  }

  size(){
    return this._size
  }
  isEmpty(){
    return !this._root
  }
  root(){
    return this._root
  }

  /**
   * 作为左孩子插入
   * @param parentNode
   * @param data
   * @returns {null|BinNode}
   */
  insertAsLeftChild(parentNode,data){
    this._size++
    parentNode.insertAsLeftChild(data)
    this._updateHeightAbove(parentNode)
    return parentNode.leftChild
  }

  insertAsRightChild(parentNode,data){
    this._size++
    parentNode.insertAsRightChild(data)
    this._updateHeightAbove(parentNode)
    return parentNode.rightChild
  }
  /**
   * 前序遍历
   * 递归实现(尾递归)
   */
  traversePreRecursive(node,visit){
    if(!node) return
    visit(node.data)
    this.traversePreRecursive(node.leftChild,visit)
    this.traversePreRecursive(node.rightChild,visit)
  }

  /**
   * 用栈改写
   * @param node
   */
  traversePre1(node,visit){
    let stack=[]
    if(node) stack.push(node)
    while (stack.length){
      node=stack.pop()
      visit(node.data)
      if(node.rightChild) stack.push(node.rightChild)        //右孩子先进后出
      if(node.leftChild) stack.push(node.leftChild)
    }
  }

  /**
   * 中序遍历
   *
   */
  traverseInRecursive(node,visit){
    if(!node) return
    this.traverseInRecursive(node.leftChild,visit)
    visit(node.data)
    this.traverseInRecursive(node.rightChild,visit)
  }

  /**
   * 层次遍历
   * 从上到下，从左到右
   */
  traverseLevel(node,visit){
    let queue=[]
    queue.push(node)
    while (queue.length){
      node=queue.shift()
      visit(node.data)
      if(node.leftChild) queue.push(node.leftChild)       //左孩子先进先出
      if(node.rightChild) queue.push(node.rightChild)
    }
  }

  /**
   * 沿着左分支不断访问，右孩子不断入栈
   * @param node
   * @param visit
   * @param stack  共用的栈
   */
  visitAlongLeftBranch(node,visit,stack){
    while (node){
      visit(node.data)
      stack.push(node.rightChild)    //右孩子入栈，将来逆序出（null 可能入栈，但后续访问的时候不会访问，无需增加判断）
      node=node.leftChild            //沿着左侧链下行
    }
  }
  /**
   * 前序遍历
   * 左侧链实现
   */
  traversePre(node,visit){
    let stack=[]
    while (true){
      this.visitAlongLeftBranch(node,visit,stack)    //访问子树的左侧链。右子树入栈缓冲
      if(stack.length===0) break                     //栈空结束
      node=stack.pop()                               //弹出下一子树的根
    }
  }

  /**
   * 不断地的将左侧链推入栈中
   * @param node
   * @param stack
   */
  goAlongLeftBranch(node,stack){
    while (node){
      stack.push(node)
      node=node.leftChild
    }
  }
  /**
   * 中序遍历
   */
  traverseIn(node,visit){
    let stack=[]
    while (true){
      this.goAlongLeftBranch(node,stack)          //从当前节点出发，逐批入栈
      if(stack.length===0) break               //直到栈空
      node=stack.pop()                         //
      visit(node.data)
      node=node.rightChild                     //可能为空，但while(node)过滤
    }
  }
  /**
   * 后序遍历
   */
  traversePost(){
    //前序的镜像
  }

  /**
   * 之字形层级遍历,利用两个栈
   * @param node
   * @param visit
   */
  traverseLoopback(node,visit){
    if(node===null) return
    let level=0
    let evenStack=[],oddStack=[]
    evenStack.push(node)
    while (evenStack.length>0||oddStack.length>0){
      if((level&1)===0){
        //偶数层级
        while(evenStack.length>0){
          let node=evenStack.pop()
          node.leftChild&&oddStack.push(node.leftChild)           //先左孩子
          node.rightChild&&oddStack.push(node.rightChild)
          visit(node.data)
        }
      }else{
        //奇数层级
        while(oddStack.length>0){
          let node=oddStack.pop()
          node.rightChild&&evenStack.push(node.rightChild)      //先右孩子
          node.leftChild&&evenStack.push(node.leftChild)
          visit(node.data)
        }
      }
      level++
      console.log(' ')
    }
  }

  getDepth(node){
    if(node===null) return 0 //递归基，哨兵，空节点深度为0
    return Math.max(this.getDepth(node.leftChild),this.getDepth(node.rightChild))+1 // 左右子树中高度高的再加上根节点1
  }
}


let tree=new BinTree(new BinNode({name:'root'}))
let root=tree.root()
let n1=tree.insertAsLeftChild(root,{name:'n1'})
let n2=tree.insertAsRightChild(root,{name:'n2'})
let n3=tree.insertAsLeftChild(n1,{name:'n3'})
let n4=tree.insertAsRightChild(n1,{name:'n4'})
let n5=tree.insertAsLeftChild(n2,{name:'n5'})
let n6=tree.insertAsRightChild(n2,{name:'n6'})
let n7=tree.insertAsLeftChild(n5,{name:'n7'})
// tree.traversePre(root,(data)=>{
//   console.log(data.name)
// })
// console.log(root.height)
// tree.traverseIn(root,(data)=>{
//   console.log(data.name)
// })

// tree.traverseLevel(root,(data)=>{
//   console.log(data.name)
// })
tree.traverseLoopback(root,(data)=>{
  console.log(data.name)
})

console.log(tree.getDepth(root))