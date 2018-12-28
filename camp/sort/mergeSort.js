function mergeSort (list,lo=0,hi=list.length) {
  if(hi-lo<=1) return list
  let mi=(lo+hi)>>1
  mergeSort(list,lo,mi)
  mergeSort(list,mi,hi)
  merge(list,lo,mi,hi)
  return list
}
function merge(list,lo,mi,hi) {
  let leftLen=mi-lo
  let tempList=new Array(leftLen)
  for (let i=0;i<leftLen;i++){
    tempList[i]=list[lo+i]
  }
  for(let i=0,j=mi,k=lo;i<leftLen||j<hi;){
    if(i<leftLen&&(j>=hi||tempList[i]<=list[j])) list[k++]=tempList[i++]
    if(j<hi&&(i>=leftLen||list[j]<tempList[i])) list[k++]=list[j++]
  }
}
console.log(mergeSort([9,2,8,5,4,3,2,1]))
