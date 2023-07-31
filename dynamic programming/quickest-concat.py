# quickest concat
# Write a function, quickest_concat, that takes in a string and a list of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the list.

# You may use words of the list as many times as needed.

# quickest_concat('caution', ['ca', 'ion', 'caut', 'ut']) # -> 2
# quickest_concat('caution', ['ion', 'caut', 'caution']) # -> 1
# quickest_concat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']) # -> 4
# quickest_concat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']) # -> 3
# quickest_concat('simchacindy', ['sim', 'simcha', 'acindy']) # -> -1
# quickest_concat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']) # -> 2
# quickest_concat('rongbetty', ['wrong', 'bet']) # -> -1


def quickest_concat(s, words):
  if s == "":
     return 0
    
  min_words = float("inf")
  for word in words:
     if s.startswith(word):
          suffix = s[len(word):]
          attempt = 1 + quickest_concat(suffix,words)
          min_words = min(attempt,min_words)
          
  return min_words