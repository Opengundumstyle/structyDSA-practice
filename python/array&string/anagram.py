# Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

# test_00:

# anagrams('restful', 'fluster') # -> True
# test_01:

# anagrams('cats', 'tocs') # -> False
# test_02:

# anagrams('monkeyswrite', 'newyorktimes') # -> True
# test_03:

# anagrams('paper', 'reapa') # -> False
# test_04:

# anagrams('elbow', 'below') # -> True
# test_05:

# anagrams('tax', 'taxi') # -> False
# test_06:

# anagrams('taxi', 'tax') # -> False
# test_07:

# anagrams('night', 'thing') # -> True
# test_08:

# anagrams('abbc', 'aabc') # -> False
# test_09:

# anagrams('po', 'popp') # -> false
# test_10:

# anagrams('pp', 'oo') # -> false


def anagrams(s1, s2):
  return char_count(s1) == char_count(s2)
  
def char_count(s):
    count = {}
    for char in s:
      if char not in count:
         count[char] = 0

      count[char] += 1
      
    return count
