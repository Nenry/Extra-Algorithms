function invertIt(num) {
  if (num === 1) {
    return 0;
  } else {
    return 1;
  }
}

// var flipAndInvertImage = function (A) {
//   //iterate through each subarray, reverse it, could probably do iteration by half for reversing
//   // if === 1 then make it 0, else make it 1
//   //could probably reassign as it is reversing
  
//   A.forEach(subA => {
//     for(let i = 0; i < subA.length/2; i++) {
//       const temp = subA[i];
//       subA[i] = subA[subA.length - 1 - i];
//       subA[subA.length - 1 - i] = temp;
//     }
    
//     subA.forEach((num, idx) => {
//       subA[idx] = invertIt(num);
//     });
    
//   });
//   return A;
// };


var flipAndInvertImage = function(A) {
  let result = [];
  for (line of A) {
    const flipped = line.reverse();
    const inversed = flipped.map(bit => bit ? 0 : 1);
    result.push(inversed);
  }
  return result;
}


console.log(flipAndInvertImage([[1, 1, 0], [1,0,1], [0,0,0]]));
