# paired parentheses
# Write a function, paired_parentheses, that takes in a string as an argument. The function should return a boolean 
#indicating whether or not the string has well-formed parentheses.

# You may assume the string contains only alphabetic characters, '(', or ')'.

# paired_parentheses("(david)((abby))") # -> True
# paired_parentheses("()rose(jeff") # -> False
# paired_parentheses(")(") # -> False
# paired_parentheses("()") # -> True
# paired_parentheses("(((potato())))") # -> True
# paired_parentheses("(())(water)()") # -> True
# paired_parentheses("(())(water()()") # -> False
# paired_parentheses("") # -> True
# paired_parentheses("))()") # False

def paired_parentheses(string):
     if string == '': return True
     if string[0] == ")":
        return False
     stack = []
     for s in string:
         if s == "(":
              stack.append(s)
         if s == ")" and stack[-1] =="(":
              stack.pop()
     if len(stack) == 0:
         return True
     return False