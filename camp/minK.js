/**
 * 找出数组中最大的k个元素
 * 采用一个长度为k的容器，每次替换里面最大的元素。时间复杂度O(nlogk),非常适合海量数据。并且不改变原数组
 * 这里采用最小堆
 * @param list
 */
const MinHeap =require('./MinHeap')
function maxK (list,k) {
  if(!Array.isArray(list)||k<=0||k>list.length) throw Error('args invalid')
  let minHeap=new MinHeap(list.slice(0,k+1))
  for(let i=k;i<list.length;i++){
    if(minHeap.getMin()<list[i]){
      minHeap.popMin()
      minHeap.insert(list[i])
    }
  }
  return minHeap.list
}

console.log(maxK([1,2,4,5,6,78,9,5,3,1,88,99],3))