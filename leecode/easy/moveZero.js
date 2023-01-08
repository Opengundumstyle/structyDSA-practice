/**
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

 */

var moveZeroes = function(nums) {
    let i = 0
    let j = 1
    while(j < nums.length){
        if(nums[i] === 0 ){
             if(nums[j] !== 0){
               nums[i]  = nums[j]
               nums[j] = 0
               i += 1
             }
        }
        
        if(nums[i] !== 0) i += 1

        j ++
    }
};