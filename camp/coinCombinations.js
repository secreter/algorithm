/**
 * 假设我们有8种不同面值的硬币｛1，2，5，10，20，50，100，200｝，用这些硬币组合够成一个给定的数值n。
 * 例如n=200，那么一种可能的组合方式为 200 = 3 * 1 + 1＊2 + 1＊5 + 2＊20 + 1 * 50 + 1 * 100.
 * 问总过有多少种可能的组合方式
 * http://www.cnblogs.com/python27/archive/2013/09/05/3303721.html
 * dp[i][sum] = dp[i-1][sum - 0*Vm] + dp[i-1][sum - 1*Vm]+ dp[i-1][sum - 2*Vm] + ... + dp[i-1][sum - K*Vm]; 其中K = sum / Vm
 *
 * 注意：
 * 通过此公式，我们可以看到问题被一步步缩小，那么初始情况是什么呢？如果sum=0，那么无论有前多少种来组合0，只有一种可能，就是各个系数都等于0；
 dp[i][0] = 1   // i = 0, 1, 2, ... , m
 这也是一个接
 * @param coins 提供的硬币种类
 * @param sum
 */
function coinCombinations (coins,sum) {
  if(!Array.isArray(coins)) throw Error('Array')
  let m=coins.length+1,n=sum+1
  let matrix=new Array(m*n).fill(0)
  //init: dp[i][0] = 1; i = 0, 1, 2 ..., coinKinds
  //Notice: dp[0][0] must be 1, althongh it make no sense that
  //using 0 kinds of coins construct 0 has one way. but it the foundation
  //of iteration. without it everything based on it goes wrong
  for (let i=0;i<m;i++){
    matrix[i*n+0]=1
  }
  for (let i=1;i<m;i++){
    //硬币种类为0-coin[i-1]的情况下
    for (let j=1;j<n;j++){
      //sum=j的组合数
      for(let k=0;k<=Math.floor(j/coins[i-1]);k++){
        //使用k枚coins[i-1]的情况总和
        matrix[i*n+j]+=matrix[(i-1)*n+j-k*coins[i-1]]
      }
    }
  }
  print(matrix,m,n)
  return matrix[n*m-1]
}

function print(matrix,m,n){
  for (i=0;i<m;i++){
    console.log(matrix.slice(i*n,(i+1)*n).join())
  }
}
console.log(coinCombinations([1, 2, 5, 10, 20, 50, 100, 200],200))
console.log(coinCombinations([1, 2, 5],10))