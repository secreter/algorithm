/**
 * Created by pengchaoyang on 2018/12/25
 */
function find (list) {
  let xorResult=list[0],a,b
  for (let i=1;i<list.length;i++){
    xorResult^=list[i]
  }
  let factor=lowestOne(xorResult)
  for (let i=0;i<list.length;i++){
    if(factor&list[i]){
      if(a===undefined) {
        a=list[i]
      }else{
        a^=list[i]
      }
    }else{
      if(b===undefined) {
        b=list[i]
      }else{
        b^=list[i]
      }
    }
  }
  return [a,b]
}

function lowestOne (num) {
  let factor=1
  while(true){
    //位运算优先级比比较运算符低
    if(num&factor) return factor
    factor=factor<<1
    if(factor>10) break
  }
}
console.log(find([1,1,2,2,3,3,4,5]))