//You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

// For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: , , and.

function pairs(k, arr) {
  let values = new Set();
  let combos = 0;
  arr.forEach(num => values.add(num));

  arr.forEach(num => {
    let comp = num - k;
    if (values.has(comp)) {
      combos++;
    }
  });

  return combos;
}