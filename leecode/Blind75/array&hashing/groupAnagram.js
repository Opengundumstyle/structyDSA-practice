/*
Given an array of strings strs, group the anagrams together. You can return the answer in any 
order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

var groupAnagrams = function(strs) {
    let alphabet = 'abcdefghijklmnopqrstuvwsyz'
    let hash= {}
    for(let char of strs){
        let key = makeKey(char,alphabet)
        console.log(key)
        if(hash[key]){
            hash[key].push(char)
        }else{
             hash[key]= [char]
        }
    }
    
   return Object.values(hash)
};

const makeKey = (char,alphabet)=>{
    let alphArr = alphabet.split('')
    let newKey  = ''
    for(let letter of alphabet){
          newKey += '0'
   }
  let newkeyArr = newKey.split('')
   for(let el of char){
         let index = alphArr.indexOf(el)
         let KeyInt = Number(newkeyArr[index])
         let newKeyInt = (KeyInt + 1)
         let newKeyStr = newKeyInt.toString()
         newkeyArr[index] = newKeyStr
         
   }

   newKey = newkeyArr.join('#')
   return newKey
}

let str = ["bdddddddddd","bbbbbbbbbbc"];

console.log(groupAnagrams(str))