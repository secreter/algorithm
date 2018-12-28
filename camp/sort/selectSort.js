function selectSort (list) {
  for (let i=0;i<list.length;i++){
    let min=i
    for (let j=i+1;j<list.length;j++){
      if(list[j]<list[min]) min=j
    }
    swap(list,i,min)
  }
  return list
}
const swap =(list,i,j)=> ([list[i],list[j]]=[list[j],list[i]],list)
console.log(selectSort([9,2,8,5,4,3,2,1]))