function bSearch(target, array) {
  //we want to return the index
  //pivot middle since it is already sorted
  const middle = Math.floor(array.length / 2);
  const pivot = array[middle];

  if (array.length <= 0) {
    return null;
  }

  if (pivot === target) {
    return pivot;
  } else if (pivot > target) {
    const left = array.slice(0, middle);
    return bSearch(target, left);
  } else if (pivot < target) {
    const right = array.slice(middle + 1);
    const rightResults = bSearch(target, right);
    if (rightResults) {
      return pivot + 1 + rightResults;
    } else {
      return null;
    }
  }


}