/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, 
 * i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 */

// my solution

var threeSum = function(nums) {
    let newNums = nums.slice().sort((a,b)=> a-b)
     console.log(newNums)
    let finalArr = []
    for(let i = 0 ; i < newNums.length - 2; i++){
          let left = i + 1
          let right = newNums.length - 1
          let current = newNums[i]
          console.log(current,left,right)
          while(left <right){
                 let sum = current + newNums[left] + newNums[right]
                  if(newNums[left] === newNums[left - 1]){
                       left += 1
                  }
                  if(sum === 0){
                       finalArr.push([current,newNums[left],newNums[right]])
                       left += 1
                       right -= 1
                  }else if(sum < 0){
                        left += 1
                  }else{
                      right -=1 
                  }
                    
             }
    } 
    return finalArr
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))