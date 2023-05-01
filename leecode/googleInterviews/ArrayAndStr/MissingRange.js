/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const result = [];

    let prev = lower - 1; // Set prev to one less than lower to handle the first range
    for (let i = 0; i <= nums.length; i++) {
        let curr = i === nums.length ? upper + 1 : nums[i]; // Set curr to one more than upper to     handle the last range
        if (curr - prev > 1) {
            result.push([prev + 1, curr - 1]);
        }
        prev = curr;
    }

    return result;
};