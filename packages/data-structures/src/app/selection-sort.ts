import { swap } from './swap';

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j, smallest);
      console.log(arr[i], arr[j]);
      if (arr[j] < arr[smallest]) smallest = j;
    }

    console.log(arr[smallest], arr[i]);
    if (smallest !== i) swap(arr, i, smallest);
    console.log(arr);
    console.log('#');
  }

  return arr;
}

console.log(selectionSort([4, 3, 5, 1, 2]));
