/**
 * Created by pengchaoyang on 2018/12/21
 */
function combine (list,m) {
  let all=[]
  if(!m) return []
  if(list.length>m) {
    let subList=[...list]
    subList.splice(0,1)
    all=[...all,...combine (subList,m)]
    all=[...all,...combine (subList,m-1).map(sub=>[list[0],...sub])]
  }else if(list.length===m){
    return [list]
  }else{
    throw Error('m too small')
  }

  return all
}
console.log(combine(['a','b','c','d'],2))