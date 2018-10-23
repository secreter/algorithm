/**
 * Created by pengchaoyang on 2018/10/23
 * 写一个函数match(str)，判断一个字符串中的小括号是否匹配。
 */
function match(str){
  let stack=[],left=0,right=0,LEFT_CHAR='(',RIGHT_CHAR=')'
  for(let i=0;i<str.length;i++){
    let ch=str.charAt(i)
    if(left>0&&ch===RIGHT_CHAR){
      while(stack.pop()!==LEFT_CHAR);
      left--
    }else{
      if(ch===LEFT_CHAR) left++
      if(ch===RIGHT_CHAR) right++
      stack.push(ch)
    }
  }
  return left===right
}
console.log(match('(1+2+3+5*2*(3+7))') )