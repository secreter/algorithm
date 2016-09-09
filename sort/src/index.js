import bubbleSort from './util/bubbleSort.js'
import {insertSort,binaryInsertSort,shellSort} from './util/insertSort.js'
import {quickSort,hybridQuickSort,hybridQuickSort2} from './util/quickSort.js'
import {selectSort} from './util/selectSort.js'

let arr=[],arrCopy
for (var i = 30; i >= 0; i--) {
	arr.push(Math.floor(Math.random()*1000))
}
arrCopy=arr.concat()
console.log(arr)
console.time('sort')
arr=selectSort(arr)
console.timeEnd('sort')
console.log(arr)

console.time('sort1')
arrCopy=quickSort(arrCopy,0,arr.length-1)
console.timeEnd('sort1')
console.log(arrCopy)