/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

test_00:

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
test_01:

const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4
test_02:

const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1
test_03:

 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0
*/

const islandCount = (grid) => {
    // todo
     let count = 0;
     let visited = new Set();
    
     for(let i = 0 ; i < grid.length;i++){
         for(let j = 0; j < grid[0].length; j++){
               
               if(isIsland(i,j,grid,visited) === true){
                       count += 1
               }
         }
     }
      return count
      
  };
  
  const isIsland =(i,j,grid,visited)=>{
       
         let pos = i +','+j
         const rowbound = 0 <= i && i < grid.length;
         const colbound = 0 <= j && j < grid[0].length;
         if(!rowbound || !colbound) return false;
        
         if(visited.has(pos)) return false
         if(grid[i][j] === 'W') return false
         visited.add(pos)
         isIsland(i+1,j,grid,visited)
         isIsland(i,j+1,grid,visited)
         isIsland(i-1,j,grid,visited)
         isIsland(i,j-1,grid,visited)
         
         return true
  }