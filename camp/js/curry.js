function curry (fn,args=[]) {
  let fnLength=fn.length
  return function () {
    //这里要生成一个新的_args，不然调用curry 之后的函数多次时，引用的是同一个args
    let _args=args.concat(...Array.prototype.slice.call(arguments))
    if(_args.length<fnLength){
      //调用的参数还不够，继续返回函数
      return curry.call(this,fn,_args)
    }else{
      return fn.apply(this,_args)
    }
  }
}

var fn = curry(function(a, b, c) {
  console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
