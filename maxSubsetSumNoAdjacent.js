// Write a function that takes in an array of positive integers and 
// returns an integer representing the maximum sum of non-adjacent elements in the array. 
// If a sum cannot be generated, the function should return 0.

//Sample input: [75, 105, 120, 75, 90, 135]
//Sample output: Sample output: 330 (75, 120, 135)



// Overall TimeComplexity is O(n)
// Space is O(n) since maxSums is created
// function maxSubsetSumNoAdjacent(array) {
//   if (array.length < 1) {
//     return 0;
//   } else if (array.length === 1) {
//     return array[0];
//   }

//   const maxSums = [array[0], array[1]];
   
//         i= 2 i < 6
//   for (let i = 2; i < array.length; i++) {
//     let oldMax = maxSums[i - 1];
//     let posMax = maxSums[i - 2] + array[i];

//     let newMax = Math.max(oldMax, posMax);

//     maxSums.push(newMax);

//   }

//   console.log(maxSums);

//   return maxSums[array.length - 1];


// }



function maxSubsetSumNoAdjacent(arr) {
  let secondToLast = arr[0]; 
  let lastSum = arr[1];
  
  //  O(1)

  for (let i = 2; i < arr.length; i++) {
    let tempSum = secondToLast + arr[i]; 
    if (tempSum > lastSum) {
      secondToLast = lastSum;
      lastSum = tempSum;
    } else {
      secondToLast = lastSum;
    }
  }

  return lastSum;

}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));

