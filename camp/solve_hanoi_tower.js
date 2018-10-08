//设计一个程序solve_hanoi_tower(disks, from, to, use)，打印汉诺塔的移动步骤， 比如移动3个：
//
// solve_hanoi_tower(['i', 'j', 'k'],'A', 'B', 'C')
// // i,j,k代表碟子，k最小，i最大
// // A,B,C是三个位置

/*
移动次数可以推导，
* f(n)=2f(n-1)+1  && f(1)=1  ===>  f(n)=2^n-1
*
*
* */