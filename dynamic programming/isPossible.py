
def isPossible(a,b,c,d):
   return  _isPossible(a,b,c,d,{})

def _isPossible(a,b,c,d,memo):
     
     n = str(a)+','+ str(b)
     
     if n in memo:
           return memo[n]

     if a == c and b == d: 
         return True
     if a > c or b > d:
         return False
     
     result1 = _isPossible(a+b,b,c,d)
     result2 = _isPossible(a,b+a,c,d)
     res = result1 and result2
     memo[n] = res
     return res
     if result1:
            memo[n] = result1
            return result
     if result2:
            memo[n] = result2
            return result2
     
     memo[n] = False
     return False




if __name__ == '__main__':
   # Read command line arguments as integers
    result = isPossible(1,1,5,5)
    print(result)