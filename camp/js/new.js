/**
 * Created by pengchaoyang on 2018/12/27
 */
function _new(F){
	return function(...arg){
		let instance=Object.create(F.prototype)
		// let instance={}
		// instance.__proto__=F.prototype
		let ret=F.call(instance,...arg)
		return typeof ret==='object'?ret||instance: instance
	}
}

// class P{
// 	constructor(name){
// 		this.name=name
// 	}
// }
function P(name){
	this.name=name
	return null
}
P.prototype.age=11
let p=_new(P)('bob')
console.log(p.name)
console.log(p.age)
P.prototype.age=13
console.log(p.age)
console.log(p instanceof P)
console.log(p.__proto__.constructor)