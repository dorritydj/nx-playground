// function called same, accepts 2 arrays
// should return true if every value in the array has it's corresponding value squared in the second array.
// frequency of values must be the same

// same([1,2,3], [4,1,9]) true
// same([1,2,3], [1,9]) false
// same([1,2,1], [4,4,1]) false

// first iteration, naive solutions
// O(n^2) - indexOf is O(n) inside a loop that's also O(n)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// frequency counter
// O(n) because it only ever loops over each array once, there's no nesting or anything else going on
// saves the values from array 1 and counts how many there are in an object
// does the same with the second array
// single loop now handles the logic of checking squared and existence/frequency
// relies on object accessing to not bloat the complexity anymore
function same2(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
