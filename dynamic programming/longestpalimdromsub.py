# 5. Longest Palindromic Substring
# Medium
# 26.2K
# 1.5K
# company
# Amazon
# company
# Microsoft
# company
# TikTok
# Given a string s, return the longest 
# palindromic
 
# substring
#  in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
 

# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters.



def max_palin_subsequence(string):
    return _max_palin_subsequence(string,0,len(string)-1,{})
    

def _max_palin_subsequence(string,i,j,memo):
  
    key = (i,j)
    if key in memo:
        return memo[key]
   
    if i == j:
       return 1
    
    if i > j:
       return 0
    
    if string[i] == string[j]:
      memo[key] =  2 + _max_palin_subsequence(string,i+1,j-1,memo)
    else:
      memo[key]= max(
         _max_palin_subsequence(string,i + 1,j,memo),
         _max_palin_subsequence(string,i,j - 1,memo)
        )
    return memo[key] 
      