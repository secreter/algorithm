/**
360 2017校招笔试题，内存分配
输入
6 10
new 5
new 3
del 1
new 6
def
new 6
输出
1
2
NULL
3

我的输出
1
2
NULL
2
理解有误
*/
var n,max=10
var order,num
var mem,record=[]  //[l,r]记录起止点
function main(){
	// var line
	// line = read_line()
	// line = line.split(' ')
	// n=parseInt(line[0])
	// max=parseInt(line[1])
	// init(max)
	// for(var i=0;i<n;i++){
	// 	line=read_line()
	// 	line = line.split(' ')
	// 	order=line[0]
	// 	num=line[1] ? parseInt(line[1]) : undefined
	// 	analyze(order,num)
	// }
	analyze('new',5)
	analyze('new',3)
	analyze('del',1)
	analyze('new',6)
	analyze('def')
	console.log(record)
	analyze('new',6)

}

function init(max){
	mem = new Array(max)
	for(var i=0;i<max;i++)
		mem[i]=0
}
function analyze(order,num){
	switch(order){
		case 'new':
			newMem(num)
			break
		case 'del':
			delMem(num)
			break
		case 'def':
			defMem()
			break
	}
}
function newMem(num){
	var len=record.length
	if (len==0) {
		if(num>max) {
			print('NULL')
			return
		}
		record.push([0,num-1])
		print(1)
		return
	}
	//空记录不执行循环
	//最后一条记录和数组长度相减
	for(var i=0;i<len-1;i++){
		if(record[i+1][1]-record[i][1]>num){
			record.splice(i+1,0,[record[i][1]+1,record[i][1]+num])
			print(i+2)
			return 
		}
	}
	// console.log('i',i)
	if(max-1 -record[i][1]>num){
		record.splice(i+1,0,[record[i][1]+1,record[i][1]+num])
		print(i+2)
		return 
	}
	print("NULL")
	return 
}
function delMem(num){
	var len=record.length
	if(num<1||num>len){
		print('ILLEGAL_OPERATION')
		return 
	} 
	record.splice(num-1,1)
	return
	print('ILLEGAL_OPERATION')
	return 
}
function defMem(){
	var len=record.length
	var gap
	if(len>0&&record[0][0]!==0){
		gap= record[0][0]-0
		record[0][0]=0
		record[0][1]-=gap
	}
	for(var i=0;i<len-1;i++){
		if(record[i+1][0]-record[i][1]>1){
			gap=record[i+1][0]-record[i][1]-1
			record[i+1][0]-=gap
			record[i+1][1]-=gap
		}
	}
}

main()




function print(x){
	console.log(x)
}