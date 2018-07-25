//find all the sums in the 2d array That is a hour glass matrix or I matrix
function hourglassSum(arr) {

  let maxSum = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= (arr[i].length - 3); j++) {
      let tempSum = 0;
      if (arr[i + 2] !== undefined) {
        // console.log(arr[i]);
        let top = arr[i].slice(j, (j + 3));
        // console.log(arr);
        // console.log(top);
        // console.log(j);
        // console.log(top);
        top = top.reduce((acc, el) => acc + el); //The top part of hour glass
        let middle = arr[i + 1][j+ 1];
        let bottom = arr[i + 2].slice(j, j + 3);

        bottom = bottom.reduce((acc, el) => acc + el);
        tempSum += top + middle + bottom;
        
        if (maxSum === null || tempSum > maxSum) {
          maxSum = tempSum;
        }
      }

    }
  }
  return maxSum;
}

console.log(hourglassSum([
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
]));

