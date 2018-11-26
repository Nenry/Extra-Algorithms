
// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees.Can you do this in place ?

//always square matrix?
//input is array of subarrays?
function rotateMatrix(arrMatrix) {
  let l = arrMatrix.length;
  for (let i = 0; i < l/2; i++) {
    let first = i;
    let last = l - 1 - i;

    for (let j = i; j < i; j++ ) {
      let offset = j - first;
      let top = arrMatrix[first][j];

      //  left to top;
      arrMatrix[first][j] = arrMatrix[last - offset][first];
      //bottom to left;
      arrMatrix[last - offset][first] = arrMatrix[last][last - offset];
      //right to bottom;
      arrMatrix[last][last - offset] = arrMatrix[j][last];
      //top to right;
      arrMatrix[j][last] = top;

    }

  }
 
}

let a = [[1, 2], [3, 4]];
rotateMatrix(a);

console.log(a);