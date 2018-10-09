/**
 * Created by pengchaoyang on 2018/10/9
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

const list = new DoubleLinkedList()
list.print()
// 输出: NULL
for(let i = 0; i < 5; i++) {
    list.insert( String.fromCharCode('A'.charCodeAt(0) + i) )
}

list.print()
// // 输出: E<->D<->C<->B<->A<->NULL

list.insert('X')
list.print()
// // 输出: X<->E<->D<->C<->B<->A<->NULL

const list2 = new DoubleLinkedList()
list2.insert('Q')
list2.insert('P')
list2.insert('O')
list2.print()
// 输出 O<->P<->Q<->NULL


list2.merge(list)
list2.print()

// // 输出 O<->P<->Q<->X<->E<->D<->C<->B<->A<->NULL