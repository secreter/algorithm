/**
 * Created by pengchaoyang on 2018/8/31
 写一个函数peak寻找一个数组的峰值位置。 比如数组: 1,3,5,7,4,2有峰值7；已排序数组1,2,3,4,5,6，有峰值6。有的数组有多个峰值，这里只需要返回任何一个。比如数组[1,2,3,2,7,6]有两个峰值3和7。

 如果一个元素左右元素都相同，那么这个元素就是峰值，比如数组1,1,1,1，每个元素都是峰值。

 例如

 peak([1,2,3,4,5,6])  // 5(6所在的位置）
 peak([1,3,5,7,4,2]) // 3（7所在的位置）
 peak([1,2,3,2,7,6]) // 2(3所在的位置)
 peak([1,1,1,1,1,1]) // 任何一个都是峰值
 如果有多个峰值，只要随便返回一个就可以，不需要考虑顺序。
 */
/*
可以尝试单调性，没成功
若函数的 导数在 x 等于零，同时 在 x 的二次导数是：
	小于 0，便是局部极大值
	大于 0，便是局部极小值
	等于 0，检测失败（但可能有其他办法）
*/
function peak(list){
  let len=list.length,newList=[],peaks=[]   //0:level,-1:down,1:up

  //相邻去重
  newList.push(list[0])
  for(let i=1;i<len;i++)
    if(list[i]!==newList[newList.length-1])
      newList.push(list[i])
  len=newList.length
  if(len===1) return newList[0]
  if(len<3){
    if(newList[0]<newList[1]) return newList[1]
    return newList[0]
  }
  for(let i=1;i<len-1;i++){
    if(newList[i-1]<newList[i]&&newList[i+1]<newList[i]){
      return newList[i]
    }
  }
  //单调
  if(newList[0]<newList[1]){
    return newList.pop()
  }else{
    return newList.shift()
  }
}
console.log(peak([1,1,1,1,1,0]))
