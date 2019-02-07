// Swap left with right on a binary tree

//recursive O(n)
function invertBinaryTree(tree) {
  if (tree !== null) {
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;


  }

  return tree;
}


// iterative O(n), BFS
function invertBinaryTree(tree) {
  let bfsNodes = [];
  let queue = [tree];
  // let rootNode = tree;
  while (queue.length > 0) {
    let currNode = queue.shift();
    if (currNode === null) continue;
    swapLeftAndRight(currNode);
    queue.push(currNode.left);
    queue.push(currNode.right);
  }

  
}

function swapLeftAndRight(node) {
  const left = node.left;
  node.left = node.right;
  node.right = left;

}

