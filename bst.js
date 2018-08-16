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


console.log(bst([1, 2, 3, 6, 10], 10));


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


// console.log([1, 2, 3, 6, 10].myBsearch(10));