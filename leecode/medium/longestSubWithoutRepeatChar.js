/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function (s) {
    let left = 0
    let longestSub = 0
    let subSet = new Set()
    for(let el of s){
        
                while(subSet.has(el)){
                       subSet.delete(s[left])
                       left += 1
                }
          
               subSet.add(el)
          
          if(subSet.size > longestSub) longestSub = subSet.size
    }

   return longestSub
};