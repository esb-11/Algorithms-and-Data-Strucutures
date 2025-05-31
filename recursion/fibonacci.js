console.log((fibonacci(8)));

function fibonacci(n) {
  if (n <= 2) {
    return [0, 1];
  }
  const sequence = fibonacci(n - 1);
  sequence.push(sequence.at(-1) + sequence.at(-2));
  return sequence;
}
