//maximize toys, prices is an array of toys with prices, k is how much money there is
//goal is to buy as many toys are you can. return amount of max toys
function maximumToys(prices, k) {
  prices = prices.sort(function (a, b) {
    return a - b;
  });
  
  let money = k;
  let toys = 0;
  prices.forEach((price) => {
    if (price <= money) {
      money -= price;
      toys += 1; 
    }
  });
  return toys;
}
