
function mostLeft(root) {
  let stack = [root];
  let current;

  while (stack.length > 0) {
    current = stack.pop();

    if (current.left) {
      stack.push(current.left);
    }

    if (current.right) {
      stack.push(current.right);
    }
  }

  return current;
}