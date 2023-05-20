// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to the closest person.

 

// Example 1:


// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.
// Example 2:

// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.
// Example 3:

// Input: seats = [0,1]
// Output: 1
 

// Constraints:

// 2 <= seats.length <= 2 * 104
// seats[i] is 0 or 1.
// At least one seat is empty.
// At least one seat is occupied.

// var maxDistToClosest = function(seats) {
    
//     let frontMax = getFrontMax(seats)
//     let endMax = getEndMax(seats)
     
//     let leftBound = frontMax.left
//     let rightBound = endMax.right
    
//     let start = leftBound
//     let end = start + 1
//     let max = 0
    
//     while(end <= rightBound){
//            if(seats[end] === 1){
//                 let current = end - start 
//                 if(max < current) max = current
//                 start = end
//                 end += 1
//            }else{
//               end += 1
//            }
//        }
   

   
//        if(max % 2 !== 0){
//             max = Math.floor(max/2)
//        }else{
//             max = max/2
//        }
   
    
//        max = Math.max(frontMax.max, endMax.max,max)
       
     
   
//        return max
   
// };

// const getFrontMax =(arr)=>{
//      let max = 0;
//      let i = 0
//      while(arr[i] !== 1 && i < arr.length){
//             max += 1
//             i += 1
//       }
   
//       return {max,left:i}
// }


// const getEndMax =(arr)=>{
//      let max = 0;
//      let i = arr.length - 1
//      while(arr[i] !== 1 && i >= 0){
//             max += 1
//             i -= 1
//       }
   
//       return {max,right:i} 
   
// } 


// best run time 
const VACANT   = 0;
const OCCUPIED = 1;

var maxDistToClosest = function(seats) {
    
    let leftGap = seats.indexOf(OCCUPIED);
    let rightGap = seats.length - seats.lastIndexOf(OCCUPIED) - 1;

    let maxMiddleGap = 0;
    let gapCounter = 0;

    for (let i = leftGap + 1; i <= seats.length - rightGap; i++) {
        if (seats[i] === OCCUPIED) {
            maxMiddleGap = Math.max(maxMiddleGap, gapCounter);
            gapCounter = 0;
        } else {
            gapCounter++;
        }
    }

    return Math.max(leftGap, Math.ceil(maxMiddleGap / 2), rightGap);
};