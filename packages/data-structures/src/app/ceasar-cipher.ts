function ceasarCipher(str: string, k: number) {
  const strSplit = str.split('');
  const trueShift = k % 26;
  const ACharCode = 'A'.charCodeAt(0);
  const aCharCode = 'a'.charCodeAt(0);
  const ZCharCode = 'Z'.charCodeAt(0);
  const zCharCode = 'z'.charCodeAt(0);
  const newStr = [];

  for (const char of strSplit) {
    const currCharCode = char.charCodeAt(0);
    let letterToAdd = char;

    if (ACharCode <= currCharCode && currCharCode <= ZCharCode) {
      if (currCharCode + trueShift > ZCharCode) {
        letterToAdd = String.fromCharCode(
          ACharCode + currCharCode + trueShift - ZCharCode - 1
        );
      } else {
        letterToAdd = String.fromCharCode(currCharCode + trueShift);
      }
    }

    if (aCharCode <= currCharCode && currCharCode <= zCharCode) {
      if (currCharCode + trueShift > zCharCode) {
        letterToAdd = String.fromCharCode(
          aCharCode + currCharCode + trueShift - zCharCode - 1
        );
      } else {
        letterToAdd = String.fromCharCode(currCharCode + trueShift);
      }
    }

    newStr.push(letterToAdd);
  }

  console.log(newStr.join(''));
}

ceasarCipher('www.abc.xy', 87);
// ceasarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ-_.,\'";:', 2);
