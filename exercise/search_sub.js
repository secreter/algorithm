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
"aaaabbbcccdddss好人",
"abc好是"
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

function swap(arr,i,j){
	var temp
	temp=arr[i]
	arr[i]=arr[j]
	arr[j]=temp
}
//[left,right]
function q_sort(arr,left,right){
	let i=left,j=right-1,len=right-left,pivot=arr[right]
	if (right-left<1) {
		return
	}
	

	//只要进了至少一次while,最后停在的i的位置，是右侧的第一个;把基准元素移到两段之间
	//但是有可能一次没进，如left=3，right=4，这时arr[i]<pivot,只有两个元素，不用再交换了
	if (arr[i]>pivot) {
		// [arr[i],arr[right]]=[arr[right],arr[i]]
		swap(arr,i,right)
	}
	//i已经在对的位置了
	q_sort(arr,left,i-1)
	q_sort(arr,i+1,right)
}
// arr=read_line().split(' ')
// arr=arr.map(function(a){
// 	return parseInt(a)
// })
// q_sort(arr,0,arr.length-1)
// print(arr)


function bubbleSort(arr){
	let len=arr.length
	//只需要n-1趟
	for(let i=0;i<len;i++){
		for(let j=len-1;j>i;j--){
			if (arr[j]<arr[j-1]) {
				[arr[j],arr[j-1]]=[arr[j-1],arr[j]]
			}
		}
	}
	return arr
}
// bubbleSort(arr)
// print(arr)

function selectSort(arr){
	let len=arr.length,k
	for(let i=1;i<len;i++){
		k=i-1
		for(let j=i;j<len;j++){
			if(arr[j]<arr[k]){
				k=j
			}
		}
		[arr[i-1],arr[k]]=[arr[k],arr[i-1]]
	}
	return arr
}
// selectSort(arr)
// print(arr)


function insert_sort(arr){
	let len=arr.length,temp
	for(let i=1;i<len;i++){
		temp=arr[i]
		for(let j=i;j>=0;j--){
			if(arr[j-1]>temp&&j>0){
				arr[j]=arr[j-1]
			}else{
				arr[j]=temp
				break
			}
		}
	}
}
// insert_sort(arr)
// print(arr)

var str=read_line()
var sub=read_line()
var len=sub.length
debugger
function serach(){
	for(var i=0;i<len;i++){
		var ch=sub.charAt(i)
		if(str.length<=0 || str.indexOf(ch)==-1) {
			return 0
		}
		str=str.replace(ch,'')
	}
	return 1
}
print(serach())