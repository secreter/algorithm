// let arr=[1,2,3]
// let inputArr=[
// "4",
// "EIGHT",
// "ZEROTWOONE",
// "OHWETENRTEO",
// "OHEWTIEGTHENRTEO",
// ]
let inputArr=[
"500 3 200 19 1 66 34 563 232 65 443 78 2 3443 76 434",
// "3 5 6 2 4"
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

//[left,right]
function q_sort(arr,left,right){
	let i=left,j=right-1,len=right-left,pivot=arr[right]
	if (right-left<1) {
		return
	}
	for(;;){
		while(i<j&&arr[i]<pivot){
			i++
		}
		while(i<j&&arr[j]>pivot){
			j--
		}
		if(i<j){
			[arr[i],arr[j]]=[arr[j],arr[i]]
			i++;j--
		}else{
			break
		}
	}
	// debugger
	//只要进了至少一次while,最后停在的i的位置，是右侧的第一个;把基准元素移到两段之间
	//但是有可能一次没进，如left=3，right=4，这时arr[i]<pivot,只有两个元素，不用再交换了
	if (arr[i]>pivot) {
		[arr[i],arr[right]]=[arr[right],arr[i]]
	}
	//i已经在对的位置了
	
	q_sort(arr,left,i-1)
	q_sort(arr,i+1,right)

}
arr=read_line().split(' ')
arr=arr.map(function(a){
	return parseInt(a)
})
q_sort(arr,0,arr.length-1)
print(arr)

