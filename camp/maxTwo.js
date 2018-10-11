/**
 * Created by pengchaoyang on 2018/10/11
 * 分治策略求最大的两个数，O()
 */
let list=[1,3,6,8,3,8,35,8,3,5,35,56,7,76,34]
function maxTwo(list,low=0,high=list.length){             //[low,high)

    let max1,max2
    if(high-low===2){
        return list[low]<list[low+1]?{max1:list[low+1],max2:list[low]}:{max1:list[low],max2:list[low+1]}
    }
    if(high-low===3){
        max2=list[low]<list[low+1]?list[low+1]:list[low]
        if(list[low+2]<max2){
            max1=max2
            max2=list[low+2]
        }else{
            max1=list[low+2]
        }
        return {max1,max2}
    }
    let mid=(low+high)>>1           //middle
    let maxLeft=maxTwo(list,low,mid)
    let maxRight=maxTwo(list,mid,high)
    if(maxLeft.max1>maxRight.max1){
        max1=maxLeft.max1
        max2=maxLeft.max2>maxRight.max1?maxLeft.max2:maxRight.max1
    }else{
        max1=maxRight.max1
        max2=maxRight.max2>maxLeft.max1?maxRight.max2:maxLeft.max1
    }
    return {max1,max2}
}
console.log(maxTwo(list))