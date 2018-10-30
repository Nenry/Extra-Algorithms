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

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}