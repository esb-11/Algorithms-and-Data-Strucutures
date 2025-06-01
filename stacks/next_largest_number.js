const input = [1, 1, 2, 3, 2, 3, 2, 4];

console.log(nextLargestNumber(input));

function nextLargestNumber(array) {
  const res = new Array(array.length);
  const stack = [];

  for (let i = array.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack.at(-1) <= array[i]) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack.at(-1) : -1;
    stack.push(array[i]);
  }

  return res;
}
