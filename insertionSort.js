// iterate through i, if make sure from i to lower that theyre all 

function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j - 1] >  array[j]) {
      swap(j - 1, j, array);
      j--;
    }

  }
  return array;



}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

}

console.log(insertionSort([8,5,2,9,5,6,3]));