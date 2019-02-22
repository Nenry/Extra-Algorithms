// Write a function that takes in an array of unique integers and returns its powerset. 
// The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1,2] is [[], [1], [2], [1,2]]. 
// Note that the sets in the powerset do not need to be in any particular order.
// Sample input: [1, 2, 3]
// Sample output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

//iterative
// big O(2^n * n) for time and space, 2 results are made with every iteration, then two on top of those iterations
// space is the same
// function powerSets(numArr) {
//   const sets = [[]];

//   for (let num of numArr) {
//     const length = sets.length;
//     // console.log('hi');
//     for (let i = 0; i < length; i++) {
//       // console.log('hello');
//       let currSet = sets[i];
//       sets.push(currSet.concat(num));
//     }

//   }

//   return sets;


// }

//recursive

function powerSets(numArr, idx = null) {
  //base case, needs to return [[]]

  if (idx === null) {
    idx = numArr.length - 1;
  } 

  if (idx < 0) {
    return [[]];
  }

  const num = numArr[idx];
  const subsets = powerSets(numArr, idx - 1);
  const length = subsets.length;

  for (let i = 0; i < length; i++) {
    let currSet = subsets[i];
    subsets.push(currSet.concat(num));
  }


  return subsets;

}



console.log(powerSets([1, 2, 3]));