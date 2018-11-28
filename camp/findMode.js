/**
 * 找到绝对众数，或者说数组中数目大于一半的数字。只有存在绝对众数结果才正确
 * 采用减而治之的方法，假设存在绝对众数m,则数目一定大于一半。假定第一个数m是众数，则如果下一个数不等于m,此时两种数出现的
 * 次数差为0，将这段前缀去除，原理的众数在子规模中仍然是众数。若第一个数m不是是众数，count为0时删除前缀，子规模中众数不变。
 * 故，若存在众数，为最终m
 * @param list
 * @returns {*}
 */
function findMode (list) {
  let mode,count=0,i=-1
  while(i++<list.length){
    if(count===0){
      mode=list[i]
      count=1
    }else{
      list[i]===mode?count++:count--
    }
  }
  return mode
}

console.log(findMode([1,2,3,4,5,3,3,3,3,3,2]))