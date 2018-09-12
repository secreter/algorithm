/**
 * Created by pengchaoyang on 2018/9/12
 */
// 写一个函数maxk(A, k)找到一个数组中最大的k个数字。 如：
//
// maxk([3,5,8,2,1,6],2) // 8, 6 或者 6,8 （结果不要求顺序)
// maxk([3,5,8,2,1,6],3) // 8,6,5

function maxk(list,k){
    let max=list.splice(0,k)
    max.sort((a,b)=>a-b)
    list.forEach(x=>{
        if(x<=max[0]) return
        max[0]=x
        for(let i=1;i<k;i++){
            if(max[i-1]>max[i]){
                [max[i-1],max[i]]=[max[i],max[i-1]]
            }else{
                return
            }
        }
    })
    return max
}
console.log(maxk([3,5,8,2,1,6],3))