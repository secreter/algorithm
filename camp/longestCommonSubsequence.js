/**
 * 最长公共子序列
 * https://www.kancloud.cn/digest/pieces-algorithm/163624
 * 动态规划
 * @param s1
 * @param s2
 * @constructor
 */
function LCS (s1,s2) {
  if(s1.length===0||s2.length===0) return 0
  s1=s1.split('')
  s2=s2.split('')
  let m=s1.length+1,n=s2.length+1
  let matrix=new Array(m*n).fill(0)
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      if(s1[i-1]===s2[j-1])
        matrix[i*n+j]=matrix[(i-1)*n+(j-1)]+1
      else
        matrix[i*n+j]=Math.max(matrix[i*n+(j-1)],matrix[(i-1)*n+j])
    }
  }
  console.log(getSub(s1,s2,matrix))
  print(matrix,m,n)
  return matrix[n*m-1]
}

/**
 * 获取子序列
 * @param s1
 * @param s2
 * @param matrix
 */
function getSub(s1,s2,matrix){
  if(s1.length===0||s2.length===0) return ''
  // s1=s1.split('')
  // s2=s2.split('')
  let sub=[]
  let m=s1.length+1,n=s2.length+1
  let i=m-1,j=n-1
  while (i>0&&j>0){
    console.log(i,j)
    if(s1[i-1]===s2[j-1]){
      //是一个子序列字符
      sub.unshift(s1[i-1])
      i--
      j--   //对角线缩小
      continue
    }
    if(matrix[(i-1)*n+j]>=matrix[i*n+(j-1)]){
      i--      //向值大的一个反向回退，或者说值等于上一步的值的方向，可能存在多个分叉，这里只输出一个
    }else{
      j--
    }
  }
  return sub
}

function print(matrix,m,n){
  for (i=0;i<m;i++){
    console.log(matrix.slice(i*n,(i+1)*n))
  }
}

LCS('lxoavse','loves')
