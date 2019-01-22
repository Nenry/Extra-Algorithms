
//find nth fibonacci 
//fibonacci is the last two numbers added together
// [0, 1, 1, 2]
//f(0) = 0, f(1) = 1, f(2) = 1
// are there any constraints on n? For sure all integers?
// what is the range?
// base cases

//time complexity is O(2^n)
//space complexity is O(n) since a recursive call stack needs to have n times
function fib(n) { 
  if (n === 0 ) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  
  return (fib(n - 1) + fib(n - 2));

}

// fib using memomization

//time complexity is O(n) since all fibonnaci will be calculated down from n to 1 ONCE. The other calls of recursion fib will have O(1) access due to memoization
// space will be O(n) due to the recursive calls
function getNthFib(n, memoize = {1: 0, 2: 1}) {
    //make sure to do n in memoize because if memoize[1] === 0 === false
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib((n - 1), memoize) + getNthFib((n - 2), memoize);
    return memoize[n];
  }
}

//fib with constant space

function getNthFib(n) {


}