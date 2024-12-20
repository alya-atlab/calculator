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
