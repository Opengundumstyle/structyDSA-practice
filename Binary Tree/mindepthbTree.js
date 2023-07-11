/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    let queue = [[root,1]]
    if(root===null) return 0
    while(queue.length !== 0){
     let current =  queue.shift()
     if(current[0].left === null && current[0].right === null) return current[1]
     if(current[0].left)queue.push([current[0].left,current[1]+1])
     if(current[0].right)queue.push([current[0].right,current[1]+1])
    }


};