// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
    left = 0
    right = 0
    let set = new Set([])
    let longestSub = 0
    while(right < s.length ){
            while(set.has(s[right])){
                 set.delete(s[left])
                 left += 1
            }
            set.add(s[right])
            if(longestSub < set.size) longestSub = set.size
            right += 1
  }
  
  return  longestSub
};;