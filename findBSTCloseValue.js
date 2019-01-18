function findClosestValueInBst(tree, target) {
  //conditionals to go left or right depending on the current node value 
  //right side is value with the same value or greater
  //left is value less than node value 
  // need to return two values, [prev value, new value]
  //recursive

  return closestBSTValueHelper(tree, target, Infinity);

}

// recursively
function closestBSTValueHelper(node, tgt, closest) {
  //reached leaf node
  if (node === null) {
    return closest;
  }

  //if the node value delta is smaller than the currently closest then update
  //order of conditional is crucial
  if (Math.abs(tgt - closest) > (Math.abs(tgt - node.value))) {
    closest = node.value;
  }

  //if the node value is bigger than the target. we want to go to the left(smaller numbers)
  if (node.value > tgt) {
    return closestBSTValueHelper(node.left, tgt, closest);
  } else if (node.value < tgt) { //if the node value is smaller thne the target, we want to go to the right (larger numbers)
    return closestBSTValueHelper(node.right, tgt, closest);
  } else {
    return closest;
  }


}

//iteratively
function iterClosestBSTValueHelper(tree, target, closest) {
  let currentNode = tree;

  while (currentNode) {

    if (Math.abs(target - closest) > Math.abs(target-currentNode.value)) {
      closest = currentNode.value;
    }

    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else if (currentNode.value < target) {
      currentNode =currentNode.right;
    } else {
       console.log('hello');
      break;
    }
    

  }
  return closest;

}


function findClosestValueInBstHelperK(tree, target, closest) {
  let currentNode = tree;

  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    } 

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}