/**
 * 改进的冒泡排序
 * 注意，按照严格的逆序交换实现，为稳定排序
 * [lo,hi)
 */
function bubbleSort (list) {
  let lo=0,hi=list.length
  while (-1!==(hi=bubble(list,lo,hi))) ;         //没有逆序退出；有逆序记住逆序的最大位置，下次只需要检查到这里就行
  return list
}
function bubble (list,lo=0,hi=list.length) {
  let sorted=-1            //逆序的最大索引
  while (++lo<hi){
    if(list[lo-1]>list[lo]){
      swap(list,lo-1,lo)
      sorted=lo
    }
  }
  return sorted
}
function swap (list,i,j) {
  [list[i],list[j]]=[list[j],list[i]]
  return list
}

console.log(bubbleSort([2,6,76,2,7,35,7,9,43]))