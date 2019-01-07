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


console.log(twoNumberSum([4, 6, 1], 10));
