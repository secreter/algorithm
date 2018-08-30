/**
 * Created by pengchaoyang on 2018/8/30
 */
// 写一个函数floor_power_of2，求比x小的最大二的整数次幂。
//
// 例如
//
// floor_power_of2(64) // 64
// floor_power_of2(63) // 32
// floor_power_of2(33) // 32
// floor_power_of2(32) // 32


/*
*
*12.8.3.1 Runtime Semantics: Evaluation
ShiftExpression : ShiftExpression << AdditiveExpression
1. Let lref be the result of evaluating ShiftExpression.
2. Let lval be GetValue(lref).
3. ReturnIfAbrupt(lval).
4. Let rref be the result of evaluating AdditiveExpression.
5. Let rval be GetValue(rref).
6. ReturnIfAbrupt(rval).
7. Let lnum be ToInt32(lval).
8. ReturnIfAbrupt(lnum).
9. Let rnum be ToUint32(rval).
10. ReturnIfAbrupt(rnum).
11. Let shiftCount be the result of masking out all but the least significant 5 bits of rnum, that is, compute
rnum & 0x1F.
12. Return the result of left shifting lnum by shiftCount bits. The result is a signed 32-bit integer.
*
<<左移31位会变成负数，大于32位会溢出，js 位移操作等，~~等操作是32位有符号整数
* */
function floor_power_of2(x){
    let max=1
    while(max<=x) max=max*2
    return Math.floor(max/2) //x=0
}
console.log(floor_power_of2(0))