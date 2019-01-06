function convertToBinary(num) {
  var stack=[]
  while(num!==0){
    stack.push(num%2)
    num>>=1
  }
  return stack.reverse().join('').padStart(8,0)
}

console.log(convertToBinary(65))
