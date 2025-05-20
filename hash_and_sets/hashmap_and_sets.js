const input = [-1, 3, 4, 2];

console.log(pairSumUnsorted(input, 3));

function pairSumUnsorted(array, target) {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const difference = target - current;

    if (!(typeof hash[difference] == "undefined")) {
      return [i, hash[difference]];
    }

    hash[current] = i;
  }

  return [];
}
