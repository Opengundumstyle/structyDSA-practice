/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of 
the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

// var maxArea = function(height) {
//     let i = 0;
//     let j = height.length - 1;
//     let maxArea = 0;
//    while(i < j){
//           let currentArea;
//           let width = j - i 
//           if(height[i] >= height[j]){
//                  currentArea = width * height[j]
//                  j--
//           }else {
//                  currentArea = width * height[i]
//                  i ++ 
//          }
//           if(currentArea > maxArea) maxArea = currentArea
// }
//    return maxArea
// };

// neetcode solution

var maxArea = function (height) {
    let [left, right, max] = [0, height.length - 1, 0];

    while (left < right) {
        const [leftHeight, rightHeight] = getHeights(height, left, right);
        const area = getArea(height, left, right);

        max = Math.max(max, area);

        const isRightGreater = leftHeight <= rightHeight;
        if (isRightGreater) left++;

        const isRightLess = rightHeight < leftHeight;
        if (isRightLess) right--;
    }

    return max;
};

const getHeights = (height, left, right) => [height[left], height[right]];

const getArea = (height, left, right) => {
    const [leftHeight, rightHeight] = getHeights(height, left, right);
    const _height = Math.min(leftHeight, rightHeight);
    const width = right - left;

    return _height * width;
};