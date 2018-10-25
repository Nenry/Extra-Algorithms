function budgetShopping(n, bundleQuantities, bundleCosts) {
  // Write your code here
  let maxBooks = 0;
  bundleQuantities.forEach((el, idx) => {
    let budget = n;
    let tempBooks = 0;
    while (budget >= bundleCosts[idx]) {
      budget -= bundleCosts[idx];
      tempBooks += el;
    }

    if (tempBooks > maxBooks) {
      maxBooks = tempBooks;
    }
  });
  console.log(maxBooks);
}


budgetShopping(50, [20, 19], [24, 20]);