// given two strings, function to determine if second is anagram of the first
// an anagram is a word, phrase, or name formed by rearranging the letters of
// another, such as cinema and iceman

import { assert } from 'console';

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1counter = {};
  const str2counter = {};

  const splitstr1 = str1.split('');
  const splitstr2 = str2.split('');

  for (const val in splitstr1) {
    const key = splitstr1[val];
    str1counter[key] = (str1counter[key] || 0) + 1;
  }
  for (const val in splitstr2) {
    const key = splitstr2[val];
    str2counter[key] = (str2counter[key] || 0) + 1;
  }

  for (const key in str1counter) {
    if (!(key in str2counter)) {
      return false;
    }

    if (str2counter[key] !== str1counter[key]) {
      return false;
    }
  }

  return true;
}

assert(validAnagram('', ''), 'empty strings'); // true
assert(validAnagram('aaz', 'zza'), 'wrong frequency'); // false
assert(validAnagram('anagram', 'nagaram'), 'valid'); // true
assert(validAnagram('rat', 'car'), 'wrong letters'); // false
assert(validAnagram('awesome', 'awesom'), 'mismatch lengths'); // false
assert(
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'),
  'complex, but wrong'
); // false
assert(validAnagram('qwerty', 'qeywrt'), 'valid'); // true
assert(validAnagram('texttwisttime', 'timetwisttext'), 'valid'); // true
