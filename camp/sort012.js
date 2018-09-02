/**
 一个数组中有0,1,2三种数字，写一个针对这个数组的排序算法。

 比如A=[0,1,2,0,1,1,2,1,1]排序完结果是[0,0,1,1,1,1,1,2,2]

 要求：

 尽可能节省内存空间
 尽可能快
 */
// function *generate(num){
//   let list=[]
//   while(--num>-1){
//     yield list[num]=~~(Math.random()*1000%3)
//   }
//   // return list
// }
function generate(num){
  let list=[]
  while(--num>-1){
    list[num]=~~(Math.random()*1000%3)
  }
  return list
}
const sort012=(list)=>{
  let num2=0,sorted=[]
  // list.forEach(x=>m[x]++)
  for(x of list){
    if(x===0){
      sorted.unshift(0)
    }else if(x===1){
      sorted.push(1)
    }else{
      num2++
    }
  }
  // console.log(list)
  while(num2--) sorted.push(2)
  return sorted
}
let list=generate(100000000)
console.time('---')
// console.log(sort012(list))
sort012(list)
// sort(list)
console.timeEnd('---')


//////////////////answer，fast
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

function sort(A){
  let lo = 0,
    mid = 0,
    hi = A.length - 1

  while(mid <= hi) {
    switch(A[mid]) {
      case 0 :
        swap(A, lo++, mid++)
        break
      case 1:
        mid++
        break
      case 2:
        swap(A, mid, hi--)
        break

    }

    // 循环不变式
    // lo : [0, lo) 是0
    // hi : [hi+1, n) 是2
    // [lo, mid) 是 1
    // [mid, hi) 未排序
  }
}