# can concat
# Write a function, can_concat, that takes in a string and a list of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the list together to form the string.

# You may reuse words of the list as many times as needed.

# can_concat("oneisnone", ["one", "none", "is"]) #  -> True
# can_concat("oneisnone", ["on", "e", "is"]) #  -> False
# can_concat("oneisnone", ["on", "e", "is", "n"]) #  -> True
# can_concat("foodisgood", ["is", "g", "ood", "f"]) #  -> True
# can_concat("santahat", ["santah", "hat"]) #  -> False
# can_concat("santahat", ["santah", "san", "hat", "tahat"]) #  -> True
# can_concat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]) #  -> False
# can_concat("fooisgood", ["foo", "is", "g", "ood", "f"]) # -> True


def can_concat(s,words):
    return _can_concat(s,words,{})



def _can_concat(s, words,memo):
    if s in memo:
       return memo[s]
    
    if s == '':
      return True
    
    for word in words:
        if s.startswith(word):
           suffix = s[len(word):]
           if _can_concat(suffix,words,memo) == True:
              memo[s] = True
              return True
    memo[s] = False
    return False
              