/*
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array
 where each subarray represents a level of the tree.

test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]
test_02:

const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

treeLevels(q); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]
test_03:

treeLevels(null); // -> []
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// dfs iterative solution
// const treeLevels = (root) => {
//     // todo
//       if(root === null) return []
//       let stack = [{"root":root,"level":0}]
//       let finalArr = []
    
//       while(stack.length > 0){
//           let current = stack.pop();
//           let currentLevel = current["level"]
//           if(finalArr.length < currentLevel+1){
//               finalArr.push([current["root"].val])
//           }else{
//               finalArr[currentLevel].push(current["root"].val)
//           }
//          let right = current["root"].right
//          let left = current["root"].left
        
//           if(right) {
//                stack.push({"root":right,"level":currentLevel + 1 })
//           }
//           if(left){
//               stack.push({"root":left,"level":currentLevel + 1 })
//           }
//         }
//      return finalArr
//   };

// dfs recursive
const treeLevels = (root) => {
    // todo
    const levels = [];
    fillLevels(root,levels,0)
    return levels;
  };
  
  const fillLevels = (root,levels,levelNum) => {
       if(root === null) return;
       if(levels.length === levelNum){
           levels.push([root.val])
       }else{
           levels[levelNum].push(root.val)
       }
       fillLevels(root.left,levels,levelNum + 1);
       fillLevels(root.right,levels,levelNum + 1)
  }

  
  