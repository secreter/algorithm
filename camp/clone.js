/*
写一个程序clone深度拷贝一个javascript对象。

要求：

支持对象拷贝
支持函数成员拷贝
支持数组拷贝
支持日期对象拷贝
支持Momemnt等地方库对象拷贝
*/
function clone(obj)
{
  if(obj == null || typeof obj !== 'object') return obj

  let newObj = null

  // 时间对象有特殊性
  if(obj.constructor === Date){
    //constructor 指向构造函数
    newObj = new obj.constructor(obj)   //传入obj复制原来的时刻
  } else {
    // 兼容Moments等库
    if(obj.clone) {return obj.clone() }
    newObj = new obj.constructor()
  }

  for(let key in Object.getOwnPropertyDescriptors(obj)){
    newObj[key] = clone( obj[key] )
  }
  return newObj
}