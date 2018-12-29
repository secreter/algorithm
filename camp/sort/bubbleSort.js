function bubbleSort (list) {
  for (let i=0;i<list.length;i++){
    let isSwap=false
    for(let j=0,len=list.length-j;j<len-1;j++){
      if(list[j]>list[j+1]){
        isSwap=true
        swap(list,j,j+1)
      }
    }
    if(!isSwap) return list
  }
  return list
}
const swap =(list,i,j)=> ([list[i],list[j]]=[list[j],list[i]],list)
console.log(bubbleSort([9,2,8,5,4,3,2,1]))