function bst(array, tgt) {
  if (array.length === 0 ) return null;

  let pivot = Math.floor(array.length/2);
  if (array[pivot] === tgt) {
    return pivot;
  } else if (array[pivot] > tgt) {
    return bst(array.slice(0, pivot));
  } else {
    const foundIdx = bst(array.slice(pivot + 1, array.length), tgt);
    return foundIdx ? pivot + 1 + foundIdx : foundIdx;
  }

}


// console.log(bst([1, 2, 3, 6, 10], 10));


Array.prototype.myBsearch = function (target, func) {
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0, mid).myBsearch(target);
  } else {
    const result = this.slice(mid + 1, this.length).myBsearch(target);
    return result === null ? result : mid + 1 + result;
  }
};


// Time complexity of O(logn)
// Space Complexity of O(n) due it n depth or stakcs
// function binarySearch(array, target) {
//   // Write your code here.
//   // Have a mid point, if mid point return idx 
//   let midIdx = Math.floor(array.length / 2);
  
//   console.log(array, array[midIdx]);
//   if (array[midIdx] === target) {
//     return midIdx;
//   } else if (array[midIdx] > target) {
//     let leftOfMid = array.slice(0, midIdx);
//     return binarySearch(leftOfMid, target);
//   } else if (array[midIdx] < target) {
//     let rightofMid = array.slice(midIdx + 1, array.length);
//     let foundIdx = binarySearch(rightofMid, target);
//     console.log('found', foundIdx);
//     if (foundIdx === -1) {
//       return -1;
//     } else {
//       return foundIdx + midIdx + 1;
//     }
//   } else {
//     return -1;
//   }

// }

// Time complexity is logn. space complexity is O(1) 
function binarySearch(array, tgt, left = 0, right = array.length) {
  
  while (left <= right) {
    let mid = Math.floor((left + right)/2);
    if (array[mid] === tgt) {
      return mid;
    } else if (tgt < array[mid]) {
      right = mid - 1;
    } else if (tgt > array[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}


console.log(binarySearch([1, 5, 23, 111], 111));
// console.log(binarySearch([1, 5, 23, 111], 35));

// console.log([1, 2, 3, 6, 10].myBsearch(10));