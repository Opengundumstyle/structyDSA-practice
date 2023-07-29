# 647. Palindromic Substrings
# Medium
# 9.4K
# 196
# company
# Google
# company
# Cisco
# company
# Goldman Sachs
# Given a string s, return the number of palindromic substrings in it.

# A string is a palindrome when it reads the same backward as forward.

# A substring is a contiguous sequence of characters within the string.

 

# Example 1:

# Input: s = "abc"
# Output: 3
# Explanation: Three palindromic strings: "a", "b", "c".
# Example 2:

# Input: s = "aaa"
# Output: 6
# Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".



class Solution:
    def countSubstrings(self, s: str) -> int:
           count = 0
           for i in range(0,len(s)):
                left,right = i,i
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    count += 1
                    left -= 1
                    right += 1
                left,right = i,i+1
                while left >= 0 and right < len(s) and s[left] == s[right]:
                     count += 1
                     left -= 1
                     right += 1
           return count 
           