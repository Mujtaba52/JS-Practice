
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const list1 = new ListNode(1)
const list2 = new ListNode(1)

list1.next = new ListNode(2)
list1.next.next= new ListNode(4)

list2.next = new ListNode(3)
list2.next.next= new ListNode(4)

console.log(list1)
console.log(list2)

var mergeTwoLists = function(list1, list2) {
    if(list1.val > list2.val){
        
    }
};