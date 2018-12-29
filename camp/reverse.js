/**
 * Created by pengchaoyang on 2018/12/29
 */
/**
 * 反转整个字符
 * @param str
 * @param lo
 * @param hi
 * @returns {*}
 */
function reverse(str,lo=0,hi=str.length-1){
  if (str.length<1) return str
  str=str.split('')
  while(lo<hi){
    swap(str,lo++,hi--)
  }
  return str.join('')
}

function swap(list,i,j){
  return ([list[i],list[j]]=[list[j],list[i]] , list)
}

/**
 * 以单词为单位反转字符，可以先反转每个单词，再反转一遍整个字符
 * @param str
 * @returns {*}
 */
function reverseOnlyWordOrder (str) {
  for(let i=0,k=0;i<str.length;i++){
    if(str[i]===' '){
      str=reverse(str,k,i-1)
      k=++i
    }
    if(i===str.length-1){
      str=reverse(str,k,i)
    }
  }
  str=reverse(str)
  return str
}

/**
 * 字符旋转，相当于把前n个字符旋转到后面去，可以在n的地方想象一根轴，就可以借用单词反转了
 * @param str
 * @param num
 * @returns {*}
 */
function rotateStr (str,num) {
  if(num>str.length) throw Error('wrong num')
  str=reverse(str,0,num-1)
  str=reverse(str,num,str.length-1)

  str=reverse(str)
  return str
}

console.log(reverse('on Saturday'))
console.log(reverseOnlyWordOrder('on Saturday'))
console.log(rotateStr('onSaturday',2))