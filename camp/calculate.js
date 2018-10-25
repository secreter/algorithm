/**
 * Created by pengchaoyang on 2018/10/25
 * 写一个函数，计算一个四则运算表达式的值
 * 参考https://blog.csdn.net/dream_1996/article/details/78126839
 */
const operators={
  '+':1,
  '-':1,
  '*':2,
  '/':2        //priority
}
function calculate(expression){
  let postFixStack=infixToPostfix(expression).split(''),pStackTop=null
  let resultStack=[]
  while (pStackTop=postFixStack.shift()){
    if(!operators[pStackTop]){
      resultStack.push(pStackTop)
      continue
    }
    let n=+resultStack.pop(),m=+resultStack.pop(),operator=pStackTop,result=null
    switch (operator){
      case '+':
        result=n+m
        break
      case '-':
        result=n+m
        break
      case '*':
        result=n*m
        break
      case '/':
        result=m/n
        break
    }
    resultStack.unshift(result)
  }
  return resultStack.pop()
}

/**
 * 中缀表达式转后缀表达式
 * @param expression
 * @returns {string}
 */
function infixToPostfix(expression){
  let postfixExpreStack=[]
  let infixExpreStack=expression.split('')
  let operatorStack=[]
  while(infixExpreStack.length>0){
    let ch=infixExpreStack.shift()
    let oStackTop=operatorStack.length>0?operatorStack[operatorStack.length-1]:''
    if(operators[ch]){
      if(!oStackTop||oStackTop==='('||operators[oStackTop]<operators[ch]){
        operatorStack.push(ch)
      }else{
        while(oStackTop&&operators[oStackTop]>=operators[ch]){
          oStackTop=operatorStack.pop()
          postfixExpreStack.push(oStackTop)
          oStackTop=operatorStack.length>0?operatorStack[operatorStack.length-1]:''
        }
        operatorStack.push(ch)
      }
    }else if(ch==='('){
      operatorStack.push(ch)
    }else if(ch===')'){
      oStackTop=operatorStack.pop()
      while(oStackTop!=='('){
        postfixExpreStack.push(oStackTop)
        oStackTop=operatorStack.pop()
      }
    }else{
      postfixExpreStack.push(ch)
    }
  }
  let operator=''
  while (operator=operatorStack.pop()){
    postfixExpreStack.push(operator)
  }
  console.log(postfixExpreStack)
  return postfixExpreStack.join('')
}

// console.log(calculate('(3+2)*5'))
// console.log(calculate('2*(9+6/3-5)+4'))
console.log(calculate('8/2*(3+2)*5'))