/*
 *  O(2^N):  Exponential time
 *
 *  An example is recursive algorithms.
 */

/*  Fibonacci numbers are integers which follow a specific sequence:  The next Fibonacci number
 *  is the sum of the previous two Fibonacci numbers.
 *
 *  We have a self-referential definition which means this problem is a great candidate for a recursive solution.
 *
 *  f(0) = 0
 *  f(1) = 1
 *  f(n) = f(n-2) + f(n-1)
 *  
 *  the function recurse at most n levels down and executes 2^n function calls.
 *
 *  Reference:  https://www.mathsisfun.com/numbers/fibonacci-sequence.html
 */

function fibonacci( n ) {
  counter++;

  // base cases
  if ( n === 0 ) {
    return 0;
  }
  if ( n === 1 ) {
    return 1;
  }

  // recursive step
  return fibonacci( n - 2) + fibonacci( n - 1 );
}

// Test
let counter = 0;
let n = 10;
console.log("The", n, "Fibonacci number is", fibonacci(n));
console.log("It takes", counter, "number of iterations to calculate the", n, "Fibonacci number.");
n = 42;
console.log("The", n, "Fibonacci number is", fibonacci(n));
console.log("It takes", counter, "number of iterations to calculate the", n, "Fibonacci number.");
