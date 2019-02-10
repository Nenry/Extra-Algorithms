// Find duplicates in an array without using extra space in O(n) time
// Can assume length of array will be 1 to N
// values in array will also be from to 0 to N


// Given an array of n elements which contains elements from 0 to n-1, 
// with any of these numbers appearing any number of times. 
// Find these repeating numbers in O(n) and using only constant memory space.
// For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer should be 1, 3 and 6.

// Safe to assume all positive?
// What if there are triplets? Just return that one number or only return if it has its own pair?
// Will they all be whole numbers?

//iterate through the array
// since we know max values is equivalent to length size 
// we can associate that index and value with some type of marker. negative 
// as we iterate through, we can make sure to take absolute value when we reach it
// while were checking if we index the value in that array and its negative then it means it already existed somewhere else
// 

function findDuplicate(arr) {
  const results = [];

  arr.forEach(num => {
    const adjustedIdx = num - 1;
    if (arr[adjustedIdx] < 0) {
      results.push(num); 
    } else {
      arr[adjustedIdx] = -arr[adjustedIdx];
    }
  });

  arr.forEach((num, idx) => {
    arr[idx] = Math.abs(arr[idx]);

  });
  
  return results;
}


console.log(findDuplicate([1, 2, 3, 1, 3, 6, 6]));