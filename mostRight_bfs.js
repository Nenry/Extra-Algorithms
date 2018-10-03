function treeRight(root) {
  let queue = [root];
  let current;

  while (queue.length > 0) {
    current = queue.shift();

    if (current.left) {
      queue.push(current.left);

    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return current;
}

