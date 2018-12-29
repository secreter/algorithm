/**
 * Created by pengchaoyang on 2018/12/29
 */
/**
 * 给定一个数组，和一个华东窗口大小，求滑动窗口每个状态下的最大值
 * @param list
 * @param size
 * @returns {Array}
 */
function slideWindowMax(list,size){
  let maxList=[],maxQueue=[]
  //初始化maxQueue
  for(let i=0;i<size;i++){
    if(maxQueue.length===0||list[maxQueue[maxQueue.length-1]]>list[i]){
      maxQueue.push(i)
    }else{
      let pop=null
      while(maxQueue.length>0&&list[maxQueue[maxQueue.length-1]]<=list[i]){
        maxQueue.pop()
      }
      maxQueue.push(i)
    }
    console.log(maxQueue)
  }
  maxList.push(list[maxQueue[0]])
  //滑动,i出窗口，j进窗口
  for(let i=0,j=size;i<list.length-size;i++,j++){
  	if(maxQueue.length===0||list[maxQueue[maxQueue.length-1]]>list[j]){
  		maxQueue.push(j)
  	}else{
  		let pop=null
  		while(maxQueue.length>0&&list[maxQueue[maxQueue.length-1]]<=list[j]){
  			maxQueue.pop()
  		}
  		maxQueue.push(j)
  	}
  	if(maxQueue[0]===i){
  		maxQueue.shift()
  	}
  	maxList.push(list[maxQueue[0]])
  	console.log(maxQueue)
  }
  return maxList
}

console.log(slideWindowMax([4,1,2,3,4,5,6,7,8,9],3))