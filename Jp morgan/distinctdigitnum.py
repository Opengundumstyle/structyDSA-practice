# given an array of integers, order their binary values and return an 
# array of their decimal values


import sys

def distincdigitnum(arr: list[int]) -> list[int]:
    counts = {}
    
    for el in arr:
        count = bin(el).count('1')
        if count not in counts:
             counts[count] = [el]
        else:
             counts[count].append(el)
    arr = []
    for el in sorted(counts.keys()):
         arr.extend(counts[el])
    return arr
        
       
if __name__ == '__main__':
    arr = [7,13,25,1,2,3,4,5]  # Read command line arguments as integers
    result = distincdigitnum(arr)
    print(result)
