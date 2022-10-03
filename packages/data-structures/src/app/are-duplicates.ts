// accepts a variable number of arguments and checks whether there are any duplicates
// frequency or multiple pointers

import { assert } from 'console';

function areThereDuplicates(...args): boolean {
  const collection = {};
  for (const val in args) {
    collection[args[val]] = (collection[args[val]] || 0) + 1;
  }
  for (const key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

assert(areThereDuplicates(1, 2, 3) === false, 'no dups'); // false
assert(areThereDuplicates(1, 2, 2) === true, 'yes dups'); // true
assert(areThereDuplicates('a', 'b', 'c', 'a') === true, 'dupes but chars'); // true
