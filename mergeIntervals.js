// Given a collection of intervals, merge all overlapping intervals.
// Input: [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18]
// ]
// Output: [
//   [1, 6],
//   [8, 10],
//   [15, 18]
// ]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].

// Input: [
//   [1, 4],
//   [4, 5]
// ]
// Output: [
//   [1, 5]
// ]
// Explanation: Intervals[1, 4] and[4, 5] are considerred overlapping.


// 1. We treat the meeting with earlier start time as "first,"
// and the other as "second."
// 2. If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two
// meetings into one time range.The resulting time range 's start time is the first meeting's start, and its end time is the later of the two meetings ' end times.
// 3. Else, we leave them separate.

//[[1, 3], [2, 6], [8, 10], [15, 18]] => [[1, 6], [8, 10], [15, 18]]
//[ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ] => [ [0, 1], [3, 8], [9, 12] ]

function mergeTimes(arr) {
  let intervals = arr.sort((a, b) => a[0] - b[0]);
  
  const results = [];
  results.push(intervals[0]);
  // console.log('first', first);

  for (let interval of intervals) {
    const lastIntIdx = results.length - 1;
    if (results[lastIntIdx][1] >= interval[0]) {
      results[lastIntIdx][1] = Math.max(results[lastIntIdx][1], interval[1]);
    } else {
      results.push(interval);
    }

  }




  // for (let interval of intervals) {
  //   // console.log(interval);
  //   if (first[1] >= interval[0]) {
  //     // console.log(first[1], interval[0]);

  //     first = [first[0], Math.max(first[1], interval[1])];
  //     // console.log('first', first);
  //   } else if (first.length > 0) {
  //     results.push(first);
  //     first = interval;
  //   } else {
  //     console.log(interval);
  //     first = interval;
  //   }


  // }

  return results;


}


console.log(mergeTimes([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]));

console.log(mergeTimes([
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10]
]));
