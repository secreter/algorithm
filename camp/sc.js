/**
 * Created by pengchaoyang on 2018/9/5
 * Codewars上面的一道最短代码训练，要求代码长度不能超过120个字符，可以去https://www.codewars.com/kata/shortest-code-father-and-son提交。

 给定一个字符串，例如'AabBc'，其中大小写如果不能配对，就删除这个字符。 比如AabBc中缺少c的大写，就删除c，返回AaBb

 例如: sc("Aab") 返回 "Aa"

 sc("AabBc") 返回 "AabB"

 sc("AaaaAaab") 返回 "AaaaAaa"

 sc("aAAAaAAb") 返回 "aAAAaAA"
 */
let sc=(s,o={},i)=>[...s].filter(c=>o[c]=1).filter(c=>o[String.fromCharCode((i=c.charCodeAt())>96?i-32:i+32)]).join('')
console.log(sc('abcDsA'))