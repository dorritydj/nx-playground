import { merge } from './merged-arrays';

function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  const halfway = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, halfway));
  const right = mergeSort(arr.slice(halfway));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
