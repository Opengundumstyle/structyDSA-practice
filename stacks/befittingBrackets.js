/*
Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }

test_00:

befittingBrackets('(){}[](())'); // -> true
test_01:

befittingBrackets('({[]})'); // -> true
test_02:

befittingBrackets('[][}'); // -> false
test_03:

befittingBrackets('{[]}({}'); // -> false
test_04:

befittingBrackets('[]{}(}[]'); // -> false
test_05:

befittingBrackets('[]{}()[]'); // -> true
test_06:

befittingBrackets(']{}'); // -> false
test_07:

befittingBrackets(''); // -> true
test_08:

befittingBrackets('{[(}])'); // -> false
*/

const befittingBrackets = (str) => {
    // todo
      let stack = [];
      let bracketObj = {
           "(":")",
           "[":"]",
           "{":"}",
      }
      let strArr = str.split('')
      for(let i = 0 ; i < strArr.length; i ++){
            let el = str[i]
            if(el in bracketObj){
                 stack.push(bracketObj[el]);
            }else{
                if(stack[stack.length - 1] === el){
                     stack.pop()
                }else{
                    return false
                }
            }
      }
    
      return stack.length === 0
  };