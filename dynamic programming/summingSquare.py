# summing squares
# Write a function, summing_squares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

# For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

# Given 12:

# summing_squares(12) -> 3

# The minimum squares required for 12 is three, by doing 4 + 4 + 4.

# Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
# summing_squares(8) # -> 2
# summing_squares(9) # -> 1
# summing_squares(12) # -> 3
# summing_squares(1) # -> 1
# summing_squares(31) # -> 4
# summing_squares(50) # -> 2
# summing_squares(68) # -> 2
# summing_squares(87) # -> 4


import math

def summing_squares(n):
    return _summing_squares(n,{})
  
def _summing_squares(n,memo):
    
    if n in memo:
       return memo[n]
    
    if n == 0:
        return 0

    minResult = float('inf')
    for i in range(1,math.floor(math.sqrt(n))+1):
       num = i * i
       num_sqaures = 1 + _summing_squares(n - num,memo)
       minResult = min(num_sqaures,minResult)
    
    memo[n] = minResult