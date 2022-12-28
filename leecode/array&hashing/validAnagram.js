/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
  */


var isAnagram = function(s, t) {
    let countObjS = {}
    let countObjT = {}
    
    if(s.length !== t.length )return false;
    
    for(let item of s){
        if(!countObjS[item]){
            countObjS[item] = 1;
        }else{
            countObjS[item]++;
        }
    }
    
 for (let n of t){
     if(!countObjT[n]){
            countObjT[n] = 1;
        }else{
            countObjT[n]++;
        }
 }

 for(let item in countObjS){
     if((countObjS[item] !== countObjT[item]) || (!countObjT[item])){
         return false;
     }
 }
    
 return true;
};