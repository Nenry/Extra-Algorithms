var isValidBST = function (root) {
  
  return isValidBSTHelper(root, -Infinity, Infinity);
 
};

function isValidBSTHelper(root, min, max) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}