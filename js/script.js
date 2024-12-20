const prefix_input = document.getElementById("prefix");
const postfix_input = document.getElementById("postfix");
const evaluate = document.getElementById("evaluate");
const clear = document.getElementById("clear");
const res = document.getElementById("result");

function valid_prefix_input() {
  pre = prefix_input.value;
  valid = /^[+\-*/]+(\d+)|( \d+)+$/;
  return valid.test(pre);
}
function valid_postfix_input() {
  post = postfix_input.value;
  valid = /^(\d+ )|( \d+)*[+\-*/]/;
  return valid.test(post);
}
evaluate.addEventListener("click", () => {
  console.log(valid_postfix_input());
});
