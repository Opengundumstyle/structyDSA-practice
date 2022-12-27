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
 var encode = (strs) => {
    return strs
        .map((str) => `${str.length}#${str}`)/* Time O(N) | Ignore Auxillary Space O(N) */
        .join('');                           /* Time O(N) | Ignore Auxillary Space O(N) */
}

/**
 * String - Delimiter
 * Time O(N * K) | Space O(N)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string} str
 * @return {string[]}
 */
var decode = (str, index = 0, decodedWords = []) => {
    while (index < str.length) {/* Time O(N) */
        const { nextIndex, word } = delimitWord(str, index);/* Time O(K) | Ignore Auxillary Space Space (K) */

        decodedWords.push(word);                            /*           | Ignore Auxillary Space O(N * K ) */
        index = nextIndex;
    }

    return decodedWords;
}

const delimitWord = (str, index) => {
    const delimiter = str.indexOf('#', index);                             /* Time O(K) */
    const length = Number(str.slice(index, delimiter));                    /* Time O(K) */
    const [ start, end ] = [ (delimiter + 1), ((delimiter + length) + 1) ];
    const word = str.slice(start, end);                                    /* Time O(K) | Ignore Auxillary Space O(K) */

    return {
      nextIndex: end,
      word
    };
}
