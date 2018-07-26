function minimumSwaps(arr) { 
  let swaps = 0;
  let sort_arr = arr.slice(0).sort();
  for(let i=0; i < arr.length; i++) {
    if (arr[i] !== sort_arr[i]) {
      let swap_idx = arr.indexOf(sort_arr[i]);
      let swap = arr[swap_idx];
      arr[swap_idx] = arr[i];
      arr[i] = swap;
      swaps += 1;
    }


  return swaps;
}
//   arr.forEach((el, idx) => {
//     if (el !== idx + 1 ) {
//       let swap_idx = arr.indexOf(idx + 1);
//       if (swap_idx !== -1) {
//         let swap = arr[swap_idx];
//         arr[swap_idx] = arr[idx];
//         arr[idx] = swap;
//         swaps += 1;
//       }
//     }

//   });
//   return swaps;
// }
console.log(minimumSwaps([4, 3, 1, 2]));


