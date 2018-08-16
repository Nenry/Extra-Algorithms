function swapNodes(indexes, queries) {
  let results = [];
  let root = new Node(1);
  [root.left, root.right] = [indexes[0][0], indexes[0][1]]; 0 1(left) 2(right) (3 left) 4( right)

}

//inOrderTraversal is for printing answer
function inOrderTraversal() {
  keep traversing left 
  when empty add to visited , then traverse immediate right, if its empty then go back up one 
  right before going right, add to visited
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = -1;
    this.right = -1;
  }
}

function buildTree(indexes) {
  let root = new Node(1);
  [root.left, root.right] = [indexes[0][0], indexes[0][1]];
  for (let i = 1; i < indexes.length; i++) {
    if (i % 2 === 0) {

    }
  }
}


class Tree{
  constructor(nodes) {
    this.tree = nodes;
  }
}

        L1R1    L1.5        R1.5        L1.5        
//[ [ 2, 3 ],[4, 5], [6, -1], [-1, 7], [8, 9], [10, 11], [12, 13], [-1, 14], [-1, -1], [15, -1], [16, 17], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]]
//use in order traversal to return results
//take 

//root is always 1
// in-order traversal
// keep going left node
//then go right

//1. Traverse the left subtree.
//2.  Visit root.
//3. Traverse the right subtree
    //  L + R   l + r of L  l + r of R
// [[2, 3], [-1, -1], [-1, -1]]
// [1, 1]
//start with left which is 

       // 1 
      //2   3