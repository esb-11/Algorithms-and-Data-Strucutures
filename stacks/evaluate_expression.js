const input = "18-(7+(2-4))";

console.log(evaluateExpression(input));

function evaluateExpression(expression) {
  const stack = [];
  let curr_num = 0;
  let sign = 1;
  let res = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression.at(i);
    if (parseInt(char)) {
      curr_num = curr_num * 10 + parseInt(char);
    } else if (char == "+" || char == "-") {
      res += curr_num * sign;
      sign = char == "-" ? -1 : 1;
      curr_num = 0;
    } else if (char == "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (char == ")") {
      res += curr_num * sign;
      res *= stack.pop();
      res += stack.pop();
      curr_num = 0;
    }
  }
  return res + curr_num * sign;
}
