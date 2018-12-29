function quickSort (list,lo=0,hi=list.length) {
  if (hi-lo<=1) return list
  let pivot=selectPivot(lo,hi)
  swap(list,pivot,lo)              //放到第一个位置
  pivot=partition(list,lo,hi)
  quickSort(list,lo,pivot)
  quickSort(list,pivot+1,hi)
  return list
}
function selectPivot (lo,hi) {
  return (lo+hi)>>1
}

function partition (list,lo=0,hi=list.length) {
  let left=lo,right=hi-1
  let temp=list[lo]
  while (right>left){
    while(list[right]>=temp&&right>left){
      right--
    }
    if(left<right){
      list[left]=list[right]
      left++
    }
    while (list[left]<=temp&&right>left){
      left++
    }
    if(left<right){
      list[right]=list[left]
      right--
    }
  }
  list[left]=temp   //相遇位置
  return left
}

const swap =(list,i,j)=> ([list[i],list[j]]=[list[j],list[i]],list)
console.log(quickSort([9,2,8,5,4,3,2,1]))