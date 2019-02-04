// Take an array of integers and return the largest difference between any two elements 
// but only where the first of the two elements is less than the second
// [7, 8, 1, 5] => 5 - 1 => 4
// [1, 2, 3, 4] => 4 - 1 => 3


//brute force time complexity of O(n2)
// function maxDiff(array) {
//   let sum = -Infinity;

//   for(let i = 0; i < array.length - 1; i++ ) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] < array[j]) {

//         let tempDiff1 = array[i] - array[j];
//         let tempDiff2 = array[j] - array[i];
//         // console.log(i, j, tempDiff1, tempDiff2);
        
//         if(tempDiff1 > tempDiff2) {
//           if (tempDiff1 > sum) {
//             sum = tempDiff1;
//           }
//         } else {
//           if (tempDiff2 > sum) {
//             sum = tempDiff2;
//           }
//         }
//       }
//     }
//   }

//   return sum;

// }


// O(n) time complexity
// Space is constant
function maxDiff(array) {
  if (array.length < 2) {
    return -1;
  }

  let min = array[0];
  let ans = array[1] - min;

  for (let i = 2; i < array.length; i++) {
    let tempDiff = array[i] - min;
    if (tempDiff > ans) {
      ans = tempDiff;
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  return ans;


}

// console.assert((maxDiff([1,2,3,4]) === 3), Input [1,2,3,4]: Expected 3 but got ${maxDiff([1,2,3,4])});
// console.assert((maxDiff([7,8,1,5]) === 4), Input [7,8,1,5]: Expected 4 but got ${maxDiff([7,8,1,5])})

console.log(maxDiff([1,2,3,4]));
console.log(maxDiff([7,8,1,5]));
console.log(maxDiff([7,8,1,5,10]));
console.log(maxDiff([7,8,1,5,10, -1]));
console.log(maxDiff([7,8,1,5,10, -1, 20]));
console.log(maxDiff([1, 2, 90, 10, 110]));
console.log(maxDiff([2, 3, 10, 6, 4, 8, 1]));
console.log(maxDiff([7, 9, 5, 6, 3, 2]));