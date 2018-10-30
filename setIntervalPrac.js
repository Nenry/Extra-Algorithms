const pos = [[0,1], [2, 3], [4, 5], [10, 1]];
//mutating pos
function readCoords(coords) {

  if (pos.length > 0) {

    const nextCoord = coords.shift();
    console.log(nextCoord);
  } else {
    clearInterval(startInt);
  }
    
}

var startInt = setInterval(() => readCoords(pos), 1000);

//to not mutate pos
var i = 0;
function readCoords(coords) {
    if (i < coords.length) {
      const nextCoord = coords[i];
      console.log(nextCoord, 'coords', coords);
      i++;
    } else {
      clearInterval(startInt);
    }
}


