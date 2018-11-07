// Given a Binary Search Tree(BST) and a range[min, max], remove all keys which are outside the given range.The modified tree should also be BST.
// For example, consider the following BST and range[-10, 13].
                // Input                     Output
            //       6                       6
            //     /   \                   /   \
            // -13       14      =>      -8     13
            //   \       / \                    /
            //   -8     13  15                 7
            //         /
            //         7


//Notes:
//Create a Node class with its value and left and right
// Binary Search Tree, should have left side is equal to or less than values while right side is greater than parent node
// if node has two children then need to go one left then all the way right to replace it

// if no children then just replace or delete 
// create a BST
//traverse BFS or DFS, if root is not within range then return null;


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor(node) {
    this.root = node;
  }
}