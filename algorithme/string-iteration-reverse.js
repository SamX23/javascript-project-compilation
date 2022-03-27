const stringIteration = (str) => {
  let i = 0;
  let new_str = "";

  while (i < str.length - 1) {
    new_str += str[i + 1];
    i++;
  }

  return new_str;
};

const stringCheck = (str) => {
  console.log("asd");
  if (str.length == 0) {
    return "";
  } else if (str.length == 1) {
    return str;
  } else {
    return stringCheck(stringIteration(str)) + str[0];
  }
};

console.log(stringCheck("fruits"));
