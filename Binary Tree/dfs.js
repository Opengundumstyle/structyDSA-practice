/*
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

test_00:

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
test_01:

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
test_02:

const a = new Node('a');
//      a
depthFirstValues(a); 
//    -> ['a']
test_03:

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.right = b;
b.left = c;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

depthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e']
test_04:

depthFirstValues(null); 
//    -> []
*/


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
    iterative version
*/
// const depthFirstValues = (root) => {
//     // todo 
//      if(root === null) return []
//      let tempStack = [root];
//      let finalResult = [];
     
//      while(tempStack.length > 0){
//          let current  = tempStack.pop()
//           finalResult.push(current.val)
//           if(current.right) tempStack.push(current.right)
//           if(current.left)  tempStack.push(current.left)
//         }
//        return finalResult;
//   };
  
  /*
   recursive version
  */

   const depthFirstValues = (root) => {
      if(root = null) return []
      let leftArrayVal =  depthFirstValues(root.left)
      let rightArrayVal =  depthFirstValues(root.right)
      return [root,...leftArrayVal,...rightArrayVal]

   }
  