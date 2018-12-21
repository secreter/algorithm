/**
 * Created by pengchaoyang on 2018/12/21
 */
function arrange (list) {
  let all=[]
  if(list.length===1) return [list]
  for(let i=0;i<list.length;i++){
    let subList=[...list]
    subList.splice(i,1)
    let subAll=arrange(subList).map(sub=>[list[i],...sub])
    all=[...all,...subAll]
  }
  return all
}
console.log(arrange(['a','b','c','d']))