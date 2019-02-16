// make change with the lowest amount of coins needed
// Input: 7, [1, 5, 10]
// Output: 3, (2x1, 1x5)

// make an valueArray from 0 to tgt with values of Infinity
// we iterate through each value of denoms, for each denom. we iterate through the valueArray, where the index is equivalent to the value
// if denom < value(index), we subtract the amount, valueArray[value] = valueArray[amount - denom] < valueArray[value] ? valueArray[amount - denom] : valueArray[value]
// if valueArray[tgt] !== Infinity return valueArray[tgt]

function minMakeChange(tgt, denoms) {
  const coinsNeeded = new Array(tgt + 1).fill(Infinity);
  coinsNeeded[0] = 0;

  for(let denom of denoms) {
    for (let amount = 0; amount <= tgt; amount++) {
      if (denom <= amount) {
        coinsNeeded[amount] = Math.min(coinsNeeded[amount], coinsNeeded[amount - denom] + 1);
      }
    }

  }

  if (coinsNeeded[tgt] === Infinity) {
    return -1;
  } else {
    return coinsNeeded[tgt];
  }
 
}

// console.log(minMakeChange(7, [1, 5, 10]));
// console.log(minMakeChange(9, [3, 5]));
console.log(minMakeChange(135, [39, 45, 130, 40, 4, 1, 60, 75]));

