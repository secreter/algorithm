/**
 * 在m*n的棋盘上，每格都放着礼物，价值为正整数，从（0,0）开始，每次向下或向右走一步，求能获取的礼物最大值
 * 分析：动态规划问题
 * f(m,n)=max(f(m-1,n),f(m,n-1))+Vm,n
 * 递归有重复，要么备忘录，要么填表
 * @param matrix
 */
function maxValue (matrix,m,n) {
  //注意这里填表矩阵行列都比原来的矩阵大1，和原来矩阵不要混淆
  let vMatrix=new Array((m+1)*(n+1)).fill(0)    //初始化0行0列为0
  for (let i=1;i<=m;i++){
    for (let j=1;j<=n;j++){
      vMatrix[(n+1)*i+j]=Math.max(vMatrix[(n+1)*(i-1)+j],vMatrix[(n+1)*i+j-1])+matrix[n*(i-1)+j-1]
    }
  }
  console.log(vMatrix)
  return vMatrix[(m+1)*(n+1)-1]
}
console.log(maxValue([
  1,10,3,8,
  12,2,9,6,
  5,7,4,11,
  3,7,16,5
],4,4))