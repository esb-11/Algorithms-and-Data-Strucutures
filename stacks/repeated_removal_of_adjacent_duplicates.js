const input = "aacabbacaac";

console.log(removeAdjacentDuplicates(input));

function removeAdjacentDuplicates(string) {
  const stack = [];
  let ptr = 0;

  while (ptr < string.length) {
    const char = string.at(ptr);

    if (stack.at(-1) == char) {
      stack.pop();
    } else {
      stack.push(char);
    }

    ptr += 1;
  }

  return stack;
}
