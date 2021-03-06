// For this problem, your goal is to sort an array of 0, 1 and 2 's but you must do this in place, 
// in linear time and without any extra space (such as creating an extra array). 
// This is called the Dutch national flag sorting problem. 
// For example, if the input array is [2,0,0,1,2,1] 
// then your program should output [0,0,1,1,2,2] and the algorithm should run in O(n) time.


// (1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
//   (2) Create a i pointer that starts at the beginning of the array and iterates through each element.
//   (3) If the element at arr[i] is a 2, then swap arr[i] and arr[high] and decrease the high pointer by 1.
// (4) If the element at arr[i] is a 0, then swap arr[i] and arr[low] and increase the low and i pointers by 1.
// (5) If the element at arr[i] is a 1, don 't swap anything and just increase the i pointer by 1.



function dutchNationalFlag(arr) {
    let lowPointer = 0;
    let highPointer = arr.length - 1;
    let i = 0;
    
    while (i < highPointer) {
      if (arr[i] === 2) {
        let temp = arr[i];
        arr[i] = arr[highPointer];
        arr[highPointer] = temp;
        highPointer--;
      } else if (arr[i] === 0) {
        let temp = arr[i];
        arr[i] = arr[lowPointer];
        arr[lowPointer] = temp;
        lowPointer++;
        i++;
      } else if (arr[i] === 1) {
        i++;
      }
    }

    return arr;
}


//same thing but with odds and evens
// Input an array of integers. Output: rearrange the integers in place such that odd integers appear before even integers

function oddEvenFlag(arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;
  while (low < high) {
    if (arr[i] % 2 === 1) {
      let temp = arr[low];
      arr[low] = arr[i];
      arr[i] = temp;
      low++;
      i++;
    } else if (arr[i] % 2 === 0) {
      let temp = arr[high];
      arr[high] = arr[i];
      arr[i] = temp;
      high--;
    } 
  }

  return arr;
}
console.log(oddEvenFlag([1, 2, 3, 4, 5, 6, 7, 8]));







//sorted them using quicksort which is O(1) space and O(nlogn)
// function dutchNationalFlag(arr, startIdx = 0, length = arr.length) {

//   if (length <= 1) {
//     return arr;
//   }

//   let pivot = arr[startIdx];
//   let barrierIdx = startIdx;

//   for (let i = startIdx; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       barrierIdx++;

//       let swapEl = arr[barrierIdx];
//       arr[barrierIdx] = arr[i];
//       arr[i] = swapEl;


//     }
//   }

//   arr[startIdx] = arr[barrierIdx];
//   arr[barrierIdx] = pivot;

//   //qs left and qs right

//   dutchNationalFlag(arr, 0, barrierIdx);
//   dutchNationalFlag(arr, barrierIdx + 1, length - (barrierIdx + 1));


//   return arr;

// }

// console.log(dutchNationalFlag([2, 0, 0, 1, 2, 1]));
// console.log(dutchNationalFlag([2, 0, 0, 1, 2, 1]));
