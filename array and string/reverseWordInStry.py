class Solution:
    def reverseWords(self, s: str) -> str:
         i = 0
         arr = []
         while i < len(s):
               if s[i] != " ":
                     word = ""
                     while i < len(s) and s[i] != " ":
                          word += s[i]
                          i += 1
                     arr.append(word)
               else:
                  i += 1
                  
         reversed_array = arr[::-1]
         
         separator = " "
         join_string = separator.join(map(str,reversed_array))

         return join_string