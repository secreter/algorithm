function throttle (fn,wait,options={}) {
  var timer,context,args,result
  var previous=0
  var later=function () {
    //是否开始先执行一次
    previous=options.leading===false?0:Date.now()
    timer=null
    fn.apply(context,args)
    if(!timer) context=args=null
  }

  var throttled=function () {
    var now=Date.now()
    if(!previous&&options.leading===false) previous=now
    var remaining=wait-(now-previous)
    context=this  //记住函数调用时的上下文
    args=arguments
    //到时间或者修改了系统时间
    if(remaining<=0||remaining>wait){
      if(timer){
        //中间触发的到时间都走时间戳方式，清除定时函数
        clearTimeout(timer)
        timer=null
      }
      previous=now
      fn.apply(context,args)
      context = args = null
    }else if(!timer &&options.trailing!==false){
      timer=setTimeout(later,remaining)
    }
  }
  
  throttled.cancel=function () {
    clearTimeout(timer)
    previous=0
    timer=null
  }
  return throttled
}