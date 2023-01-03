/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase 
English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/ 


/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var characterReplacement = function (s, k) {
//     let [left, right, longest, max] = new Array(4).fill(0);
//     const frequencyMap = new Array(26).fill(0);

//     while (right < s.length) {
//         const count = addRightFrequency(s, right, frequencyMap);

//         longest = Math.max(longest, count);

//         let window = right - left + 1;
//         const canSlide = k < window - longest;
//         if (canSlide) {
//             subtractLeftFrequency(s, left, frequencyMap);
//             left++;
//         }

//         window = right - left + 1;
//         max = Math.max(max, window);

//         right++;
//     }

//     return max;
// };

// const addRightFrequency = (s, right, map) => {
//     const char = s[right];
//     const index = getCode(char);

//     map[index]++;

//     return map[index];
// };

// const subtractLeftFrequency = (s, left, map) => {
//     const char = s[left];
//     const index = getCode(char);

//     map[index]--;

//     return map[index];
// };

// const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);


// my soluiton

var characterReplacement = function(s, k) {
    let hash = {};
    let maxlength = 0
    left = 0 
    for(let el of s){
        let sum = 0
        if(hash[el]){
             hash[el] += 1
        }else{
              hash[el] = 1
        }
        console.log(hash)
        let valArr = Object.values(hash)
        let currentMax = Math.max(...valArr)
         console.log(valArr)
         console.log(currentMax)
        valArr.forEach(item => sum += item)
        let difference = sum  - currentMax
        if(difference <= k ) {
                console.log('does it hit')
                 if (sum > maxlength) maxlength = sum
        }else{
             while(difference > k){
                 let key =  s[left] 
                 sum = 0
                 hash[key] -= 1
                 left += 1
                 valArr = Object.values(hash)
                 console.log(hash)
                 console.log(valArr)
                 currentMax = Math.max(...valArr)
                 valArr.forEach(item => sum += item)
                 difference = sum  - currentMax
                 if (sum > maxlength) maxlength = sum
            }
         }
    }
    return maxlength
};

let s = "ABAA"

console.log(characterReplacement(s,0))
