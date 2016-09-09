import {insertSort} from './insertSort.js'
export function quickSort(arr,left,right){
	if(left<right){
		let pivotpos=partition(arr,left,right)
		quickSort(arr,left,pivotpos-1)
		quickSort(arr,pivotpos+1,right)
	}
	return arr
}
//找到基准元素
function partition(arr,left,right){
	let i,j,pivot=arr[left],pivotpos=left
	for(i=left+1;i<=right;i++){
		if (arr[i]<pivot) {
			pivotpos++
			if(pivotpos!==i){
				[arr[pivotpos],arr[i]]=[arr[i],arr[pivotpos]]
			}
		}
	}
	arr[left]=arr[pivotpos]
	arr[pivotpos]=pivot   //基准元素就位
	return pivotpos
}


//优化，当长度很小的序列使用快排效率会降低，所以长度小于m后使用直接插入排序
export function hybridQuickSort(arr,left,right){
	let arrNew
	arrNew=innerQuickSort(arr,left,right)
	arrNew=insertSort(arrNew)
	return arrNew
}
function innerQuickSort(arr,left,right){
	const M=10
	if(right-left<M){
		return arr
	}
	let pivotpos=partition(arr,left,right)
	innerQuickSort(arr,left,pivotpos)
	innerQuickSort(arr,pivotpos+1,right)
	return arr
}





//再优化，采用三者取中算法找到基准元素；在用一次划分算法定位基准元素
export function hybridQuickSort2(arr,left,right){
	const M=10
	let arrNew
	arrNew=innerQuickSort2(arr,left,right)
	arrNew=insertSort(arrNew)
	return arrNew
}
//返回中间值
function median3(arr,left,right){
	let mid=Math.floor((left+right)/2)
	let k=left //指示value最小的值
	if(arr[mid]<arr[k]) k=mid
	if (arr[right]<arr[k]) k=right
		//if是为了减少不必要的交换操作
	if (k!==left) [arr[k],arr[left]]=[arr[left],arr[k]] //最小值交换到最前，因为后面排序前面是小于pivot的
	if (mid!==right&&arr[mid]<arr[right]) [arr[mid],arr[right]]=[arr[right],arr[mid]]
	return arr[right]   //否则right本来就是中间值
}
//一趟划分算法
function oncePartition(arr,left,right){
	// debugger
	let i=left,j=right-1
	if (left<right) {
		let pivot=median3(arr,left,right)
		while(i<j){
			//正向，小于pivot的留在左侧，一旦大于就止步
			while(i<j&&arr[i]<pivot)i++
			//反向，大于pivot的留在右侧，一旦小于就止步
			while(i<j&&arr[j]>pivot)j--
			//注意交换完了指针都要向前移动
			if(i<j) {
				[arr[i],arr[j]]=[arr[j],arr[i]]
				j--
				i++
			}  
		}
		//比较绕，这里i处一定是大于pivot的
		if (arr[i]>pivot) {
			arr[right]=arr[i]
			arr[i]=pivot
		}
	}
	return i
}
function innerQuickSort2(arr,left,right){
	const M=10
	if(right-left<M){
		return arr
	}
	let pivotpos=oncePartition(arr,left,right)
	innerQuickSort2(arr,left,pivotpos-1)
	innerQuickSort2(arr,pivotpos+1,right)
	return arr
}