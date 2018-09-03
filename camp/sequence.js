/**
 * Created by pengchaoyang on 2018/9/3
 * 封装一个函数sequence对一个无限序列求值。函数接收一个lambda表达式代表一个无限序列，然后提供两个操作take和takeWhile。

 例如：

 sequence( n => n * n ).take(5) // [0, 1, 4, 9, 16]
 sequence( n => n * 4 ).takeWhile( n => n < 20 ) // [0, 4, 8, 12, 16]
 */

function sequence(fn){
  const generate=function *(condition,result=false){
    let i=0,x=fn(i)
    while(condition(result?x:i)){
      yield x
      i++
      x=fn(i)
    }
  }
  return {
    take:(n)=>[...generate(x=>x<n)],
    takeWhile:(cb)=>[...generate(cb,true)]
  }
}
console.log(sequence(n=>n*n).take(5))
console.log(sequence(n=>n*n).takeWhile( n => n < 20))
