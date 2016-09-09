export function insertSort(arr){
	let len = arr.length
	let temp //保存无序部分的第一个值，有序部分往后移动过程中会覆盖
	let j
	for(let i=1;i<len;i++){
		//逆序才往前移动
		if (arr[i]<arr[i-1]) {
			temp=arr[i]
			j=i-1
			do{
				arr[j+1]=arr[j]
				j--
			}while(j>=0&&temp<arr[j])
			arr[j+1]=temp
		}
	}
	return arr
}

export function binaryInsertSort(arr){
	let len = arr.length
	let temp,i,j,low,high,middle,k
	for(i=1;i<len;i++){
		if(arr[i]<arr[i-1]){
			temp=arr[i]
			low=0,high=i-1
			while(low<=high){
				middle=Math.floor((low+high)/2)
				if (arr[middle]<temp) {
					low=middle+1
				}else{
					high=middle-1
				}
			}
			for(k=i-1;k>=low;k--){
				arr[k+1]=arr[k]
			}
			arr[low]=temp
		}
	}
	return arr
}

//希尔排序
export function shellSort(arr){
	let len=arr.length
	let i,j,gap=len,temp
	do{
		// debugger
		gap=Math.floor(gap/3)+1
		for(i=0+gap;i<len;i++){
			if (arr[i]<arr[i-gap]) {
				temp=arr[i]
				j=i-gap
				do{
					arr[j+gap]=arr[j]
					j-=gap
				}while(j>=0&&temp<arr[j])
				arr[j+gap]=temp
			}
		}
	}while(gap>1)
	return arr
}