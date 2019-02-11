function qs(array, startIdx = 0, length = array.length) {
  if (length <= 1) {
    return array;
  }

  let pivot = array[startIdx];
  let barrierIdx = startIdx;

  for (let i = startIdx + 1; i <= length + startIdx; i++) {
    if (pivot > array[i]) {
      barrierIdx++;
      let swap1 = array[barrierIdx];
      array[barrierIdx] = array[i];
      array[i] = swap1;
    }
  }

  array[startIdx] = array[barrierIdx];
  array[barrierIdx] = pivot;


  let left = barrierIdx - startIdx;
  let right = length - (left + 1);
  qs(array, startIdx, left); //left
  qs(array, barrierIdx + 1, right); //right

  return array;

}


// console.log(qs([2, 6, 5, 8, 1, 67, 0, 3, 23]));

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let left = arr.slice(1, arr.length).filter((el) => el < pivot);
  let right = arr.slice(1, arr.length).filter((el) => el > pivot);
  
  let sorted = quickSort(left).concat(pivot).concat(quickSort(right));
  
  return sorted;
  
  
}

console.log(quickSort([2, 6, 5, 8, 1, 67, 0, 3, 23]));

function inPlaceQS(arr, startIdx = 0, length = arr.length) {
  if (length < 2) {
    return arr; 
  }

  let pivot = arr[startIdx];
  let barrier = startIdx;
  for (let i = startIdx + 1; i <= length + startIdx; i++) {
    if (arr[i] < pivot) {
      barrier++;
      let temp = arr[barrier];
      arr[barrier] = arr[i];
      arr[i] = temp;
    }
  }
  
  arr[startIdx] = arr[barrier];
  arr[barrier] = pivot;
  
  let leftLength = barrier - startIdx;
  let rightLength = length - (leftLength + 1);
  inPlaceQS(arr, 0, leftLength);
  inPlaceQS(arr, barrier + 1, rightLength);
 
  return arr;
}

console.log(inPlaceQS([2, 6, 5, 8, 1, 67, 0, 3, 23]));

