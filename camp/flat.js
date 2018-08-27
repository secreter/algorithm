/**2018年8月27日 新题目
 *    写一个函数flat展平一个数组
 *    flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]
 **/
const flat=(list)=>list.reduce((flatted,x)=>flatted.concat(Array.isArray(x)?flat(x):x),[])

console.log(flat([1,[2,'a',[5,6]],8]))