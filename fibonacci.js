//find nth fibonacci 
//fibonacci is the last two numbers added together
// [0, 1, 1, 2]
//f(0) = 0, f(1) = 1, f(2) = 1
// are there any constraints on n? For sure all integers?
// what is the range?
// base cases

function fib(n) {
  if (n === 0 ) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  
  return (fib(n - 1) + fib(n - 2));

}

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));