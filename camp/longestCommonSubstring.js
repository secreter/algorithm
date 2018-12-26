/**
 * 最长公共子串
 * http://www.ahathinking.com/archives/122.html
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
  let maxLen=0
  let matrix=new Array(m*n).fill(0)
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      if(s1[i-1]===s2[j-1]){
        matrix[i*n+j]=matrix[(i-1)*n+(j-1)]+1
        maxLen=matrix[i*n+j]
      }
      else
        matrix[i*n+j]=0
    }
  }
  console.log(getSub(s1,s2,matrix,maxLen))
  print(matrix,m,n)
  return maxLen
}

/**
 * 获取子序列
 * @param s1
 * @param s2
 * @param matrix
 */
function getSub(s1,s2,matrix,maxLen){
  if(s1.length===0||s2.length===0) return ''
  // s1=s1.split('')
  // s2=s2.split('')
  let sub=[]
  let m=s1.length+1,n=s2.length+1
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(matrix[i*n+j]===maxLen){
        sub.push(s1.slice(i-maxLen,i).join(''))
      }
    }
  }

  return sub
}

function print(matrix,m,n){
  for (i=0;i<m;i++){
    console.log(matrix.slice(i*n,(i+1)*n))
  }
}

console.log(LCS('alovwwlovelovew','loves'))
