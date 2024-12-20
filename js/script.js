const prefix_input = document.getElementById("prefix");
const postfix_input = document.getElementById("postfix");
const evaluate = document.getElementById("evaluate");
const clear = document.getElementById("clear");
const res = document.getElementById("result");

function valid_prefix_input() {
  const pre = prefix_input.value;
  valid = /^[+\-*/]+( \d+)|( \d+)+$/;
  return valid.test(pre);
}
function valid_postfix_input() {
  const post = postfix_input.value;
  valid = /^(\d+ )|( \d+)*[+\-*/]/;
  return valid.test(post);
}
function calculation(x, y, operation) {
  if (operation == "+") {
    return x + y;
  } else if (operation == "-") {
    return x - y;
  } else if (operation == "*") {
    return x * y;
  } else {
    return x / y;
  }
}
function prefix_calculation() {
  const pre = prefix_input.value;

  let arr = pre.split(" ");
  console.log(pre);
  console.log(arr);
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!isNaN(+arr[i])) {
      stack.push(+arr[i]);
    } else {
      let x = stack.pop();
      let y = stack.pop();
      stack.push(calculation(x, y, arr[i]));
    }
  }

  return stack[0];
}
