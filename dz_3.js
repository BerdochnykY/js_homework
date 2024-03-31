"use strict";

function pow(number, power) {
  let res = number;
  // Якщо в ступінь передати 0, то завжди повертатиметься 1, так як нульова ступінь від будь якого числа = 1.
  if (!power) {
    return 1;
  } else {
    for (let i = 1; i < power; i++) {
      res *= number;
    }
    return res;
  }
}

console.log("Результат =", pow(5, 4));
