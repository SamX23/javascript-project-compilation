class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateNumberInput = (a, b, c) => {
  if (!Number.isInteger(a)) {
    throw new ValidationError("Argumen pertama harus number");
  }

  if (!Number.isInteger(b)) {
    throw new ValidationError("Argumen kedua harus number");
  }

  if (!Number.isInteger(c)) {
    throw new ValidationError("Argumen ketiga harus number");
  }
};

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  } catch (e) {
    if (e instanceof ValidationError) {
      return `${e.message}`;
    }
  }
};

console.log(detectTriangle(1, 2, 3));
