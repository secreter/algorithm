/**
 * 不用加乘除，循环，if来实现1+2+...+n
 * 分析：用右移来实现除法，逻辑或来实现二进制加法，用短路来实现if,用递归来实现循环。   4|2|1|0=7
 * @param n
 */
function addToN (n) {
  console.log(n)
  return n&&(n|addToN(n>>1))
}

console.log(addToN(4))