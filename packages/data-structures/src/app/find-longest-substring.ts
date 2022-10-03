import { assert } from 'console';

function findLongestSubstring(str: string) {
  const freq = {};
  let start_index = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (freq[char]) {
      start_index = Math.max(start_index, freq[char]);
    }

    longest = Math.max(longest, i - start_index + 1);
    freq[char] = i + 1;
    console.log(freq);
  }

  return longest;
}

assert(findLongestSubstring('') === 0, 'empty'); // 0
assert(findLongestSubstring('rithmschool') === 7, 'school???'); // 7
assert(findLongestSubstring('thisisawesome') === 6, 'thisisawesome'); // 6
assert(findLongestSubstring('thecatinthehat') === 7, 'thecatinthehat'); // 7
assert(findLongestSubstring('bbbbbb') === 1, 'bbbbbb'); // 1
assert(findLongestSubstring('longestsubstring') === 8, 'longestsubstring'); // 8
assert(findLongestSubstring('thisishowwedoit') === 6, 'thisishowwedoit'); // 6
