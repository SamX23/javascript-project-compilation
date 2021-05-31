console.log("running");
// Define body
const body = document.getElementById("main");

const navbar = document.createElement("NAV");
const main = document.createElement("MAIN");

const button = document.createElement("BUTTON");
button.innerHTML = "Button";
button.onclick = () =>
  console.log("clicked", Math.floor(Math.random() * food.length));

// Append to body
body.appendChild(navbar);
body.appendChild(main);
main.appendChild(button);

let food = ["asd", "dds", 3, 4, 5];

let mahalContainer = document.createElement("DIV");
body.appendChild(mahalContainer);
let H2 = document.createElement("H2");
let mahal = document.createTextNode("Mahal!");

H2.appendChild(mahal);
mahalContainer.innerHTML = H2;
