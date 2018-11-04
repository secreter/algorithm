/**
 * 选择排序
 * 依然是O(n2),但是相对起泡排序，每趟只交换一次，选择出最大的，交换次数有所改进
 */

function selectionSort (list,lo=0,hi=list.length) {
  while ((hi=selectMax(list,lo,hi))>1);
  return list
}
function selectMax (list,lo=0,hi=list.length) {
  let index=hi-1
  while (lo<hi-1){
    if(list[lo]>list[index]) index=lo
    lo++
  }
  swap(list,index,hi-1)                  //只交换一次
  return hi-1                            //每次选择后，最后一个一定是当前规模的最大值，规模缩小1
}
function swap (list,i,j) {
  [list[i],list[j]]=[list[j],list[i]]
  return list
}

console.log(selectionSort([2,6,76,2,7,35,7,9,433]))