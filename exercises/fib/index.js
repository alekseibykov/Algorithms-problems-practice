// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}


function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib (n - 2);
}

const fib = memoize(slowFib);


// function fib(n, prev = 0, number = 1) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return number;
//   }
//
//   number = prev + number;
//   prev = number - prev;
//
//   return fib(n - 1, prev, number);
// }


// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 1; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i]);
//   }
//
//   return arr[n];
// }

module.exports = fib;
