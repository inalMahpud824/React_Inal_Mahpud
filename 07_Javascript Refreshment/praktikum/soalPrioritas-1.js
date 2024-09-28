function swapValues(a, b) {
  // Kode kamu di sini
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

const reverseFirstTwo = ([a, b]) => {
  [a, b] = [b, a];
  console.log(a, b);
  return [a, b];
  // Kode kamu di sini
};

function findLargest(arr) {
  // Kode kamu di sini
  let large = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  console.log(large);
  return large;
}

const calculator = {
  // Metode kamu di sini
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function greetUser(name) {
  return `Hello ${name}, ini menggunakan declaration function`;
  // Kode kamu di sini
}

const greetUserArrow = (name) => {  // Kode kamu di sini
  return `Hello ${name}, ini menggunakan arrow function`;
};

swapValues(5, 10);
reverseFirstTwo([1, 12]);
findLargest([1, 2, 3, 4, 5, 0, 21, 12]);
console.log(calculator.add(5, 10));
console.log(calculator.divide(5, 10));
console.log(calculator.multiply(5, 10));
console.log(calculator.subtract(5, 10));
console.log(greetUser("Inal"));
console.log(greetUserArrow("Mahpud"));
