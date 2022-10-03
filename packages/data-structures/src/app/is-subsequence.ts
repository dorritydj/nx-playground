// function that takes two strings and checks whether the characters in the first string form
// a subsequence of the characters in the second string.
// the function should check whether the characters in the first string appear somewhere in the second string, without changing their order

import { assert } from 'console';

function isSubsequence(subsequence, base): boolean {
  let start = 0;
  let next = 0;

  if (!subsequence) return true;

  while (next < base.length) {
    if (base[next] === subsequence[start]) start++;
    if (start === subsequence.length) return true;
    next++;
  }

  return false;
}

assert(isSubsequence('hello', 'hello world') === true, 'hello'); // true
assert(isSubsequence('sing', 'sting') === true, 'sing'); // true
assert(isSubsequence('abc', 'abracadabra') === true, 'abc'); // true
assert(isSubsequence('abc', 'acb') === false, 'abc acb'); // false (order matters)
