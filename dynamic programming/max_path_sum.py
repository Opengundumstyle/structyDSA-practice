
# max path sum
# Write a function, max_path_sum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

# You can assume that all numbers are non-negative.

# grid = [
#   [1, 3, 12],
#   [5, 1, 1],
#   [3, 6, 1],
# ]
# max_path_sum(grid) # -> 18
# grid = [
#   [1, 2, 8,  1],
#   [3, 1, 12, 10],
#   [4, 0, 6,  3],
# ]
# max_path_sum(grid) # -> 36
# grid = [
#   [1, 2, 8, 1],
#   [3, 10, 12, 10],
#   [4, 0, 6, 3],
# ]
# max_path_sum(grid) # -> 39
# grid = [
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
# ]
# max_path_sum(grid) # -> 27
# grid = [
#   [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
#   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
#   [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 42, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
#   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
# ]
# max_path_sum(grid) # -> 82


def max_path_sum(grid):
    r,c = 0,0
    return _max_path_sum(grid,r,c)


def _max_path_sum(grid,r,c):
  
    maxVal = float("-inf")
     
    if c == len(grid[0]) - 1 and r == len(grid) - 1:
        return grid[r][c]
    
    if c == len(grid[0]) or r == len(grid):
        return 0
    
    rightSum = _max_path_sum(grid,r+1,c)
    downSum = _max_path_sum(grid,r,c+1)
    
    maxVal = max(rightSum,downSum) + grid[r][c]
    
    return maxVal