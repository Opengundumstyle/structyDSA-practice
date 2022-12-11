/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:

const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:

const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:

const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1
*/

const minimumIsland = (grid) => {
    // todo
     let minSize = Infinity;
     let visited = new Set()
     for(let i  = 0 ; i < grid.length; i += 1){
        for(let j = 0; j < grid[0].length; j += 1){
            let size = isIsland(i,j,visited,grid)
                if( size > 0 && size < minSize){
                    minSize = size
                  }
             }
        }
      return minSize;
  };
  
  const isIsland = (i,j,visited,grid) => {
       let pos = i +','+ j
       rowInbound = 0 <= i && i < grid.length
       colInbound = 0 <= j && j < grid[0].length 
       if(!rowInbound || !colInbound) return 0
       if(grid[i][j] === 'W') return 0
       if(visited.has(pos)) return 0
       visited.add(pos)
    
       let currentsize = 1;
       currentsize += isIsland(i+1,j,visited,grid)
       currentsize += isIsland(i,j+1,visited,grid)
       currentsize += isIsland(i-1,j,visited,grid)
       currentsize += isIsland(i,j-1,visited,grid)
       
      return currentsize
  }
  
  