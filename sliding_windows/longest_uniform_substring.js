const input = "aabcdcca";

console.log(longestUniformSubstring(input, 2));

function longestUniformSubstring(string, k) {
  let max_len = 0;

  let highestFrequency = 0;
  const hashmap = {};

  let left = 0;
  let right = 0;
  while (right < string.length) {
    hashmap[string.at(right)] = hashmap[string.at(right)]
      ? hashmap[string.at(right)] + 1
      : 1;

    highestFrequency =
      hashmap[string.at(right)] > highestFrequency
        ? hashmap[string.at(right)]
        : highestFrequency;

    let chars_to_replace = right - left + 1 - highestFrequency;
    if (chars_to_replace > k) {
      hashmap[string.at(left)] -= 1;
      left += 1;
    }

    max_len = right - left + 1 > max_len ? right - left + 1 : max_len;

    right += 1;
  }

  return max_len;
}
