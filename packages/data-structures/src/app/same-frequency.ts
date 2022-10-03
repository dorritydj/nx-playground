// given two positive integers, find out if the two numbers have the same frequency of digits
// must be O(n)

import { assert } from 'console';

function sameFrequency(n1: number, n2: number): boolean {
  const n1_str = String(n1).split('');
  const n2_str = String(n2).split('');

  if (n1_str.length !== n2_str.length) return false;

  const n1_count = {};
  const n2_count = {};

  for (const val in n1_str) {
    const key = n1_str[val];
    n1_count[key] = (n1_count[key] || 0) + 1;
  }

  for (const val in n2_str) {
    const key = n2_str[val];
    n2_count[key] = (n2_count[key] || 0) + 1;
  }

  for (const key in n1_count) {
    if (!(key in n2_count) && n1_count[key] !== n2_count[key]) {
      return false;
    }
  }

  return true;
}

assert(sameFrequency(182, 281) === true, '182, 281');
assert(sameFrequency(34, 14) === false, '34, 14');
assert(sameFrequency(3589578, 5879385) === true, '3589578, 5879385');
assert(sameFrequency(22, 222) === false, '22, 222');
