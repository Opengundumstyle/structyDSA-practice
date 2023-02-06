# Given the head of a singly linked list, return true if it is a 
# palindrome
#  or false otherwise.

 

# Example 1:


# Input: head = [1,2,2,1]
# Output: true
# Example 2:


# Input: head = [1,2]
# Output: false
 
 # Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# O(N) space solution
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
             arr = []
             current = head
             while current:
                   arr.append(current.val)
                   current = current.next
            
             l,r = 0, len(arr)-1
            
             while l <= r:
                  if arr[l] != arr[r]:
                        return False
                  l += 1
                  r -= 1

             return True