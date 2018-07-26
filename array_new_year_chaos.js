// function minimumBribes(q) {
//   let correctQue = [];
//   for (let i = 1; i <= q; i++) {
//     correctQue.push(i);
//   }


//   let bribes = 0;

//   for (let j = q.length - 1; j >= 0; j--) {
//     if (j < q[j] - 1 && (q[j] - 1 - j) <= 2) {
//       bribes += (q[j] - 1 - j);
//     } else if (j < q[j] - 1 && (q[j] - 1 - j) > 2) {
//       // return console.log("Too chaotic");
//     }
//   }
//   return console.log(bribes);
//   // return bribes;

  
  
// }

// let bribes = 0;
// correctQue.forEach((el, idx) => {
  //   if ( correctQue[idx] === q[idx] ) {
    //     count += 1;
    //   }
    // });
    
    // if (count === q.length) {
      //   return 0;
      // }
      
      
    
function minimumBribes(q) {
  let swaps = 0;

     for (let j = q.length - 1; j >= 0; j--) {
          if (j < q[j] - 1 && (q[j] - 1 - j) > 2) {
             return console.log("Too chaotic");
           }
         }


  let sorted = false;
  while (!sorted) {
    sorted = true;
    q.forEach((el, idx) => {
      if (q[idx] > q[idx + 1]) {
        let swap = q[idx];
        q[idx] = q[idx + 1];
        q[idx + 1] = swap;
        sorted = false;
        swaps += 1;
      }
    });
  }

  return console.log(swaps);


}

      // console.log(minimumBribes([2, 1, 5, 3, 4]));
      // console.log(minimumBribes([2, 5, 1, 3, 4]));
      
      console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));

