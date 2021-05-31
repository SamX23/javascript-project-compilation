import { coffeeStock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);

// Async Await Promise

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isCoffeeMachineReady) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("Maaf, mesin sedang sibuk.");
      }
    }, 1000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  });
};

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      const promises = [boilWater(), grindCoffeeBeans()];
      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      isCoffeeMachineReady = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      isCoffeeMachineReady = false;
    });
}

makeEspresso();

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

// asynchronous dengan gaya synchronous.
async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();

// versi async using sync style, I prefer promise style
async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeEspresso();
