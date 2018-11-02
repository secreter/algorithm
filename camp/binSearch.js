/**
 * Created by pengchaoyang on 2018/11/2
 */

function binSearch (list,x,lo=0,hi=list.length) {

  while(hi-lo>0){
    let mid=(hi+lo)>>1
    if(x<list[mid]) hi=mid
    else if(list[mid]<x) lo=mid
    else return mid
  }
  return -1
}

function sort (list) {
  return list.sort((a,b)=>{
    if(a-b>0) return 1
    else if(a-b<0) return -1
    else return 0
  })
}
let list=[1,2,8,3,4,5,6,7,8]
list=sort (list)
console.log(binSearch(list,6))