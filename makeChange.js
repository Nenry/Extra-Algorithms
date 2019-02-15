// find the amount of different combinations to make change for a certain amount
//input will be target amount and possible currency
//Example 
// Input: (10, [1, 5, 10, 25])
// Output: 4 because (1X10, 5X2, 5X1+1X5, 10)

//Edge cases, always positive? tgt too?
// Whole numbers?
// will array and tgt 
// Time complexity?
// Space complexity

//make an value array with 0 to n+1, where n is target
//iterate through value array, using the index as values
// thinking like dynamic program, we need to build off of the last value
// we can use base case for value(index) 0 is 1. Since the only way to get that is to not use any of them. That is one way
// since every denomination we use, we should subtract from that amount, 
// at that valueArray[value] += valueArray[value - denom], it will key into that array where we could use the previous counts, this will by the 'dynamic part'
//when value/index === 1, valueArray[1] += valueArray[1 - 1], value[0] is 1, which is true
// since there is only one way to get a value of 1 with coin 1, since we evaluate every combination at each value, we will be able to the previous values

function makeChange(tgt, denoms) {
  const combCount = [];
  for (let value = 0; value <= tgt; value++) {
    if (value === 0) {
      combCount.push(1);
    } else {
      combCount.push(0);
    }
  }

  for (let denom of denoms) {
    for(let amount = 1; amount <= tgt; amount ++) {
      if (denom <= amount) {
        combCount[amount] += combCount[amount - denom];
      }
    }
  }


return combCount[tgt];
}

console.log(makeChange(10, [1, 5, 10, 25]));
