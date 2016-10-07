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
"2",
"3"
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
// 	print(line)
// }
// line = line.split(' ')

// var n=parseInt(read_line())
// var a=[]
// for(i=0;i<n;i++){
// 	line = read_line()
// 	a.push(line.toLowerCase())
// }
// print(a)
////////////////////////////////////////////////////////////////////




/*题目描述
有一楼梯共m级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第m级，共有多少走法？
注：规定从一级到一级有0种走法。
输入
输入数据首先包含一个整数n(1<=n<=100)，表示测试实例的个数，然后是n行数据，每行包含一个整数m，（1<=m<=40), 表示楼梯的级数。
输出
对于每个测试实例，请输出不同走法的数量。
*/
//////////////////////////////////////////////////////////////////////////
//动态规划，每次有两种选择，每次关注最后一步是走了1还是2，把两个结果相加就是走法数量
var n=read_line()
var m
while(m=read_line()){
	var numArr=new Array(m+1)
	print(ways(m))
}
function ways(m){

	if(m==2){
		return 1
	}else if(m==3){
		return 2
	}else{
		if(numArr[m]){
			return numArr[m]
		}else{
			numArr[m]=ways(m-2)+ways(m-1)
		}
		return ways(m-2)+ways(m-1)
	}
}
