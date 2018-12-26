/**
 * Created by pengchaoyang on 2018/12/26
 */
function findList(sum){
  let n=sum,result=[]
  for(let i=3;i<=n;i++){
    for(let a1=1;a1<=sum;a1++){
      if(a1*i+i*(i-1)/2===sum){
        result.push(new Array(i).fill(0).map((x,i)=>a1+i))
      }else if(a1*i+i*(i-1)/2>sum){
        break
      }
    }
  }
  return result
}
console.log(findList(33))