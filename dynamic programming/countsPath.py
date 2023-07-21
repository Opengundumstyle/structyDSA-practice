# count paths
# Write a function, count_paths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

# grid = [
#   ["O", "O"],
#   ["O", "O"],
# ]
# count_paths(grid) # -> 2
# grid = [
#   ["O", "O", "X"],
#   ["O", "O", "O"],
#   ["O", "O", "O"],
# ]
# count_paths(grid) # -> 5
# grid = [
#   ["O", "O", "O"],
#   ["O", "O", "X"],
#   ["O", "O", "O"],
# ]
# count_paths(grid) # -> 3
# grid = [
#   ["O", "O", "O"],
#   ["O", "X", "X"],
#   ["O", "O", "O"],
# ]
# count_paths(grid) # -> 1
# grid = [
#   ["O", "O", "X", "O", "O", "O"],
#   ["O", "O", "X", "O", "O", "O"],
#   ["X", "O", "X", "O", "O", "O"],
#   ["X", "X", "X", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O"],
# ]
# count_paths(grid) # -> 0
# grid = [
#   ["O", "O", "X", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "X"],
#   ["X", "O", "O", "O", "O", "O"],
#   ["X", "X", "X", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O"],
# ]
# count_paths(grid) # -> 42
# grid = [
#   ["O", "O", "X", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "X"],
#   ["X", "O", "O", "O", "O", "O"],
#   ["X", "X", "X", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "X"],
# ]
# count_paths(grid) # -> 0
# grid = [
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
#   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
# ]
# count_paths(grid) # -> 40116600

def _count_paths(grid,r,c,memo):
    pos = (r,c)
    if pos in memo:
       return memo[pos]
  
    if r == len(grid) or c == len(grid[0]) or grid[r][c] == 'X':
      return 0
    
    if r == len(grid) - 1 and c == len(grid[0]) - 1:
         return 1
    
    down_count = _count_paths(grid,r + 1,c,memo)
    right_count = _count_paths(grid,r,c + 1,memo)
    memo[pos] = down_count + right_count
    return memo[pos]