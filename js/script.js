const prefix_input = document.getElementById("prefix");
const postfix_input = document.getElementById("postfix");
const evaluate = document.getElementById("evaluate");
const clear = document.getElementById("clear");
const res = document.getElementById("result");
const explain = document.createElement("div");
document.body.appendChild(explain);
explain.style.margin = "20px";
explain.style.color = "white";

function valid_prefix_input() {
  const pre = prefix_input.value;
  valid = /^[+\-*/] ( \d+)|( \d+)*$/;

  let arr = pre.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(+arr[i])) {
      if (arr[i].length > 1) {
        return false;
      }
    }
  }
  return valid.test(pre);
}

function valid_postfix_input() {
  const post = postfix_input.value;
  valid = /^(\d+ )|( \d+\s)+([+\-*/])*/;

  let arr = post.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(+arr[i])) {
      if (arr[i].length > 1) {
        return false;
      }
    }
  }
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

function postfix_calculation() {
  const post = postfix_input.value;
  let arr = post.split(" ");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
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

function prefix() {
  if (valid_prefix_input()) {
    explain.innerHTML = "";
    return prefix_calculation();
  } else {
    explain.innerHTML =
      "Prefix notation is a mathematical notation in which the operator precedes its operands, such as + 3 4 instead of 3 + 4.";
    return "please check the rules!";
  }
}

function postfix() {
  if (valid_postfix_input()) {
    explain.innerHTML = "";
    return postfix_calculation();
  } else {
    explain.innerHTML =
      "Postfix notation is a mathematical notation in which the operator follows its operands, such as 3 4 + instead of 3 + 4.";
    return "please check the rules!";
  }
}

evaluate.addEventListener("click", () => {
  if (!prefix_input.value == "" && postfix_input.value == "") {
    res.innerHTML = prefix();
  } else if (prefix_input.value == "" && !postfix_input.value == "") {
    res.innerHTML = postfix();
  } else if (!prefix_input.value == "" && !postfix_input.value == "") {
    res.innerHTML = "Please choose one expression at a time!";
  } else {
    res.innerHTML = "Please enter your equation!";
  }
});

clear.addEventListener("click", () => {
  prefix_input.value = "";
  postfix_input.value = "";
});
