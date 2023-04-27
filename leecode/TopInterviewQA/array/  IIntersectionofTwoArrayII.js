var intersect = function(nums1, nums2) {
    
    let hash1 = makeHash(nums1)
    let hash2 = makeHash(nums2)
    let finalHash = {}
    let finalArr = []
    
    for(let key in hash1){
          if(key in hash2){
               finalHash[key] = hash1[key] > hash2[key]? hash2[key]:hash1[key]
          }
    }
   
    for(let key in finalHash){
          for(let i = 0 ; i < finalHash[key];i++){
                finalArr.push(key)
          }
    }
   
   return finalArr
    
    
};

const makeHash = (nums)=>{
      let newHash = {}
      for(let el of nums){
            if(el in newHash){
                 newHash[el] += 1
            }else{
                 newHash[el] = 1
            }
      }
   
      return newHash
      
}