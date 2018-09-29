/**
 * Created by pengchaoyang on 2018/9/29
 */

//辗转相除法求最大公约数
function gcd(x,y){
    //x==0||y==0
    while(x*y){
        if(x>y){
            x=x%y
        }else{
            y=y%x
        }
    }
    //返回不为零
    return x||y
}

// const gcd=(x,y)=>{
// 	while(x*y)x>y?x%=y:y%=x
// 	return x||y
// }
console.log(gcd(55,33))
