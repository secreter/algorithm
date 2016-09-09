//冒泡排序
export default function bubleSort(arr) {
	let len = arr.length
	for(let i=1;i<len;i++){
		for(let j=len-1;j>=i;j--){
			if (arr[j]<arr[j-1]) {
				[arr[j],arr[j-1]]=[arr[j-1],arr[j]]
			}
		}
	}
	return arr
} 