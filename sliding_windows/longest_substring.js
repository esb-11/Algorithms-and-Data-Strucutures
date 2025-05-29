const str = "abcba";

console.log(longestSubstring(str));

function longestSubstring(string) {
  let result = 0;
  let left = 0;
  let right = 0;

  const chars = {};
  while (right < string.length) {
    if (chars[string[right]]) {
      chars[string[left]] = undefined;
      left += 1;
      continue;
    }
    chars[string[right]] = true;
    const length = right - left + 1;
    if (length > result) {
      result = length;
    }
    right += 1;
  }

  return result;
}
