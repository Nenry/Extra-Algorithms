// Write a function that takes in an array of positive integers and 
// returns an integer representing the maximum sum of non-adjacent elements in the array. 
// If a sum cannot be generated, the function should return 0.

//Sample input: [75, 105, 120, 75, 90, 135]
//Sample output: Sample output: 330 (75, 120, 135)



// Overall TimeComplexity is O(n)
// Space is O(n) since maxSums is created
// function maxSubsetSumNoAdjacent(arr) {
//   const maxSums = [];
//   maxSums.push(arr[0]);
//   maxSums[1] = Math.max(arr[0], arr[1]);
//   // console.log(maxSums);
//   for (let i = 2; i < arr.length; i++) {
//     let posSum = maxSums[i - 2] + arr[i];
//     let currSum = maxSums[i - 1];

//     maxSums[i] = Math.max(posSum, currSum);

//   }
//   return maxSums[arr.length - 1];
// }


//Time Complexity is O(n) since we ierate through the arr
// Space Complexity is O(1) since space is not dependent on input.

function maxSubsetSumNoAdjacent(arr) {
  let twoAwaySum = arr[0];
  let oneAwaySum = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let posSum = twoAwaySum + arr[i];
    let oldSum = oneAwaySum;
    if (posSum > oldSum) {
      twoAwaySum = oneAwaySum;
      oneAwaySum = posSum;
    } else {
      twoAwaySum = oneAwaySum;
    }

  }
  return oneAwaySum;
}





console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
console.log(maxSubsetSumNoAdjacent([5, 3, 19, 100]));

