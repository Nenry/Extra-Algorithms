//x2 + y2 = r2
const results = [];
const circle = r => {
  
};

function solveIt(r) {
  const results = [];

  for (let x = 1; x <= r; x++) {
    let y = Math.round(Math.sqrt(r * r - x * x));
    results.push([x, y]);
  }

  return results;
}


console.log(solveIt(10));
