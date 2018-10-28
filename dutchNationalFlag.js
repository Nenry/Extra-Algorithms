// For this problem, your goal is to sort an array of 0, 1 and 2 's but you must do this in place, 
// in linear time and without any extra space (such as creating an extra array). 
// This is called the Dutch national flag sorting problem. 
// For example, if the input array is [2,0,0,1,2,1] 
// then your program should output [0,0,1,1,2,2] and the algorithm should run in O(n) time.


// (1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
//   (2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
//   (3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
// (4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
// (5) If the element at arr[mid] is a 1, don 't swap anything and just increase the mid pointer by 1.



function dutchNationalFlag(arr) {
    let lowPointer = 0;
    let highPointer = arr.length - 1;
    let midPointer = 0;
    
    while (midPointer < highPointer) {
      if (arr[midPointer] === 2) {
        let temp = arr[midPointer];
        arr[midPointer] = arr[highPointer];
        arr[highPointer] = temp;
        highPointer--;
      } else if (arr[midPointer] === 0) {
        let temp = arr[midPointer];
        arr[midPointer] = arr[lowPointer];
        arr[lowPointer] = temp;
        lowPointer++;
        midPointer++;
      } else if (arr[midPointer] === 1) {
        midPointer++;
      }
    }

    return arr;
}






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

console.log(dutchNationalFlag([2, 0, 0, 1, 2, 1]));
console.log(dutchNationalFlag([2, 0, 0, 1, 2, 1]));
