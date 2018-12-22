class MinHeap {
  constructor (list){
    if(!Array.isArray(list)) throw Error('list is an array')
    this.list=[...list]
    this.size=list.length
    this.buildHeap()
  }
  leftChild(pos){
    return pos*2+1
  }
  rightChild(pos){
    return pos*2+2
  }
  parent(pos){
    return Math.floor((pos-1)/2)
  }
  isLeaf(pos){
    return pos>=Math.floor(this.size/2)&&pos<this.size
  }
  buildHeap(){
    let i=Math.floor(this.size/2-1)     //最后一个内部节点
    for (;i>=0;i--){
      this.siftDown(i)                   //下滤
    }
  }
  getMin(){
    if(this.size===0) return null
    return this.list[0]
  }
  popMin(){
    if(this.size===0) return null
    swap(this.list,0,this.size-1)
    this.size--
    this.siftDown(0)
    return this.list.pop()

  }

  /**
   * 在最后插入
   * @param rank
   */
  insert(rank){
    this.list[this.size]=rank
    this.siftUp(this.size)
    this.size++
  }
  remove(pos){

  }
  siftDown(pos){
    let tempPos=pos
    let temp=this.list[tempPos]              //暂存当前值
    let j=this.leftChild(tempPos)            //左孩子
    while (j<this.size){                    //一直向下沉
      if(j<this.size-1&&this.list[j]>this.list[j+1]){         //右孩子存在，右孩子小于左孩子
        j++                    //和最小的孩子交换
      }
      if(this.list[j]<temp){
        this.list[tempPos]=this.list[j]   //用较小的孩子覆盖父节点
        tempPos=j
        j=this.leftChild(tempPos)          //继续下沉
      }else{
        break             //满足堆序性
      }
    }
    this.list[tempPos]=temp     //将下滤值放到最终位置
  }
  siftUp(pos){
    let tempPos=pos
    let temp=this.list[tempPos]              //暂存当前值
    while (tempPos>0&&this.list[this.parent(tempPos)>temp]){
      this.list[tempPos]=this.list[this.parent(tempPos)]
      tempPos=this.parent(tempPos)
    }
    this.list[tempPos]=temp
  }
}

function swap (list,i,j) {
  [list[i],list[j]]=[list[j],list[i]]
  return list
}

// let minHeap=new MinHeap([9,8,7,6,5,4,3,2,1])
// console.log(minHeap.list)
// while (minHeap.size>0){
//   console.log(minHeap.popMin())
// }

module.exports= MinHeap