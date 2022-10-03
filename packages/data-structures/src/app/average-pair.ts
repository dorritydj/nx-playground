// given a sorted array of integers, and a target average, determine if there is a pair
// of values in the array where the average of the pair equals the target average
// there may be more than one pair that matches the average target

import { assert } from 'console';

function averagePair(arr: number[], targetAvg: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === targetAvg) return true;
    else if (avg < targetAvg) start++;
    else end--;
  }
  return false;
}

assert(averagePair([1, 2, 3], 2.5) === true); // true
assert(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true); // true
assert(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false); // false
assert(averagePair([], 4) === false); // false
