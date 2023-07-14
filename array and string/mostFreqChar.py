# most frequent char
# Write a function, most_frequent_char, that takes in a string as an argument. The function should return the most 
# frequent character of the string. If there are ties, return the character that appears earlier in the string.

# You can assume that the input string is non-empty.

# most_frequent_char('bookeeper') # -> 'e'
# most_frequent_char('david') # -> 'd'
# most_frequent_char('abby') # -> 'b'
# most_frequent_char('mississippi') # -> 'i'
# most_frequent_char('potato') # -> 'o'
# most_frequent_char('eleventennine') # -> 'e'
# most_frequent_char('riverbed') # -> 'r'

def most_frequent_char(s):
    mostFreq = ''
    countReq = 0
    countHash = {}
    for el in s:
         if countHash.get(el,0) == 0:
             countHash[el] = 1
         else:
             countHash[el] += 1
    
    for el in s:
        if(countHash[el] > countReq):
            mostFreq = el
            countReq = countHash[el]
        
    return mostFreq