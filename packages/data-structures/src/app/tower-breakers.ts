function largestPrimeFactor(n: number, exclude = [1, 2]): any {
  const factors = [...Array(n + 1).keys()].filter((i) => n % i === 0);
}

function towerBreakers(n: number, m: number) {
  let winner = 0;
  const baseTowers = new Array(n).fill(m);

  const processTurn = (player: number, towers: number[]): void => {
    const movesRemaining = towers.filter((tower) => tower !== 1).length;

    if (movesRemaining === 0) {
      winner = player === 1 ? 2 : 1;
      return;
    }

    // at some point, we call processTurn(2, newTowers)
    let firstTwoIndex: string = null;

    for (const [i, tower] of Object.entries(towers)) {
      if (tower === 1) continue;
      if (!firstTwoIndex && tower === 2) {
        firstTwoIndex = i;
        continue;
      }

      const largestFactor = largestPrimeFactor(tower);
      console.log(largestFactor);
    }
  };

  processTurn(1, baseTowers);

  return winner;
}

towerBreakers(2, 2);
// towerBreakers(1,4)
