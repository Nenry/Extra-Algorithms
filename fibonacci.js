//find nth fibonacci 
//fibonacci is the last two numbers added together
// [0, 1, 1, 2]
//f(0) = 0, f(1) = 1, f(2) = 1

function fib(n) {
  if (n === 0 ) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  
  return (fib(n - 1) + fib(n - 2));

}

console.log(fib(5));