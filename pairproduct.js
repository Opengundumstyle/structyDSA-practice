/*
Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

test_00:

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
test_01:

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
test_02:

pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
*/

const pairProduct = (numbers, targetProduct) => {
    // todo
     let productHash = {}
     for(let i = 0 ;i < numbers.length; i ++){
        let key = targetProduct/numbers[i]
        if(productHash[key] !== undefined){
           return [productHash[key],i]
        }
        productHash[numbers[i]] = i
     }
  };