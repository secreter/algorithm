/**
 * Created by pengchaoyang on 2018/10/12
 */
class LinkedList {
    constructor(){
        // 指向链表开头
        this.head = null
        this.tail=null
    }

    print(){
        let node=this.head,str=''
        while(node){
            if(node.next){
                str+=node.key+'-->'
            }else{
                str+=node.key
            }
            node=node.next
        }
        console.log(str)
    }

    //尾部插入
    insert(key){
        let node=null
        if(key instanceof ListNode){
            node=key
        }else{
            node=new ListNode(key)
        }
        if(this.tail!==null) this.tail.next=node
        this.tail=node
        if(this.head===null) this.head=node
    }

    merge(list) {
        this.tail.next=list.head
        this.tail=list.tail
    }
}

class ListNode {
    constructor(key){
        this.next = null
        this.key = key
    }
}

let list=new LinkedList()
let nodes=Array(20).fill(0).map((item,i)=>{
    let node=new ListNode(i)
    list.insert(node)
    return node
})
list.print()
list.insert(nodes[5])       // add cycle
// list.print()

function hasCycle (list) {
    let fast=list.head,slow=list.head,i=0
    do{
        if(fast===null||fast.next===null||fast.next.next===null){
            return -1                  //fast first arrive tail,no cycle
        }
        fast=fast.next.next               //step 2
        slow=slow.next
        i++
    }while (fast!==slow)
    return i                        //meet at
}
console.log(hasCycle(list))

/**
 * find cycle entry
 * @param list
 * @param encounter      meet at
 */
function findEntry (list,encounter) {
    let head=list.head,meetNode=nodes[encounter]
    while (head!==meetNode){
        head=head.next
        meetNode=meetNode.next
    }
    return head
}
console.log(findEntry(list,hasCycle(list)))