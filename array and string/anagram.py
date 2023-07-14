# anagrams
# Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean
#  indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

# anagrams('restful', 'fluster') # -> True
# anagrams('cats', 'tocs') # -> False
# anagrams('monkeyswrite', 'newyorktimes') # -> True
# anagrams('paper', 'reapa') # -> False
# anagrams('elbow', 'below') # -> True
# anagrams('tax', 'taxi') # -> False
# anagrams('taxi', 'tax') # -> False
# anagrams('night', 'thing') # -> True
# anagrams('abbc', 'aabc') # -> False
# anagrams('po', 'popp') # -> false
# anagrams('pp', 'oo') # -> false

def anagrams(s1, s2):
    hash = makeHash(s1)
    for el in s2:
        if hash.get(el, 0) == 0:
            return False
        hash[el] -= 1
    all_zero = all(value == 0 for value in hash.values())
    return all_zero

def makeHash(s1):
    hash = {}
    for el in s1:
        hash[el] = hash.get(el, 0) + 1
    return hash