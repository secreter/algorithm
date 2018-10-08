//写一个函数sum_subset(S,N)：一个集合S里面都是正整数，求和为N的所有非空子集。
//
// 比如{1,3,8,5,2} N=10 那么有{8, 2}, {3,5,2}

function sum_subset(S,N,path=[]){
  //当前元素在或不在子集里
  let s=[],head=S.slice(0,S.length-1),tail=S[S.length-1],newSets=[]
  if(N===0) return [path]       //返回子集集合
  if(N<0) return []             //返回子集集合 为空
  if(head.length===0) return []  // 所有元素加入子集和不为N返回空集

  //不在的
  newSets=newSets.concat(sum_subset(head,N,path))
  //在的
  newSets=newSets.concat(sum_subset(head,N-tail,path.concat(tail)))
  return newSets //返回在和不在的两种情况并集
}
console.log(sum_subset([1,3,8,5,2],10))