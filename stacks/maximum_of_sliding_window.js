const array = [3, 2, 4, 1, 2, 1, 1];
const k = 4;

console.log(maximumOfSlidingWindow(array, k));

function maximumOfSlidingWindow(array, k) {
  const result = [];
  const dequeu = [];
  dequeu.push({value: array[0], index: 0});
  
  let left = 0;
  let right = 0;
  while (right < k - 1) {    
    while (dequeu.at(-1) && dequeu.at(-1).value <= array[right]) {
      dequeu.pop();
    }
    dequeu.push({value: array[right], index: right});
    right += 1;
  }

  while (right < array.length) {
    result.push(dequeu[0].value);
    console.log(`${left} ${right}`);
    while (dequeu.at(-1).value <= array[right]) {
      dequeu.pop();
    }
    dequeu.push({value: array[right], index: right});
    right += 1;

    if (dequeu[0].index === left) dequeu.shift();
    left += 1;
  }

  return result;
}
