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

// var topKFrequent = function(nums, k) {
//     let bucket = {}
//     let hash = {}
//     let finalArr = []
//     let count = k
//   for(let i = nums.length; i > 0 ; i--){
//        bucket[i] = []
//   }
//   console.log(bucket)
  
//   for(let el of nums){
//            if(hash[el]){
//                  hash[el] += 1
//            }else{
//                  hash[el] = 1
//            }
//     }

//   for(let key in hash){
//         let count = hash[key]
//         bucket[count].push(key)
//   }
//   let newbucket = Object.values(bucket).reverse();
//   console.log(newbucket)

//   for(let el of newbucket){
//          if(el.length !== 0 ){
//                 count -= 1
//                 finalArr.push(...el)
//                 if(count === 0) break
//           }
//   }
 
//  return finalArr.slice(0,k)

// };

// let nums = [1,1,1,2,2,3], k = 2
// console.log(topKFrequent(nums,k))
// Output: [1,2]


// optimze bucket sort

var topKFrequent = (nums, k) => {
    const map = getFrequencyMap(nums);  /* Time O(N)   | Space O(N) */
    const bucket = getBucket(nums, map);/* Time O(N)   | Space O(N^2) */

    return getTopK(bucket, k);          /* Time O(N^2) | Space O(K) */
};

var getFrequencyMap = (nums, map = new Map()) => {
    for (const num of nums) {/* Time O(N) */
        const count = (map.get(num) || 0) + 1;

        map.set(num, count);     /* Space O(N) */
    }

    return map;
};

const getBucket = (nums, map) => {
    const bucket = new Array(nums.length + 1).fill()
        .map(() => []);

    for (const [ num, count ] of map.entries()) {/* Time O(N) */
        bucket[count].push(num);                     /* Space O(N * N) */
    }

    return bucket.reverse();                     /* Time O(N) */
};

var getTopK = (bucket, k, topK = []) => {
    for (const count of bucket) {/* Time O(N) */
        for (const num of count) {   /* Time O(N) */
            const isAtCapacity = topK.length === k;
            if (isAtCapacity) break;

            topK.push(num);               /* Space O(K) */
        }
    }

    return topK;
};
