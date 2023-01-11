/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 */



var reorderList = function(head) {
    let mid = head
    let right = head
   
    while(right !== null){
         if(right.next === null) break
          mid = mid.next
          right = right.next.next
    }
    console.log(mid)
    let reverse = reverseLink(mid)
     console.log(reverse)
     reorder(head,reverse)
   
};

const reverseLink =(head)=>{
     let prev = null
     let current = head
     while(current !== null){
           let next = current.next
            current.next = prev
            prev = current
            current = next
     }
     return prev
}

const reorder = (l,r)=>{
     let current1 = l
     let current2 = r
     while(current2.next !== null){
           let next1 = current1.next
           current1.next = current2
           current1 = next1
           
           let next2 = current2.next
           current2.next = current1
           current2 = next2
     }
}