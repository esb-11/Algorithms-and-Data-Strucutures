const input1 = "([]{})";
const input2 = "([]{)}";

console.log(validParenthesis(input1));
console.log(validParenthesis(input2));

function validParenthesis(string) {
  const stack = [];
  const opening = { "(": ")", "[": "]", "{": "}" };
  const closing = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < string.length; i++) {
    const char = string.at(i);
    if (opening[char]) {
      stack.push(char);
    } 
    // if char is a closing parenthesis, pop the stack and check if they match,
    // if it does not match, return false.
    else if (closing[char] && !(closing[char] == stack.pop())) {
      return false;
    }
  }

  return stack.length === 0;
}
