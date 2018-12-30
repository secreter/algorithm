/**
 * 打印出n个色子能组成的各个和s 的概率
 * 分析：用两个数组来记录次数，一个记录n-1个色子时的概率，另一个为n
 * @param n
 */
function printProbability (n) {
  if(n<1) return
  const MAX=6    //色子最大点数
  let list=new Array(2)
  list[0]=new Array(n*MAX+1).fill(0);
  list[1]=new Array(n*MAX+1).fill(0)
  //初始化第一个数组
  for (let i=1;i<=MAX;i++){
    list[0][i]=1          //每个点数出现次数都为1
  }
  let flag=0            //标记当前轮循环要使用的数组
  for(let k=2;k<=n;k++){    //每次增加一粒色子
    for(let i=0;i<=MAX*n;i++){
      list[1-flag][0]=0            //重置上一个数组
    }
    for (let i=k;i<=k*MAX;i++){      //增加一粒色子后，数组填充的最小值到最大值
      for (let j=1;j<i&&j<=MAX;j++){      //每个新值都等于 f(n-1)+f(n-2)...+f(n-MAX)
        list[1-flag][i]+=list[flag][i-j]
      }
    }
    flag=1-flag         //交替进行
    console.log(list)
  }
  console.log(list[flag])
  const total=Math.pow(MAX,n)
  let probabilities=list[flag].map(x=>(x/total).toFixed(3))
  console.log(probabilities)
}

printProbability(2)