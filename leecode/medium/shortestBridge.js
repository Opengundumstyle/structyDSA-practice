/**You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

 

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1
Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
 */

var shortestBridge= function(grid) {
    // todo
     let mainIsland;
     for(let r = 0; r < grid.length ; r ++){
        for(let c = 0; c < grid[0].length; c++){
          const potentialIsland = traverseIsland(grid,r,c,new Set())
                 if(potentialIsland.size > 0){
                       mainIsland = potentialIsland;
                       break;
                 }
              }
          }
    
        const visited = new Set(mainIsland)
        const queue = []
        for(let pos of mainIsland){
            const [r,c] = pos.split(',').map(Number);
            queue.push([r,c,0]);
        }
         
        while(queue.length > 0 ){
               const [r,c,distance] = queue.shift()
               const pos = r + ',' + c
               if(grid[r][c] === 1 && !mainIsland.has(pos)) return distance - 1
                   const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
               for (let delta of deltas) {
                  const [ deltaRow, deltaCol ] = delta;
                  const neighborRow = r + deltaRow;
                  const neighborCol = c + deltaCol;
                  const neighborPos = neighborRow + ',' + neighborCol;
                  if (isInbound(neighborRow, neighborCol,grid) && !visited.has(neighborPos)) {
                  visited.add(neighborPos);
                  queue.push([neighborRow, neighborCol, distance + 1]);
            }
          }
        }
   };
  
  const isInbound = (r,c,grid) =>{
          let rowInbound = 0 <= r && r < grid.length;
          let colInbound = 0 <= c && c < grid[0].length;
          return rowInbound && colInbound;
  }
  
  const traverseIsland = (grid,r,c,visited)=>{
          if(!isInbound(r,c,grid)||grid[r][c] === 0) return visited;
          const pos = r + ',' + c;
          if(visited.has(pos)) return visited ;
          visited.add(pos)
          traverseIsland(grid,r - 1,c,visited)
          traverseIsland(grid,r + 1,c,visited)
          traverseIsland(grid,r,c - 1,visited)
          traverseIsland(grid,r,c + 1,visited)
          return visited;
  }

  