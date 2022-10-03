// function that accepts a sorted array and counts the unique values in the array
// can be negative numbers, but will always be sorted;

import { assert } from 'console';

// O(n)
function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;

  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  return Object.keys(freq).length;
}

assert(countUniqueValues([1, 1, 1, 1, 1, 2]) === 2, '2');
assert(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7, '7');
assert(countUniqueValues([]) === 0, '0');
assert(countUniqueValues([-2, -1, -1, 0, 1]) === 4, '4');
