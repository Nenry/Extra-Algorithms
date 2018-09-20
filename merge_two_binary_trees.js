// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree.The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.Otherwise, the NOT null node will be used as the node of new tree.

//probably while treenode.left || treenode.right
//if one is null and then replace. if both valid then combine 
var mergeTrees = function (t1, t2) {
  if (!t1) {
    return t2;
  }

  if(!t2) {
    return t1;
  }

  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;

};


const mergeTrees2 = (t1, t2) => {
  if (t1 === null) {
    return t2;
  }
  const stack = [];
  stack.push([t1, t2]);
  while (stack.length !== 0) {
    const t = stack.pop();
    if (t[0] === null || t[1] === null) {
      continue;
    }
    t[0].val += t[1].val;
    if (t[0].left === null) {
      //left null is now other trees left
      t[0].left = t[1].left;
    } else {
      stack.push([t[0].left, t[1].left]);
    }
    if (t[0].right === null) {
      t[0].right = t[1].right;
    } else {
      stack.push([t[0].right, t[1].right]);
    }
  }
  return t1;
};