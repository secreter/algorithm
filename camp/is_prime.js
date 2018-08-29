/**
 * Created by pengchaoyang on 2018/8/29
 * 判断一个数是不是素数
 */
function is_prime(x){
	let sqrt=~~Math.sqrt(x)
	while(sqrt>1){
		if(Number.isInteger(x/sqrt)) return false
		sqrt--
	}
	return x!==1
}
function is_prime(x){
	if(x===2)return true
	let sqrt=~~Math.sqrt(x),i=3
	while(i>sqrt){
		if(Number.isInteger(x/i)) return false
		i+=2                   //大于2的素数只能是奇数
	}
	return x!==1
}
console.time('---')
console.log(is_prime(22801763489))
console.timeEnd('---')
