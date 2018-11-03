/*
* 归并排序，本质是分而治之，时间复杂度O(nlogn)
* */

function mergeSort (list,lo=0,hi=list.length) {
  if(hi-lo<2) return          //数组只有一个元素了，递归基
  let mid=(lo+hi)>>1
  mergeSort(list,lo,mid)
  mergeSort(list,mid,hi)
  merge(list,lo,mid,hi)      //归并
  return list
}

function merge (list,lo,mid,hi) {
  let leftLen=mid-lo,rightLen=hi-mid
  let leftTemp=new Array(leftLen)   //开辟发额外空间
  for (let i=0;i<leftLen;i++)
    leftTemp[i]=list[lo+i]
  for(let i=0,j=mid,k=lo;i<leftLen||j<hi;){
    //哨兵,短路原则,不执行后面的，当另一路已经越界，不用比较直接拷贝
    if(i<leftLen&&(hi<=j||leftTemp[i]<=list[j])) list[k++]=leftTemp[i++]
    if(j<hi&&(leftLen<=i||list[j]<leftTemp[i])) list[k++]=list[j++]
  }
}

console.log(mergeSort([2,3,6,86,23,67,32,6,8,3]))