export function selectSort(arr){
	let len=arr.length
	let i,j,k
	for(i=0;i<len-1;i++){
		k=i  //指向剩余部分最小的
		for(j=i+1;j<len;j++){
			if(arr[j]<arr[k]){
				k=j
			}
		}
		if(k!==i)[arr[k],arr[i]]=[arr[i],arr[k]]
	}
	return arr
}