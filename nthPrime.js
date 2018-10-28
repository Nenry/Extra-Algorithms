//make a function that will return nth prime number 
// a prime number is one that can only be divided by 1 and itself
// n will always be > 1

function nthPrime(n) {
  if (n === 1) return 2;

  let primeCounter = 1;
  let result = 2;

  while (primeCounter < n) {
    result++;
    if (isPrime(result)) {
      primeCounter++;
    }
  }
  
  return result;

}

function isPrime(num) {

  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i ++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;

}

console.log(nthPrime(2));
console.log(nthPrime(3));
console.log(nthPrime(4));
console.log(nthPrime(5));
console.log(nthPrime(6));
console.log(nthPrime(7));
