const s = "caabab";
const t = "aba";

console.log(substrings_anagrams(s, t));

function substrings_anagrams(s, t) {
  const lettersFrequency = new Array(26);
  lettersFrequency.fill(0);

  for (let i = 0; i < t.length; i++) {
    const letter = t.charCodeAt(i) - 97;
    lettersFrequency[letter] += 1;
  }

  let left = 0;
  let right = 0;

  const windowFrequency = new Array(26);
  windowFrequency.fill(0);
  
  let result = 0;
  while (right <= s.length) {
    const letter = s.charCodeAt(right) - 97;
    windowFrequency[letter] += 1;

    if (right - left + 1 === t.length) {
      if (windowFrequency.toString() == lettersFrequency.toString()) {
        result += 1;
      }
      windowFrequency[s.charCodeAt(left) - 97] -= 1;
      left += 1;
    }

    right += 1;
  }

  return result;
}
