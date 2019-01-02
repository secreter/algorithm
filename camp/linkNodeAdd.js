/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry =0,sum=0,head=null,cursor=head
  while(l1!==null||l2!==null){
    if(l1!==null&&l2!==null){
      sum=l1.val+l2.val+carry
      l1=l1.next
      l2=l2.next
    }else if(l1===null){
      sum=l2.val+carry
      l2=l2.next
    }else{
      sum=l1.val+carry
      l1=l1.next
    }
    if(sum>9){
      sum%=10
      carry=1
    }else{
      carry=0
    }
    if(cursor===null){
      cursor=head=new ListNode(sum)
    }else{
      cursor.next=new ListNode(sum)
      cursor=cursor.next
    }
  }
  if(carry===1){
    cursor.next=new ListNode(carry)
  }
  return head
};

let l1=new ListNode(2)
let m=new ListNode(4)
let n=new ListNode(3)
l1.next=m,m.next=n
let l2=new ListNode(5)
let a=new ListNode(6)
let b=new ListNode(4)
l2.next=a,a.next=b

addTwoNumbers(l1,l2)