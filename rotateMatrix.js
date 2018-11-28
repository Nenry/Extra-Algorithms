
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees.Can you do this in place ?

//always square matrix?
//input is array of subarrays?
function rotateMatrix(arrMatrix) {
  let l = arrMatrix.length;
  //iterate through half of row 
  for (let layer = 0; layer < l/2; layer++) {
    // we want to rotate by outer layers towards inside layer (peeling an onion)
    //constantly rotating outer shell
    //then constantly going towards the middle like peeling an onion
    //that is the reason for l/2 or length/2, it is done by the time is in the middle
    //0th index becomes last index in that row, that is what last is for
    
    let last = l - 1 - layer; //last index in that layer

    //j is the individual element
    for (let j = layer; j < last; j++ ) {
      //iterate through each column in that row 
      let offset = j - layer;
      let top = arrMatrix[layer][j];
      
      //  left to top;
      arrMatrix[layer][j] = arrMatrix[last - offset][layer];

      //bottom to left;
      arrMatrix[last - offset][layer] = arrMatrix[last][last - offset];
      //right to bottom;
      arrMatrix[last][last - offset] = arrMatrix[j][last];
      //top to right;
      arrMatrix[j][last] = top;

      console.log('layer', layer, 'j:', j, 'last', last, 'offset', offset);
    }

  }
//  console.log(arrMatrix);
}
let a = [[1, 2], [3, 4]];
let b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let c = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

rotateMatrix(a);
// rotateMatrix(b);
// rotateMatrix(c);

console.log(a);
// console.log(b);
// console.log(c);



function otherRotateMatrix(matrixArr) {
  let l = matrixArr.length;
  let newArr = Array(l).fill(Array(l));
  //pointer problem. need to deep dup
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {

      console.log('i', i, 'j', j);
      
      newArr[j][l - 1 - i] = matrixArr[i][j];
      console.log(newArr);
    }
  }
  
  console.log(newArr);
}

let d = [[1, 2], [3, 4]];
let e = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let f = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

// otherRotateMatrix(d);