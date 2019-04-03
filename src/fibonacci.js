/**
 * Problem statement:
 * Write a function that given an integer n, returns the nth number
 * of the Fibonacci sequence.
 */

/**
 * The recursive - and less performant - version.
 * The reason for the performance is the growing call stack, which may even
 * cause a stack overflow.
 * Could be improved with memoization.
 */
const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));

/**
 * Iterative version, much more performant.
 */
const fibIterative = n => {
  let previous = 0,
    current = 1,
    temp;
  while (n-- > 0) {
    temp = previous;
    previous = current;
    current += temp;
  }
  return previous;
};

suite("fibonacci", () => {
  bench("recursive", () => {
    fib(10);
  });
  bench("iterative", () => {
    fibIterative(10);
  });
});
