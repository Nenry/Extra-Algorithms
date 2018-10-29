//given an array, select the values that are a power of 2
//input: [2, 4, 32, 25], output: [2, 4, 32], since each is 2^1, 2^2, 2^5, respectively

//some improvements, can memotized or create a store with already saved values for speed increase. Can do if store[power] else store[power] = (2 ** power) then read it

function powerOfTwo(numArr) {
    //worst case scenario, results could be big as numArr. so O(n) for space
    const results = [];

  //iterate through each num is O(n)
  for (let el of numArr) {
    //O(1)  for space
    let power = 0;
    // O(1) for space
    let val = (2 ** power);
    while (val <= el) {
      if (val === el) {
        results.push(el);
      }
      power++;
      val = (2 ** power);
    }

  }

  return results;
}

console.log(powerOfTwo([2, 69, 4, 32, 25]));
