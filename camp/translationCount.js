/**
 * 把一个数字看成字符串，翻译成字母字符串，0->a,1->b,...25->z，一共多少种翻译法
 * 分析：
 * opt(i)表示第i位到最后一位的子序列的翻译总数,g(i,i+1)表示若i和i+1位组成的数大于25返回0，否则返回1
 * 则，opt(i)=opt(i+1)+g(i,i+1)*opt(i+2)
 * 可以看到，可以递归，但是存在大量重复问题。采用迭代填表
 * @param n
 */
function translationCount (n) {
   n=String(n)
   let len=n.length
   let list=n.split('')
   let counts=[0,1]             //存储对应长度的翻译数量
   for (let i=len-2;i>-1;i--){
     let index=len-i
      counts[index]=counts[index-1]+isLetter(''.concat(list[i],list[i+1]))*counts[index-2]
   }
   console.log(counts)
   return counts[len]
}
function isLetter (num) {
  return ~~(num>-1&&num<26)
}

translationCount (12258)