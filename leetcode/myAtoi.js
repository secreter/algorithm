/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX=2**31-1,INT_MIN=-(2**31)
var myAtoi = function(str) {
  let s=str.trimLeft()
  if(!isIntAble(s)||s==='') return 0
  let sign=''
  if(s[0]==='-'||s[0]==='+'){
    sign=s[0]
  }
  let num=0
  let k=sign?1:0
  for(;k<s.length;k++){
    if(!isIntAble(s[k])) break
  }
  k--
  for(let i=sign?1:0;i<=k;i++){
    num=Number(s[i])+num*10
  }
  num=sign+num
  if(num>INT_MAX){
    num=INT_MAX
  }
  if(num<INT_MIN){
    num=INT_MIN
  }
  return num
};

function isIntAble(s){
  let start=0
  if(s[0]==='-'||s[0]==='+'){
    start=1
  }
  if(s[start]===undefined) return false
  let codeS=s[start].charCodeAt(),code0='0'.charCodeAt(),code9='9'.charCodeAt()
  if(codeS>=code0&&codeS<=code9){
    return true
  }
  return false
}

console.log(myAtoi("4193 with words"))