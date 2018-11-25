/**
 * 计数排序 空间复杂度O(max-min) 时间复杂度O（n）
 * @param list
 * @returns {Array}
 */
function countSort (list) {
  let max=Number.MIN_VALUE,min=Number.MAX_VALUE
  let i=list.length
  while (--i>=0){
    if(list[i]>max) max=list[i]
    if (list[i]<min) min=list[i]
  }
  let len=max-min+1
  let counts=new Array(len).fill(0)
  i=list.length
  while (--i>=0){
    counts[list[i]-min]++
  }
  i=0
  while (++i<counts.length){
    counts[i]+=counts[i-1]
  }
  console.log(counts)
  i=list.length
  let sortedList=[]
  while (--i>=0){
    let ele=list[i]                //取待排序元素
    let index=counts[ele-min]-1    //计数在目标数组中的最大位置
    sortedList[index]=ele
    counts[ele-min]--              //计数数组数字减1
  }
  console.log(sortedList)
  return sortedList
}

countSort([2,4,3,1,5,7,6,8,9,12])