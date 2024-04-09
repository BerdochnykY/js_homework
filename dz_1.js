"use strict";

function myBlend(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    // Випадковий індекс, з яким буде відбуватися обмін
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
    // Міняємо місцями два елементи
  }
}

var arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrs);
myBlend(arrs);
console.log(arrs);
