/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

test_00:

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

levelAverages(a); // -> [ 3, 7.5, 1 ] 
test_01:

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

levelAverages(a); // -> [ 5, 32.5, 17.5, 2 ] 
test_02:

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(45);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0     45
//     /       \
//    -1       -2

levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]
test_03:

const q = new Node(13);
const r = new Node(4);
const s = new Node(2);
const t = new Node(9);
const u = new Node(2);
const v = new Node(42);

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//        13
//      /   \
//     4     2
//      \
//       9
//      /
//     2
//    /
//   42

levelAverages(q); // -> [ 13, 3, 9, 2, 42 ]
test_04:

levelAverages(null); // -> [ ]
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
    // todo
     if(root === null) return []
      let stack = [{node:root,level:0}]
      let result = []
      while(stack.length > 0){
           let {node,level} = stack.pop()
           if(result.length === level){
               result.push([node.val,0])
               
           }else{
               result[level][0] += node.val
           } 
           result[level][1] += 1
          
       if(node.right) stack.push({node:node.right, level:level+1})
       if(node.left) stack.push({node:node.left, level:level+1})
      }
    
     for(let i = 0 ; i < result.length ; i++){
            let subPath = result[i]
            result[i] = subPath[0] / subPath[1]
     }
    
      return result
        
  };
  
  