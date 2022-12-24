/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

var topKFrequent = function(nums, k) {
    let bucket = {}
    let hash = {}
    let finalArr = []
  for(let i = nums.length ; i > 0 ; i--){
       bucket[i] = []
  }
  
  for(let el of nums){
           if(hash[el]){
                 hash[el] += 1
           }else{
                 hash[el] = 1
           }
    }

  for(let key in hash){
        let count = hash[key]
        bucket[count].push(key)
  }

  for(let key in bucket){
         if(bucket[key].length !== 0 ){
                k -= 1
                finalArr.push(...bucket[key])
                if(k === 0) break
         }
  }

 return finalArr

};