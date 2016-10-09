// let arr=[1,2,3]
// let inputArr=[
// "4",
// "EIGHT",
// "ZEROTWOONE",
// "OHWETENRTEO",
// "OHEWTIEGTHENRTEO",
// ]
let inputArr=[
// "500 3 200 19 1 66 34 563 232 65 443 78 2 3443 76 434",
// "3 5 6 2 4"
"2",
"4",
"4 1 3 5 7",
"4 6 5 4 1",
"3 1 5 9",
"5 1 3 9 7 5",
"2",
"1 2 3 4",
"1 3"
]
let rl=read_lineGenerator(inputArr)
function* read_lineGenerator(inputArr){
    if ( !(inputArr instanceof Array) ) {
        return false
    }
    yield* inputArr
    return false
}
function read_line(){
    return rl.next().value
}
function print(x){
    console.log(x)
}




// let line
// while(line=read_line()){
//  print(line)
// }
// line = line.split(' ')

// var n=parseInt(read_line())
// var a=[]
// for(i=0;i<n;i++){
//  line = read_line()
//  a.push(line.toLowerCase())
// }
// print(a)
////////////////////////////////////////////////////////////////////




/*题目描述

*/
//////////////////////////////////////////////////////////////////////////
//动态规划，每次有两种选择，每次关注最后一步是走了1还是2，把两个结果相加就是走法数量
var n=parseInt(read_line())
for(var i=0;i<n;i++){
    var m=parseInt(read_line())
    var arrs=[]
    for(var j=0;j<m;j++){
        var arr=read_line().split(' ')
        arr.forEach(function(a,i,arr){
            arr[i]=parseInt(a)
        })
        arrs.push(arr)
    }
    // debugger
    print('Case #'+(i+1)+':')
    print(jiao(arrs,m))
    print(bing(arrs))
}
function jiao(arrs){
    var timesArr=[],result=[]
    arrs.forEach(function(arr){
        arr.forEach(function(a){
            if(!timesArr[a]){
                timesArr[a]=1
            }else{
                timesArr[a]++
            }
        })
    })
    timesArr.forEach(function(a,i){
        if(a>=m){
            result.push(i)
        }
    })
    result.sort()
    return result.join(' ')
}
function bing(arrs){
    var timesArr=[],result=[]
    arrs.forEach(function(arr){
        arr.forEach(function(a){
            if(!timesArr[a]){
                timesArr[a]=1
                result.push(a)
            }
        })
    })
    result.sort()
    return result.join(' ')
}