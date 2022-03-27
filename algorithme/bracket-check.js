let text = "{{}";
const x = (s) => {
  let open_bracket = 0;
  for (const c of s) {
    if (c == "{") {
      open_bracket++;
    } else {
      open_bracket--;
    }

    if (open_bracket < 0) {
      return false;
    }
  }

  if (open_bracket == 0) {
    return true;
  }
};

console.log(x(text));
