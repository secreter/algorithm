function shellSort (list) {
  //不断缩小delta
  for (let delta=Math.floor(list.length/2);delta>0;delta=delta>>1){
    for (let i=0;i<delta;i++){
      //分别对delta个子序列排序
      modInsSort(list,delta)
    }
  }
  return list
}
function modInsSort (list,delta) {
  for (let i=delta;i<list.length;i+=delta){
    let k=i-delta;temp=list[k+delta]
    while (k>=0&&list[k]>temp){
      list[k+delta]=list[k]
      k-=delta
    }
    list[k+delta]=temp
  }
}

console.log(shellSort([9,2,8,5,4,3,2,1]))