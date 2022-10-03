import { assert } from 'console';

function minSubArrayLen(arr: number[], targetSum: number): number {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (total < targetSum && end < arr.length) {
      // increases the size of the subset
      // updates the total with the new value added
      total += arr[end];
      end++;
    } else if (total >= targetSum) {
      // updates the min length using the internal indices
      // removes the first value of the subset from the total
      // shrinks the size of the subset
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

assert(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2, '2'); // 2 -> because [4,3] is the smallest subarray
assert(minSubArrayLen([2, 1, 6, 5, 4], 9) === 2, '2'); // 2 -> because [5,4] is the smallest subarray
assert(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1, '1'); // 1 -> because [62] is greater than 52
assert(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3, '3'); // 3
assert(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5, '5'); // 5
assert(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2, '2'); // 2
assert(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0, '0'); // 0
