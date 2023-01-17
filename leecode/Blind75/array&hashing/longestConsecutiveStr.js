/**
 * 
 Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 
 */

// var longestConsecutive = function(nums) {
//     let newSet = new Set(nums)
//     let maxlength = 0;
//     for(let num of nums){
//         if(!(newSet.has(num - 1))){
//              let currentCount = 1
//               while(newSet.has(num)){
//                       if(currentCount > maxlength){
//                            maxlength = currentCount
//                       }
//                      currentCount += 1
//                      num += 1
//               }
//         } 
//     }
   
//    return maxlength 

// };

// neetcode solution

var longestConsecutive = (nums, maxScore = 0) => {
    const numSet = new Set(nums);         /* Time O(N) | Space O(N) */

    for (const num of [ ...numSet ]) {    /* Time O(N) */
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue;/* Time O(N) */

        let [ currNum, score ] = [ num, 1 ];

        const isStreak = () => numSet.has(currNum + 1)
        while (isStreak()) {              /* Time O(N) */
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}