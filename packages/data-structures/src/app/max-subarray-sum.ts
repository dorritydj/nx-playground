import { assert } from 'console';

function maxSubarraySum(arr: number[], size): number {
  // needs to be consecutive subarray, not broken
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < size) return null;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = size; i < arr.length; i++) {
    tempSum = tempSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

assert(maxSubarraySum([100, 200, 300, 400], 2) === 700, '700'); // 700
assert(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39, '39'); // 39
assert(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5, '5'); // 5
assert(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5, '5'); // 5
assert(maxSubarraySum([2, 3], 3) === null, 'null'); // null
