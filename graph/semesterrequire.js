/*
Write a function, semestersRequired, that takes in a number of courses (n) and a list
 of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A 
 single prerequisite of [A, B] means that course A must be taken before course B. 
 Return the minimum number of semesters required to complete all n courses. There is 
 no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in 
some semester before B.

You can assume that it is possible to eventually complete all courses.

test_00:

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs); // -> 3
test_01:

const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 5
test_02:

const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
semestersRequired(numCourses, prereqs); // -> 2
test_03:

const numCourses = 12;
const prereqs = [];
semestersRequired(numCourses, prereqs); // -> 1
test_04:

const numCourses = 3;
const prereqs = [
  [0, 2],
  [0, 1],
  [1, 2],
];
semestersRequired(numCourses, prereqs); // -> 3
test_05:

const numCourses = 6;
const prereqs = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];
semestersRequired(numCourses, prereqs); // -> 2

*/

/*
Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or 
not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.

test_00:

pairedParentheses("(david)((abby))"); // -> true
test_01:

pairedParentheses("()rose(jeff"); // -> false
test_02:

pairedParentheses(")("); // -> false
test_03:

pairedParentheses("()"); // -> true
test_04:

pairedParentheses("(((potato())))"); // -> true
test_05:

pairedParentheses("(())(water)()"); // -> true
test_06:

pairedParentheses("(())(water()()"); // -> false
test_07:

pairedParentheses(""); // -> true
test_08:

pairedParentheses("))()"); // -> false
*/

const pairedParentheses = (str) => {
  // todo
     let count = 0;
     let arrStr = str.split("")
     for(let el of arrStr){
          if(el === "("){
              count += 1
          }
          if(el === ")"){
              if(count === 0) return false
               count -= 1
          }
     }
     return count === 0
};
