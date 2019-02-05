//input ([12, 3, 1, 2, -6, 5, -8, 6], 0)
// output [[-8, 2, 6], [-8. 3. 5], [-6, 1, 5]]

//Time Complexity : O(n2), nlogn + n2, nlogn is small time compared to n2
// as we iterate through the array, we will iterating through (n - 1) nested loop inside while
function threeNumbersum(array, targetSum) {
  array = array.sort((a, b) => a-b);
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currSum = array[i] + array[left] + array[right];

      if (currSum === targetSum) {
        //i, left, right are already ordered as you iterate
        results.push([array[i], array[left], array[right]]);
        // we need to see if there are any other possible combinations
        // if we increase left, we will know that it will be over the target sum then eventually go back into the loop
        // then decreasing right. Might as well do both
        left++;
        right--;
      } else if ( currSum < targetSum) {
        // since we are in a sorted array, if we need the currSum to get bigger and closer to target sum
        // we can increase left since numbers will get bigger. Vice Versa for decreasing right pointer
        left++;
      } else if (currSum > targetSum) {
        right--;
      }

    }

  }

  return results;
  
}

console.log(threeNumbersum([12, 3, 1, 2, -6, 5, -8, 6], 0));
