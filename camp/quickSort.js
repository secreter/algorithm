function quickSort (list,lo=0,hi=list.length) {
  if(hi-lo<2) return    //单元素区间自然有序
  let mi=partition(list,lo,hi)
  quickSort(list,lo,mi)
  quickSort(list,mi+1,hi)          //轴点已经在正确位置，可以加1
  return list
}
function partition (list,lo,hi) {
  let mi=(lo+hi)>>1
  swap(list,lo,mi)     //取中间的数作为轴
  let pivot=list[lo]
  mi=lo
  for (let k=lo+1;k<hi;k++){
    if(list[k]<pivot){
      swap(list,++mi,k)     //小于轴的元素移动到前半部分，分界mi++
    }
  }
  swap(list,lo,mi)       //轴pivot 和mi交换，归位
  return mi
}
function swap (list,i,j) {
  [list[i],list[j]]=[list[j],list[i]]
  return list
}


console.log(quickSort([2,4,5,6,7,9,1,0,34]))