/*
题目描述
城市E的马路上有很多路灯，每两个相邻路灯之间的间隔都是1公里。小赛是城市E的领导，为了使E城市更快更好的发展，需要在城市E的一段长度为M的主干道上的一些区域建地铁。这些区域要是建了地铁，就需要挪走相应的路灯。可以把长度为M的主干道看成一个数轴，一端在数轴0的位置，另一端在M的位置；数轴上的每个整数点都有一个路灯。要建地铁的这些区域可以用它们在数轴上的起始点和终止点表示，已知任一区域的起始点和终止点的坐标都是整数，区域之间可能有重合的部分。现在要把这些区域中的路灯（包括区域端点处的两个路灯）移走。你能帮助小赛计算一下，将这些路灯移走后，马路上还有多少路灯？
输入
输入文件的第一行有两个整数M（1 <= M <= 10000）和 N（1 <= N <= 100），M代表马路的长度，N代表区域的数目，M和N之间用一个空格隔开。接下来的N行每行包含两个不同的整数，用一个空格隔开，表示一个区域的起始点和终止点的坐标。
所有输入都为整数。且M和N的范围为上面提示范围。
输出
输出文件包括一行，这一行只包含一个整数，表示马路上剩余路灯的数目。
样例输入
500 3
100 200
150 300
360 361
样例输出
298
http://exercise.acmcoder.com/online/online_judge_ques?ques_id=1652&konwledgeId=134

*/

let inputArr=[
"500 3",
"100 200",
"150 300",
"360 361"
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




////////////////////////////////////////////////////////////////////



var arr=[]  //[[num,pos]] pos=0表示是区间左边，pos=1表示是区间右边，num一起排序，最后像括号匹配一样找最外面的区间
var line=read_line()
line=line.split(' ')
var num=parseInt(line[0])+1
var n=parseInt(line[1])
var left,right
var result=[]
while(line=read_line()){
	line=line.split(' ')
	left=parseInt(line[0])
	right=parseInt(line[1])
	arr.push([left,0])
	arr.push([right,1])
}
arr.sort(function(a,b){
	return a[0]-b[0]
})
var len=arr.length,k=0,stack=[]
for(var i=0;i<len;i++){
	if(arr[i][1]==0){
		stack.push(arr[i][0])
		k++
	}else{
		left=stack.pop()
		k--
	}
	if(k==0){
		result.push([left,arr[i][0]])
	}
}
len=result.length
for(i=0;i<len;i++){
	num-=(result[i][1]-result[i][0]+1)
}
print(num)
console.log(arr)
console.log(result)
console.log(num)