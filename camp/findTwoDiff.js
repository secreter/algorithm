/**
 * Created by pengchaoyang on 2018/12/25
 * 一个数组，除了两个只出现一次，其他所有数都出现两次，找出这个数
 * 要求O(n)时间复杂度，O(1)空间复杂度
 * 分析：两个相同的数异或之后，所有位都为0，相当于抵消。如果数组里只有一个数不同，可以异或之后得出。
 * 有两个的话，有没有办法分成两个只包含一个不同的数的数组。
 * 因为这两个数不同，所以异或之后至少有一位为1，可以获取最低为1的那位，让所有数和它异或，为1的一组，为0的一组。
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