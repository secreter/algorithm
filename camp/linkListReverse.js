/**
 * Created by pengchaoyang on 2018/9/18
 */
/*
写一个递归函数reverse，反转一个链表。链表是由next和value构成的一个结构体链，next指向下一个节点，value是节点中存储的值。

链表节点结构示例：

class Node {
  constructor(v){
    this.next = null
    this.value = v
  }
}
例如:

// 构造一个链表
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next=b
b.next=c
c.next=d

// 执行reverse函数
reverse(a)

console.log( d.next.value ) // c
console.log( c.next.value ) // b
console.log( b.next.value ) // a


 */