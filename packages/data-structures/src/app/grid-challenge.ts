type Polar = 'YES' | 'NO';

function gridChallenge(arr: string[]): Polar {
  let ascCount = 0;

  // sort each string first
  const sorted = arr.map((str) => {
    return str.split('').sort().join('');
  });

  const first = sorted.shift();

  for (let i = 0; i < first.length; i++) {
    // char is a,b,c,d,e
    const temp = [first[i]];
    sorted.forEach((str) => {
      temp.push(str[i]);
    });

    if (temp.join('') === temp.sort().join('')) {
      ascCount++;
    }
  }

  console.log(ascCount, ascCount === first.length ? 'YES' : 'NO');
  return ascCount === arr.length ? 'YES' : 'NO';
}

gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']);
gridChallenge(['abc', 'lmp', 'qrt']);
gridChallenge(['mpxz', 'abcd', 'wlmf']);
gridChallenge(['abc', 'hjk', 'mpq', 'rtv']);
