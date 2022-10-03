import { assert } from 'console';

function binarySearch(arr: number[], n: number): number {
  let start = 0;
  let end = arr.length - 1;
  let halfway = Math.floor((start + end) / 2);

  while (start < end) {
    if (arr[start] === n) return start;
    if (arr[end] === n) return end;
    if (arr[halfway] === n) return halfway;

    if (arr[halfway] < n) start = halfway + 1;
    if (arr[halfway] > n) end = halfway - 1;
    halfway = Math.floor((start + end) / 2);
  }

  return -1;

  // while (start < end) {
  //   if (arr[start] === n) return start;
  //   if (arr[end] === n) return end;
  //   const halfway = Math.floor((end + start + 1) / 2);

  //   if (arr[halfway] === n) {
  //     return halfway;
  //   }

  //   if (arr[halfway] < n) {
  //     start = halfway + 1;
  //   }

  //   if (arr[halfway] > n) {
  //     end = halfway - 1;
  //   }
  // }

  // return -1;
}

assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6) === 5, '6');
assert(binarySearch([1, 2, 3, 4, 5], 2) === 1, '2'); // 1
assert(binarySearch([1, 2, 3, 4, 5], 3) === 2, '3'); // 2
assert(binarySearch([1, 2, 3, 4, 5], 5) === 4, '5'); // 4
assert(binarySearch([1, 2, 3, 4, 5], 6) === -1, '6'); // -1
assert(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  ) === 2,
  '10'
); // 2
assert(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  ) === 16,
  '95'
); // 16
assert(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  ) === -1,
  '100'
); // -1
