const { coffeeStock, isCoffeeMachineReady } = require("./state");
console.log("working !");

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log(isCoffeeMachineReady);
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
