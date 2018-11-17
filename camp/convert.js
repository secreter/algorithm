/**
 * Created by pengchaoyang on 2018/11/6
 * 10进制转任意进制
 * 短除法、栈倒序输出
 */

function convert(n,decimal){
  if(n===0) return 0
  let digit=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  let stack=[]
  while (n){
    stack.push(digit[n%decimal])
    n=~~(n/decimal)
  }
  let res=''
  while (stack.length>0){
    res+=stack.pop()
  }
  return res
}

console.log(convert(255,16))