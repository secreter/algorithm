/**
 * Created by pengchaoyang on 2018/11/2
 */
//这个只能查到有无，如果有重复，不能查到第一个元素
// function binSearch (list,x,lo=0,hi=list.length) {
//
//   while(hi-lo>0){
//     let mid=(hi+lo)>>1
//     if(x<list[mid]) hi=mid
//     else if(list[mid]<x) lo=mid
//     else return mid
//   }
//   return -1
// }

function sort (list) {
  return list.sort((a,b)=>{
    if(a-b>0) return 1
    else if(a-b<0) return -1
    else return 0
  })
}


function binSearch(list,x,lo=0,hi=list.length){
  while (hi-lo>1) {
    let mid=(lo+hi)>>1
    if(x<list[mid]) hi=mid    //[lo,mid)
    else lo=mid               //[mid,hi)
  }
  return list[lo]===x?lo:-1
}
let list=[1,2,8,3,4,5,6,6,7,8]
list=sort (list)
console.log(binSearch(list,6))