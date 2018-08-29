// var isValidBST = function (root) {
//   //bst is valid if root.val >= root.left.val || root.left === undefined
//   //bst is valid if root.val < root.right.val || root.right === undefined

//   //possible base case
//   //if root.left 



//   //return false if the conditions arent met
//   //keep doing recursion or while loop while root is still there until root.left is null or root.right is null


//   if (root.left.val > root.val) {
//     return false;
//   } else if (root.left === null) {
//     return true;
//   }

//   if (root.right.val <= root.val) {
//     return false;
//   } else if (root.right === null) {
//     return true;
//   }

//   const left = isValidBST(root.left);
//   const right = isValidBST(root.right);

//   if (!left || !right) {
//     return false;
//   } else {
//     return true;
//   }

// }