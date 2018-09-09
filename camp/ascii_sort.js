/**
 *某AI创业公司前端团队面试题，写一个函数sort，对一个只有字符的数组进行排序，比如说['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']

 要求：

 大写在前，小写在后
 大小写字母之间的顺序不能改变，比如AaBbCcDd排序后应该是ABCDabcd。
 不能使用额外空间。
 * @param list
 * @returns {*}
 */
//稳定排序：冒泡排序、插入排序、归并排序、基数排序
//这里调用了js的排序，应该是快排，不稳定，有空间消耗
function sort(list){
  return list.sort((a,b)=>a.charCodeAt()-b.charCodeAt())
}
console.log(sort(['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']))


/**
 * 答案：

 本题考查对排序算法的理解和运用。由于不能更改元素本来的的位置，只有冒泡排序一种选择。

 虽然基于比较的排序，复杂度可以到O(nlgn)，但是在限制空间，限制稳定性的情况下，还是O(n^2)

 function swap(A, i, j){
  [A[i],A[j]] = [A[j], A[i]]
}
 function bubble_sort(A, compareFunc) {
  for(let i = A.length - 1; i >= 1; i--) {
    for(let j = 0; j < i; j++) {
      if(compareFunc(A[j], A[j+1]) > 0){
        swap(A, j, j + 1)
      }
    }
  }
}
 function sort(A) {
  bubble_sort(A, (a, b) => {
    return (a === a.toUpperCase() ? 0 : 1)
      - (b === b.toUpperCase() ? 0 : 1)
  })
}
 */
