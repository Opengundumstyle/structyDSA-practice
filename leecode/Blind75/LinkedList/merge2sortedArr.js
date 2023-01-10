/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */

var mergeTwoLists = function(list1, list2) {
    let current1 = list1
    let current2 = list2
    let head = new ListNode(null)
    let current = head
    while(current1 !== null && current2 !== null){
         if(current1.val <= current2.val ){
               current.next = current1
               current = current.next
               current1 = current1.next
         }else{
               current.next = current2
               current = current.next
               current2 = current2.next
         }
    }
    if(current1 === null) current.next = current2
    if(current2 === null) current.next = current1

    return head.next
};