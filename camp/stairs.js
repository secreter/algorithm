/*
* 一个人爬一个n级楼梯，他可以一次迈1步，也可以1次迈两步，也可以一次迈三步，……也可以一次迈n步。 写一个函数steps(n)，求这个人一共有多少种走法？
*
* 中心思想是：假设他已经在最后一层n，那么他前一步可能是n-1,n-2或者n-3；那么n-1前一步又可能是n-2,n-3,n-4，所以一直循环递推，可得出答案.
* */
let f=[1,1,2]  //缓存和初始化斐波那契数列,f(n)=f(n-1)+f(n-2)+...+f(n-m)+...+f(n-n)  ,
function getF (m) {
  if(f[m]!==undefined) return f[m]
  let num=0
  for (let i=0;i<m;i++){
    f[i]=getF(i)
    num+=f[i]
  }
  return num
}
function steps(n){
  let way=0
  for (let i=1;i<=n;i++){
    way+=getF(i)
  }
  return way
}
console.log(steps(5))