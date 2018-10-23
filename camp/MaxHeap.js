/**
 * Created by pengchaoyang on 2018/10/16
 */
class MaxHeap {
  constructor(data, Max = 10000){
    this.list = Array(Max)
    for(let i = 0; i < data.length; i++) {
      this.list[i] = data[i]
    }
    this.heapSize = data.length
    this.build()
  }

  //父节点: (i-1)/2 // 为负数时则说明父节点不存在
  //左右子节点: (i*2+1) 和 (i*2+2)
  build(){
    let lastIndex=this.heapSize-1,parentIndex=(lastIndex-1)>>1
    while (parentIndex>=0){
      let leftIndex=2*parentIndex+1
      let rightIndex=2*parentIndex+2
      if(this.list[leftIndex]>this.list[parentIndex]){
        [this.list[leftIndex],this.list[parentIndex]]=[this.list[parentIndex],this.list[leftIndex]]
        this.subRootChangeAdjust(leftIndex)
      }
      if(rightIndex<=lastIndex&&this.list[rightIndex]>this.list[parentIndex]){
        [this.list[rightIndex],this.list[parentIndex]]=[this.list[parentIndex],this.list[rightIndex]]
        this.subRootChangeAdjust(rightIndex)
      }
      parentIndex--
    }
  }

  subRootChangeAdjust(subRootIndex,lastIndex=this.heapSize-1){
    let rootIndex=subRootIndex,lastSubRootIndex=(lastIndex-1)>>1
    if (rootIndex<=lastSubRootIndex){
      let leftIndex=2*rootIndex+1
      let rightIndex=2*rootIndex+2
      if(this.list[leftIndex]>this.list[rootIndex]){
        [this.list[leftIndex],this.list[rootIndex]]=[this.list[rootIndex],this.list[leftIndex]]
        this.subRootChangeAdjust(leftIndex,lastIndex)
      }
      if(rightIndex<=lastIndex&&this.list[rightIndex]>this.list[rootIndex]){
        [this.list[rightIndex],this.list[rootIndex]]=[this.list[rootIndex],this.list[rightIndex]]
        this.subRootChangeAdjust(rightIndex,lastIndex)
      }
    }
  }
  heap_sort(){
    let lastIndex=this.heapSize-1
    while (lastIndex!==0){
      //swap last node and root node
      [this.list[lastIndex],this.list[0]]=[this.list[0],this.list[lastIndex]]
      lastIndex--
      this.subRootChangeAdjust(0,lastIndex)
    }
  }


  max_heapify(i) {
    /// TODO
  }
}

const heap = new MaxHeap([2,5,8,3,7,12,9,6])
console.log(heap.list)
heap.heap_sort()
console.log(heap.list)
// [ 12, 7, 9, 6, 5, 8, 2, 3, <9992 empty items> ]