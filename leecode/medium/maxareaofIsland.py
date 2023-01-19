# You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally 
# (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

# The area of an island is the number of cells with a value 1 in the island.

# Return the maximum area of an island in grid. If there is no island, return 0.

 

# Example 1:


# Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],
# [0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
# Output: 6
# Explanation: The answer is not 11, because the island must be connected 4-directionally.
# Example 2:

# Input: grid = [[0,0,0,0,0,0,0,0]]
# Output: 0

class Solution(object):
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        rows = len(grid)
        cols = len(grid[0])
        hash = set()
        def traceIsland(r,c):
            if (r<0 or r == rows or c < 0 or c == cols or grid[r][c] == 0 or (r,c) in hash):
                 return 0
            hash.add((r,c))
            return (1 +  traceIsland(r+1,c)+
                     traceIsland(r-1,c)+
                      traceIsland(r,c+1)+
                       traceIsland(r,c-1)
                  )
        area = 0
        for r in range(rows):
            for c in range(cols):
                  area = max(area,traceIsland(r,c))

        return area