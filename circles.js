// function circle(radius, steps, centerX, centerY) {
//   var xValues = [centerX];
//   var yValues = [centerY];
//   for (var i = 0; i < steps; i++) {
//     xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
//     yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
//   }

//   console.log(xValues);
//   console.log(yValues);
  
  

// }


// console.log(circle(5, [1, 2, 3, 4], 0, 0));

//why is minDist === 1000?

const findNext = (r, possible) => {
  let minDist = 1000;
  let target = [];
  // console.log('possible', possible);
  possible.forEach(dest => {
    //radius/destRadius/r^2 = x^2 + y^2
    let destRadius = dest[0] * dest[0] + dest[1] * dest[1]
    //destRadius - r^2 less than 1000 (tolerance), find the delta between expect and calc radius
      // console.log(Math.abs(destRadius - r * r), minDist);
    if (Math.abs(destRadius - r * r) < minDist) {
        
      //why is minDist getting reassigned?
      target = dest;
      minDist = destRadius - r * r;
      console.log('minDist:', minDist);
    }
  });
  // console.log('target', target);
  return target;
};

const newCoords = point => {
  //bottom right quadrant
  //why is it these new directions
  let newDirection = [
    [1, 0],
    [0, -1],
    [1, -1]
  ]

  let newOnes = [];
  newDirection.forEach(coord => {
    newOnes.push([point[0] + coord[0], point[1] + coord[1]])
  });
  
  // console.log('newOnes', newOnes);
  return newOnes;
  
};


const circle = r => {
  let current = [0, r];
  let result = [];
  let final = [r, 0];
  //json stringify to compare arrays since you cannot do in javascript
  //until [0, 10] === [10, 0], this is when one whole quadrant is completed
  while (JSON.stringify(current) !== JSON.stringify(final)) {
    //possible coords
    destArray = newCoords(current)
    // console.log(destArray, 'destArray');
    let target = findNext(r, destArray);
    console.log(target, 'target');
    current = target
    result.push(current)
  }
  return result
}

let rad10 = circle(10)
// console.log(rad10); 
const draw = arr => {
  const matrix = new Array(111).fill(false).map(() => new Array(11).fill(false));
  // console.log(matrix);
  arr.forEach(coord => {
    matrix[coord[0]][coord[1]] = true
  })
  for (let j = 0; j < matrix.length; j++) {
    let str = ""
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[k][j] === true) str += "  X"
      else str += "   "
    }
    console.log(`${str}\n`)
  }
}

// draw(rad10)