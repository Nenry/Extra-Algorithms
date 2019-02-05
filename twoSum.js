function twoNumberSum(array, targetSum) {
  const otherNums = {};
  const resultsArray = [];

  for (let num of array) {

    if (otherNums[targetSum - num]) {
      return ([num, targetSum - num]);
    } else {
      otherNums[num] = true;
    }
  }



  // return resultsArray.sort((a, b) => {
  //   return (a[0] - b[0]);
  // });
}


function improvedTwoSum(array, targetSum) {
  //sort the array
  // TIME COMPLEXITY IS  O(nlogn) because of sorting. While loop is n, bu
  array = array.sort((a, b) => a - b);
  
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (true) {
    let sum = array[leftPointer] + array[rightPointer];
    
    
    if (leftPointer === rightPointer) {
      return;
    } else if (sum === targetSum) {
      return ([array[leftPointer], array[rightPointer]]);
    } else if ( sum < targetSum) {
      leftPointer++;
    } else if (sum > targetSum) {
      rightPointer--;
    }

  }

  //if sum < targetSum then ++ leftPointer
  // if sum > targetSum then -- rightPointer 
  // if sum === target sum then return 
  // if rightPointer  === leftPointer then return 

}

console.log(twoNumberSum([4, 6, 1], 10));
console.log(improvedTwoSum([4, 6, 1], 10));
