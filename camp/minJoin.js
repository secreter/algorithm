/**
 * 把一个正数组拼接成最小的整数，首先是大数问题，只能输出字符串。
 * 另外本质是排序问题，如何确定一个数与另外一个数的相对顺序。
 * 分析：令两个数为m,n,则可拼接为mn和nm,且两个数位数相等。
 * @param list
 * @returns {string}
 */
function minJoin (list) {
  return list.sort((m,n)=>{
    let mn=Number(String(m)+String(n))
    let nm=Number(String(n)+String(m))
    if(mn>nm) return 1
    else if(mn<nm) return -1
    else return 0
  }).join('')
}

console.log(minJoin([3,32,321]))