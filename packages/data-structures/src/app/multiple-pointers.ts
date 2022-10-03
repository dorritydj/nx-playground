// create values that correspond to an index or position and move towards
//  the beginning, end, or middle based on a certain condition
// very efficient for solving problems with minimal space complexity as well

import { assert } from 'console';

// some linear structure, and two pointers are locations in that structure

// accepts a sorted array of integers. should find the first pair
// where the sum is 0. return an array that includes both values that
// sum to zero or undefined if a pair does not exist

// O(n^2)
function sumZero_naive(arr): number[] | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// O(n)
function sumZero_mature(arr) {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    const evaled = arr[start] + arr[end];
    if (evaled === 0) {
      return [arr[start], arr[end]];
    } else if (evaled > 0) {
      end--;
    } else {
      start++;
    }
  }
}

assert(sumZero_mature([-3, -2, -1, 0, 1, 2, 3]), 'should pass, both ends'); // [-3, 3]
assert(sumZero_mature([-1, 0, 1, 2]), 'should pass, not both ends'); // [-1, 1]
assert(sumZero_mature([1, 2, 3]), 'should fail with undefined'); // undefined
