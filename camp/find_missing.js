/**
 * Created by pengchaoyang on 2018/9/4
 * 写一个函数find_missing(A, low, high)，给定一个范围[low,high]，寻找一个数组中缺失的元素。
 */
// 空间复杂度高O(n)
function find_missing(list,low,high){
  let len=high-low+1,hits=new Array(len),missing=[]
  list.forEach(x=>hits[x-low]=true)
  for(let i=0;i<len;i++) !hits[i]&&missing.push(i+low)
  return missing
}
console.log(find_missing([1, 14, 11, 51, 15],50, 55)) // [50, 52, 53, 54])