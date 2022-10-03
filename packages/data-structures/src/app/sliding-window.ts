// create a window which can either be an array or number from one position to another
// window either increases or closes (and a new one created)
// useful for keeping track of a subset of data in an array/string

// function maxSubarraySum
// accepts an array of integers and a number n
// the function should calculate the maximum sum of n consecutive elements in the array

import { assert } from 'console';

// O(n^2)
function maxSubarraySum_naive(arr: number[], n: number): number | null {
  if (n > arr.length) return null;

  let max = -Infinity;
  let temp;
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

function maxSubarraySum(arr: number[], n: number): number | null {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

assert(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10, '10');
assert(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17, '17');
assert(maxSubarraySum([4, 2, 1, 6], 1) === 6, '6');
assert(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13, '13');
assert(maxSubarraySum([], 4) === null, 'null');
