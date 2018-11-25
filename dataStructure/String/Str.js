class Str{
  constructor (s){
    if(typeof s==='string') {
      this.s=s.split('')
    }else if(Array.isArray(s)){
      this.s=s
    }else{
      throw ('string or array')
    }
  }

  /**
   * 蛮力搜索子串 O(n*m)
   * @param sub
   * @returns {number}
   */
  match1(sub){
    let i=0,j=0,len=this.s.length
    while(i<len&&j<sub.length){
      if(this.s[i]===sub[j]){
        i++
        j++
      }else{
        i-=j-1
        j=0
      }
    }
    return i-j>len-sub.length?-1:i-j
  }

  /**
   * KMP算法 O(n)
   * @param sub
   * @returns {number}
   */
  match(sub){
    let i=0,j=0,len=this.s.length
    let next=this.buildNext(sub)     //预处理一张表
    while(i<len&&j<sub.length){
      if(j<0||this.s[i]===sub[j]){
        i++
        j++
      }else{
        j=next[j]
      }
    }
    return i-j>len-sub.length?-1:i-j
  }

  /**
   * KMP算法，构造查询表
   * @param sub
   */
  buildNext(sub){
    let m=sub.length,j=0
    let next=new Array(sub.length)
    let t=next[0]=-1   //哨兵，-1表示通配任何字符
    while(j<m-1){
      if(t<0||sub[j]===sub[t]){
        // next[++j]=++t           //匹配
        //改进
        j++
        t++
        next[j]=sub[j]!==sub[t]?t:next[j]
      }else{
        t=next[t]            //失配，递归
      }
    }
    return next
  }
}

let text=new Str(['h','e','l','l','o',' ','w','o','r','l','d'])
let p=['w','o','r','l','d']
console.log(text.match(p))
console.log(text.match(['h','s']))