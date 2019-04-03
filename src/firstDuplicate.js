const utils = require("./_utils");

/**
 * Problem statement:
 * Given an array a that contains only numbers in the range from 1 to
 * a.length, find the first duplicate number for which the second
 * occurrence has the minimal index. Otherwise, return -1.
 * The largest number in the array will not be larger than the array length.
 */

/**
 * Super simple.
 * Creates an array to store duplicates, fills it and
 * returns if the current number in loop is contained in it.
 */
const withArray = a => {
  const duplicates = [];
  for (num of a)
    if (duplicates.indexOf(num) > -1) {
      return num;
    } else {
      duplicates.push(num);
    }
  return -1;
};

/**
 * As in array version, but using the Set object.
 * More readable and with similar performance as the one above.
 */
const withSet = a => {
  const duplicates = new Set();
  for (num of a)
    if (duplicates.has(num)) {
      return num;
    } else {
      duplicates.add(num);
    }
  return -1;
};

/**
 * What happens here is pretty cryptic at first glance, but it goes like this:
 * The function iterates through the array and for each number n "marks" the number
 * at index n by changing it's sign to negative. Why? Because when it encounters
 * a duplicate, it will try to "mark" a number that was already "marked". And
 * this is the duplicate to return.
 *
 * Most performant, as it does not use any additional data structure
 * and instead modifies the input array in-place.
 */
const withSmartAlgorithm = a => {
  for (let i = 0; i < a.length; i++) {
    const current = a[i];
    const indexToMark = Math.abs(current) - 1;
    if (a[indexToMark] < 0) {
      return Math.abs(current);
    }
    a[indexToMark] = -a[indexToMark];
  }
  return -1;
};

const input = [...utils.makeArray(50), ...utils.makeArray(50)];

suite("firstDuplicate", () => {
  bench("using array", () => {
    withArray(input);
  });
  bench("using set", () => {
    withSet(input);
  });
  bench("using algortihm", () => {
    withSmartAlgorithm(input);
  });
});
