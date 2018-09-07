/**
 * Created by pengchaoyang on 2018/9/7
 * 一个数组已经几乎被排序好了，除了部分数字外。 写一个排序算法对他们进行排序。
 */
//冒泡排序，每次趟都有一个数在正确的位置上，从小到大就是从后向前有序，如果是基本有序的数据，可以在逆序数为0的时候结束排序
function sort(list) {
  let hasReverse=1,len=list.length
  for(let i=0;i<len;i++){
    hasReverse=0
    for(let j=1;j<len-i;j++){
      if(list[j-1]>list[j]){
        [list[j-1],list[j]]=[list[j],list[j-1]]
        hasReverse=1
      }
    }
    if(hasReverse===0) break
  }
  return list
}
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 100, 9, 200]))