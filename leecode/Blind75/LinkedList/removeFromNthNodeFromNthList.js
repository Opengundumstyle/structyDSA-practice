/**
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

 */

var removeNthFromEnd = function(head, n) {
    let dummie = new ListNode(null)
    let right = head
    let left = dummie 
    left.next = right
    let count = 0
    while(count < n){
          right = right.next
          count += 1
    }
    while(right !== null){
          
           right = right.next
           left = left.next
    }
    
     right = left.next.next
     left.next = right
     return dummie.next
}
