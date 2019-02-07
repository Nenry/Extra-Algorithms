// input = [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
// ouput = [28, 26]


// Time complexity analysis is (nlogn + mlogm + n + m). n and m are omitted since they are insignicant compared to log.
// nlogn is sorting of arr1, mlogm is sorting of arr2. It could be reduced to nlogn if we know they will both be the same size.
// n and m are 
// Overall Time complexity is (nlogn + mlogm) n and m are omitted

// Space complexity analysis (bestDiff is always one number, best combo will always be max length of 2, left and right wil be one number. 
// Space values are known and do not grow with array size. 
// Since values are constant and known. 
// Space complexity is O(1)
function smallestDifference(arr1, arr2) {
  let bestDiff = Infinity;
  let bestCombo = [];

  let left = 0;
  let right = 0;
  arr1 = arr1.sort((a, b) => (a-b));
  arr2 = arr2.sort((a, b) => (a-b));

  while (left < arr1.length && right < arr2.length ) {
    let currDiff = arr1[left] - arr2[right];

    if (Math.abs(currDiff) < Math.abs(bestDiff)) {
      bestDiff = currDiff;
      bestCombo = [arr1[left], arr2[right]];
    }

    if (currDiff === 0) {
      return [arr1[left], arr2[right]];
    } else if (currDiff > 0) {
      right++;
    } else if (currDiff < 0) {
      left++;
    }
  

  }

  return bestCombo;

}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 28, 134, 135, 15, 17]));

