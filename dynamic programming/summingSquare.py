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