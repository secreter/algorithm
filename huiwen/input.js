// let arr=[1,2,3]
let inputArr=[
"fypypy"
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
//给定一个字符串，问是否能够通过添加一个字母将其变成“回文串”。 “回文串”是指正着和反着读都一样的字符串。如：”aa”,”bob”,”testset”是回文串，”alice”,”time”都不是回文串。
////////////////////////////////////////////////////////////////////


function isHuiWen(str){
	// debugger
	var arr=str.split('')
	var len=arr.length
	if (len==0||len==1) {
		return true
	}
	//奇数最中间的那个肯定对称，不用考虑，所以和偶数一样的判断
	if (len%2==1) {
		len=len-1
	}
	for(var i=0;i<len/2;i++){
		if (arr.pop()!==arr.shift()) {
			return false
		}
	}
	return true
}
//回文数至多有一个字符出现的是奇数次数，添加一个可能成为回文数就是至多有两个出现奇数次数
function maybeHuiWen(str){
	var arr=str.split('')
	var len=arr.length
	var typeObj={}
	var keys,times=0
	for(var i=0;i<len;i++){
		keys=Object.keys(typeObj)
		if (keys.indexOf(arr[i])==-1) {
			typeObj[arr[i]]=1
		}else{
			typeObj[arr[i]]++
		}
	}
	keys=Object.keys(typeObj)
	keys.forEach(function(key){
		if (typeObj[key]%2==1) {
			times++
		}
	})
	if (times>2) {
		return false
	}
	return true
}
//还是有可能是回文数，暂时没有好办法，暴力尝试，每个地方都尝试插入一下出现过的字符
function tryHuiwen(str){
	if (isHuiWen(str)) {
		print('YES')
		return
	}
	if (!maybeHuiWen(str)) {
		print('NO')
		return
	}
	//先获取出现过的字符种类
	var charArr=[]
	var arr=str.split('')
	var len=arr.length
	// debugger
	for(var i=0;i<len;i++){
		if (charArr.indexOf(arr[i])==-1) {
			charArr.push(arr[i])
		}
	}
	var copyArr
	for(var i=0;i<=len;i++){
		for(var j=0;j<charArr.length;j++){
			copyArr=[].concat(arr)
			copyArr.splice(i,0,charArr[j])
			var copyStr=copyArr.join('')
			if (isHuiWen(copyStr)) {
				print('YES')
				return
			}
			// if (!maybeHuiWen(copyStr)) {
			// 	print('NO')
			// 	return
			// }
		}
	}
	print('NO')
	return
}
tryHuiwen(read_line().trim())
// isHuiWen('ococo')


//据说将字符串反转，求最大公共子串，如果长度差距不大于1就可以，查查看