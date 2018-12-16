/**
 * 判断矩阵中是否存在包含给定字符串的一条路径。可以从任意点开始，向上下左右行走，每个点只能访问一次。
 * [
 * a b t g
 * c f c s
 * j d e h
 * ]
 * str='bfce'
 * str='abfb'
 *
 * 采用回溯法 Backtracking
 */
/**
 *
 * @param matrix 数组矩阵
 * @param m      rows
 * @param n      cols
 * @param str    string
 */
function findPath (matrix,m,n,str) {
  if(!Array.isArray(matrix)||matrix.length===0||m===0||n===0||!str||matrix.length!==m*n) return false
  let usedMatrix=new Array(m*n).fill(0) //同样大小的记录是否经过过的矩阵
  let foundLength=0;   //找到路径的str 前缀长度
  //遍历所有点
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(findPathCore(matrix,m,n,i,j,str,foundLength)) return true
    }
  }
  return false

  function findPathCore (matrix,m,n,i,j,str) {
    if(str.length===foundLength) return true
    //这里判断是否越界，就可以在各个方向查找的时候省略判断
    if(i<0||i>=m||j<0||j>=n) return false
    if(usedMatrix[i*n+j]===1||matrix[i*n+j]!==str.charAt(foundLength)) return false
    /////////////////////////////////////////  当前点是str里的
    usedMatrix[i*n+j]=1
    foundLength++
    //四个方向，深度优先
    let isFind=findPathCore(matrix,m,n,i-1,j,str)  //上
              ||findPathCore(matrix,m,n,i+1,j,str) //下
              ||findPathCore(matrix,m,n,i,j-1,str) //左
              ||findPathCore(matrix,m,n,i,j+1,str) //右
    if(!isFind){
      //////////////////////////////////////   但是这个点周围没路了，回溯
      //回溯
      usedMatrix[i*m+j]=0
      foundLength--
    }
    return isFind
  }
}

console.log(findPath(['a','b','t','g','c','f','c','s','j','d','e','h'],3,4,'bfce'))
console.log(findPath(['a','b','t','g','c','f','c','s','j','d','e','h'],3,4,'abfb'))


