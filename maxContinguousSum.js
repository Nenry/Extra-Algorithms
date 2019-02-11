// find the max sum of subarrays elements are contiguous.

function maxContinguousSum(arr) {
  let maxSum = arr[0];
  let currSum = maxSum;

  for(let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(currSum, maxSum);

  }

  return maxSum;


}

const a = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

console.log(maxContinguousSum(a));