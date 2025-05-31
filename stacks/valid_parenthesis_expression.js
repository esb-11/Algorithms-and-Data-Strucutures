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
    // if char is a closing parenthesis, check if the corresponding opening parenthesis is at the top of the stack,
    // If it is not, return false.
    else if (closing[char] && !(closing[char] == stack.pop())) {
      return false;
    }
  }

  return stack.length === 0;
}
