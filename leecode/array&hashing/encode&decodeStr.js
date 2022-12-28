/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

 

// neetcode solution

/**
 * String - Delimiter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string[]} strs
 * @return {string}
 */
//  var encode = (strs) => {
//     return strs
//         .map((str) => `${str.length}#${str}`)/* Time O(N) | Ignore Auxillary Space O(N) */
//         .join('');                           /* Time O(N) | Ignore Auxillary Space O(N) */
// }

/**
 * String - Delimiter
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/encode-and-decode-strings/
//  * @param {string} str
//  * @return {string[]}
//  */
// var decode = (str, index = 0, decodedWords = []) => {
//     while (index < str.length) {/* Time O(N) */
//         const { nextIndex, word } = delimitWord(str, index);/* Time O(K) | Ignore Auxillary Space Space (K) */

//         decodedWords.push(word);                            /*           | Ignore Auxillary Space O(N * K ) */
//         index = nextIndex;
//     }

//     return decodedWords;
// }

// const delimitWord = (str, index) => {
//     const delimiter = str.indexOf('#', index);                             /* Time O(K) */
//     const length = Number(str.slice(index, delimiter));                    /* Time O(K) */
//     const [ start, end ] = [ (delimiter + 1), ((delimiter + length) + 1) ];
//     const word = str.slice(start, end);                                    /* Time O(K) | Ignore Auxillary Space O(K) */

//     return {
//       nextIndex: end,
//       word
//     };
// }

// my solution 

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
     encodeStr = ''
     for(let s of strs){
           let newS = s.length.toString() + '#' + s
           encodeStr += newS
     }
      return encodeStr
};

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
var decode = function(s) {
    let decodeStr = []
    let i = 0
    let j = 0
    let numStr = ''
    while(j !== s.length){
        if(s[i]!== '#'){
             numStr += s[i]
             i+=1 
        }else{
              let count = Number(numStr)
              let init = 0
              let newStr = ''
              j = i+1
              while( init < count){
                   newStr += s[j]
                   j += 1
                   init += 1
               }
              i = j
              numStr = ''
              decodeStr.push(newStr)
             }
        }
        
   return decodeStr
};

/**
* Your functions will be called as such:
* decode(encode(strs));
*/


let arr = ["Hello","World"]
let encoded = encode(arr)
console.log(encoded)
console.log(decode(encoded))