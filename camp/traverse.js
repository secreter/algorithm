/**
 * Created by pengchaoyang on 2018/9/6
 * 有同学去普华永道，面试官给了这样一道面试题：写一个函数traverse(A)螺旋状遍历一个二维数组。 比如

 // 遍历3*3
 traverse([1,2,3,4,5,6,7,8,9], 3) // [1,2,3,6,9,8,7,4,5])

 // 遍历4*4
 traverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)
 // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

 https://blog.csdn.net/nought03/article/details/39814195
 */

function traverse(list,n){
  let beginX=0,endX=n-1,beginY=0,endY=n-1,l=[]

  for(let x=0,y=0;;){
    l.push(list[y*n+x])
    if(y===beginY&&x<endX){
      if(++x===endX){
        beginY++
        continue
      }
    }

    if(x===endX&&y<endY){
      if(++y===endY){
        endX--
        continue
      }
    }


    if(y===endY&&x>beginX){
      if(--x===beginX){
        endY--
        continue
      }
    }


    if(x===beginX&&y>beginY){
      if(--y===beginY){
        beginX++
        continue
      }
    }

    console.log(x,y)

    if(beginX===endX) break
  }
  return l
}

console.log(traverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4))