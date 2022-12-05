/*
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes 
(src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and
 destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, 
not stubborn. -AZ

test_00:

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
test_01:

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'j'); // false
test_02:

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); // true
test_03:

const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'w'); // true
test_04:

const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'z'); // false
*/
// dfs iterative
const hasPath = (graph, src, dst) => {
    // todo
    let stack = [src]
    while(stack.length > 0){
        let current  = stack.pop()
        
        for(let neighbor of graph[current]){
            if(neighbor === dst ){
                 return true
            }
            stack.push(neighbor)
        }
    }
    return false
  };
  
  
