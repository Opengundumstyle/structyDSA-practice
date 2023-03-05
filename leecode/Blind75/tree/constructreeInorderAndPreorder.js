// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

 var buildTree = function(preorder, inorder) {
    const isBaseCase = !preorder.length || !inorder.length;
    if (isBaseCase) return null;

    return dfs(preorder, inorder);
}

var dfs = (preorder, inorder) => {
    const { leftInorder, mid, rightInorder } = getPointers(preorder, inorder);
    const root = new TreeNode(inorder[mid]);

    root.left = buildTree(preorder, leftInorder);
    root.right = buildTree(preorder, rightInorder);

    return root;
}

const getPointers = (preorder, inorder) => {
    const next = preorder.shift();
    const mid = inorder.indexOf(next);
    const leftInorder = inorder.slice(0, mid);
    const rightInorder = inorder.slice(mid + 1);

    return { leftInorder, mid, rightInorder };
}