/**
 * Created by pengchaoyang on 2018/10/23
 * 写一个函数match(str)，判断一个字符串中的小括号是否匹配。
 */
function match(str){
  let stack=[],LEFT_CHAR='(',RIGHT_CHAR=')'
  for(let i=0;i<str.length;i++){
    let ch=str.charAt(i)
    if(ch===LEFT_CHAR){
      stack.push(ch)
    }else if(ch===RIGHT_CHAR){
      let pop=stack.pop(ch)
      if(pop!==LEFT_CHAR) return false
    }
    console.log(stack)
  }
  return stack.length===0
}
console.log(match('(w)())sds(') )
