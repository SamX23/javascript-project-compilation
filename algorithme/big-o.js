const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5, 6, 7];
const out = [];

// O(n)
// O(1) = space complexity is 0 or means as constant
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// O(n + a)
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
for (let j = 0; j < data.length; j++) {
  console.log(data[j]);
}

// O(n * a)
for (let j = 0; j < data2.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data2[j]);
  }
}

// O(n ^ 2)
for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

// O(n ^ 2 + n)
for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// O(n^2) > with increased time complexity

for (let j = 0; j < data.length; j++) {
  out[j] = [];
  for (let i = 0; i < data.length; i++) {
    out[j][i] = data[j];
  }
}
