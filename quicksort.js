function qs(array, startIdx = 0, length = array.length) {
  if (length <= 1) {
    return array;
  }

  let pivot = array[startIdx];
  let barrierIdx = startIdx;

  for (let i = startIdx + 1; i <= length; i++) {
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