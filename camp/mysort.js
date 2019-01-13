function quickSort (list,lo=0,hi=list.length) {
  if(hi-lo<=1) return
  let pivot=partition(list,lo,hi)
  quickSort(list,lo,pivot)
  quickSort(list,pivot+1,hi)
  return list
}

function partition(list,lo=0,hi=list.length) {
  let temp=list[lo]
  let k=lo+1  //分界
  for(let i=lo+1;i<hi;i++){
    if(list[i]<temp){
      swap(list,i,k++)
    }
  }
  swap(list,lo,--k)
  return k
}

function swap (list,i,j) {
  [list[i],list[j]]=[list[j],list[i]]
}


function mergeSort(list,lo=0,hi=list.length){
  if(hi-lo<=1) return list
  let mi=(lo+hi)>>1
  mergeSort(list,lo,mi)
  mergeSort(list,mi,hi)
  merge(list,lo,mi,hi)
  return list
}

function merge(list,lo,mi,hi){
  let leftLen=mi-lo
  let tempList=new Array(leftLen)
  for (let i=0;i<leftLen;i++){
    tempList[i]=list[lo+i]
  }
  let i=0,j=mi,k=lo
  while (i<leftLen||j<hi){
    if(i<leftLen&&(j>=hi||tempList[i]<=list[j])) list[k++]=tempList[i++]
    if(j<hi&&(i>=leftLen||list[j]<tempList[i])) list[k++]=list[j++]
  }
}

console.log(mergeSort([9,8,7,6,5,4,3,2,1]))
