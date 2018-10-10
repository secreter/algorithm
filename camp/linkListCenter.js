/**
 * Created by pengchaoyang on 2018/10/10
 * 写一个函数center(list)找到一个链表的中间节点。 如果链表有基数个节点，那么返回中心节点。 如果链表有偶数个节点，返回中间偏左的节点
 */
class DoubleLinkedList {
    constructor(){
        // 指向链表开头
        this.head = null
        // 指向链表末尾
        this.tail = null
    }

    /**
     * 打印链表
     */
    print(){
        let node=this.head,str=''
        while(node){
            if(node.next){
                str+=node.key+'<-->'
            }else{
                str+=node.key
            }
            node=node.next
        }
        console.log(str)
    }

    /**
     * 插入一个键为{key}的元素到链表头部
     */
    insert(key){
        let node=new ListNode(key)
        if(this.head!==null)this.head.prev=node
        node.prev=null
        node.next=this.head
        this.head=node
        if(this.tail===null) this.tail=node
    }

    /**
     * 将list合并到链表末尾
     */
    merge(list) {
        list.head.prev=this.tail
        this.tail.next=list.head
        this.tail=list.tail
    }
}

class ListNode {
    constructor(key){
        this.prev = null
        this.next = null
        this.key = key
    }
}

function center(list){
    let leftNode=list.head,rightNode=list.tail
    while(leftNode&&rightNode&&leftNode!==rightNode&&leftNode.next!==rightNode){
        leftNode=leftNode.next
        rightNode=rightNode.prev
    }
    return leftNode
}
const list = new DoubleLinkedList()
center(list) // null
console.log(center(list))
list.insert(4)
list.insert(3)
list.insert(2)
list.insert(1)
// list = 1-2-3-4
const node = center(list) // node.key = 2
console.log(node.key)
list.insert(5)
// list = 5-1-2-3-4
const node2 = center(list) // node.key = 2
console.log(node2.key)