var isValidBST = function (root) {
  
  return isValidBSTHelper(root, -Infinity, Infinity);
 
};

function isValidBSTHelper(root, min, max) {
  //if we hit null then everything before must have been valid
  if (!root) return true;

  //for each test case one is for root.left another is for root.right
  if (root.val <= min || root.val >= max) return false;

  //when we input root.left, we want to make sure the left node value is not greater or equal to the the parent node
  //when we input root.right, we want to make sure the right value is not less than or equal to the min value
  return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}


//