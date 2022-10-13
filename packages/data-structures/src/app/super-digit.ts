const sumArrayOfChars = (arr: string[]) => {
  return arr.reduce((prev: number, curr: string): number => {
    return prev + Number(curr);
  }, 0);
};

function superDigit(n: string, k: number) {
  const finalStr = new Array(k).fill(n).join('');

  const getSum = (val: string, i: number) => {
    const allNums = val.split('');

    if (allNums.length === 1 || i === 0) {
      return sumArrayOfChars(allNums);
    }

    return getSum(String(sumArrayOfChars(allNums)), k--);
  };

  console.log(getSum(finalStr, k));
}

superDigit('9875', 4); // 9875987598759875 then find super digit
