function insertSort (list) {
  for (let i=0;i<list.length-1;i++){
    let k=i,temp=list[k+1]
    while (k>=0&&list[k]>temp){
      list[k+1]=list[k]
      k--
    }
    list[k+1]=temp
  }
  return list
}



console.log(insertSort([9,8,7,6,5,4,3,2,1]))