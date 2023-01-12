/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
 */

var checkInclusion = function(s1, s2) {
    let left = 0
    let right = s1.length - 1
    let hash1 = makeHash1(s1)
    
    while(right < s2.length){
       let hash2 = makeHash2(s2,left,right)
       console.log(hash2)
       if( checkMatch(hash1,hash2)) return true
       left ++
       right ++
    }
    return false
}

const checkMatch = (hash1,hash2)=> {
    for(let key in hash1){
            if(hash1[key] !== hash2[key]) return false
    }
     return true
}

const makeHash1 = (str) => {
     let hash = {}
     for(let el of str){
          if(hash[el]) {
                hash[el] += 1
          }else{
                hash[el] = 1
          }
     }
     return hash
}

const makeHash2 = (str,l,r)=>{
    let hash = {}
   for(let i = l; i <= r;i++){
          let key = str[i]
          if(hash[key]) hash[key] += 1
          else hash[key] = 1
   }
   return hash
}