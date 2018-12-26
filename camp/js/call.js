/**
 * Created by pengchaoyang on 2018/12/26
 */
'use strict'
function call(context){
  context=context==null?window:Object(context)
  var args = [];
  var tmp=context.fn
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  context.fn=this
  var re=eval('context.fn(' + args +')')
  context.fn=tmp
  return re
}




function foo(age){
  console.log(this.name,age)
}
var bar={
  name:'bob'
}
// foo.call(bar)
Function.prototype.call2=call
foo.call2(bar,13)
