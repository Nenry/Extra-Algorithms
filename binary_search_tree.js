class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(target, node) {
    if (node === null) {
      return null;
    }

    if (node.value === target) {
      return node;
    }


    if (node.value > target) {
      return this.find(target, node.left);
    } else if (node.value < target) {
      return this.find(target, node.right);
    }
  }
// 
}