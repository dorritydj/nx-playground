import { assert } from 'console';

function stringSearch(str: string, substring: string): number {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (str[i + j] !== substring[j]) break;

      if (j === substring.length - 1) count++;
    }
  }

  return count;
}

assert(stringSearch('wowomgzomg', 'omg') === 2);
