const pairSum = (numbers, targetSum) => {
    // todo
    let sumObj = {}
    for(let i = 0; i < numbers.length; i++){
       let key = targetSum - numbers[i];
       if(sumObj[key] !== undefined){
           return [sumObj[key],i]
       }else{
         sumObj[numbers[i]] = i
       }
    }
      
  };

  console.log(pairSum([3, 2, 5, 4, 1], 8))