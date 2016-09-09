function snakeNum(n){
	//声明一个n*n的数组
	let arr=new Array(n)
	for(let i=0;i<n;i++){
		arr[i]=new Array(n)
	}

	let count=n*n
	let num=1,i=0,j=0,width=n-1,times=0 //for循环执行的次数
	for(;;){
		// debugger
		
		i=0+times,j=n-1-times
		//奇数的最后一趟
		if(width===0){
			arr[i][j]=num++   //当n为奇数的时候，最里面只有一个数字
			console.log(i,j,arr[i][j])
		} 
		//四个方向，width是每条边需要输出的个数，是每个环形边长减一
		for(let k=0;k<width;k++) arr[i++][j]=num++
		for(let k=0;k<width;k++) arr[i][j--]=num++
		for(let k=0;k<width;k++) arr[i--][j]=num++
		for(let k=0;k<width;k++) arr[i][j++]=num++
		
		times++
		//每次循环了一个环，所以边长要减2
		width=width-2
		console.log(width)
		if(num>count)break
	}
	for(let i=0;i<n;i++){
		console.log(arr[i].join(' '))
	}
}
snakeNum(7)