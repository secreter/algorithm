function convertZ (s, rows) {
  if (rows === 1) return s;
  let goDown=false
  let curRow=0     //当前行
  let list=new Array(Math.min(rows,s.length)).fill(0).map(x=>[])   //fill([])会引用同一个[]
  for(let i=0;i<s.length;i++){
    if(curRow===rows-1||curRow===0){
      goDown=!goDown
    }
    list[curRow].push(s[i])
    if(goDown){
      curRow++
    }else{
      curRow--
    }
  }
  return list.reduce((str,arr)=>{
    return str.concat(arr.join(''))
  },'')
}

console.log(convertZ('LEETCODEISHIRING',3))