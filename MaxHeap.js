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

  build(){

  }

  max_heapify(i) {
    /// TODO
  }
}

const heap = new MaxHeap([2,5,8,3,7,12,9,6])
console.log(heap.list)