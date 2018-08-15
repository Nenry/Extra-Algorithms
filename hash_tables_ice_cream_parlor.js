function whatFlavors(cost, money) {
  const costMap = {};

  cost.forEach((price, idx) => {
    if (costMap[price] === undefined) {
      costMap[price] = [];
    }
    costMap[price].push(idx + 1);
  });
  // console.log(costMap);
  let sI;
  let cI;
  for (let i = 0; i < cost.length; i++) {
    let comp = money - cost[i];
    // console.log(cost[i]);
    // console.log(`comp:${comp}`);
    if (costMap[comp]) {
      for (let j = 0; j < costMap[comp].length; j++) {
        if (costMap[comp][j] !== i + 1) {
          sI = i+1;
          cI = costMap[comp][j];
          break;
        }
      }
    }
    if (cI) break;
  }

console.log(sI);
console.log(cI);

}
// whatFlavors([1, 4, 5, 3, 2], 4);

whatFlavors([4, 3, 2, 5, 7], 8);
