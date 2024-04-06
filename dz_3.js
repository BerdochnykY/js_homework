"use strict";

function checkProbabilityTheory(count) {
  let parniCount = 0;
  let neParniCount = 0;

  for (let i = 0; i < count; i++) {
    let rundomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    // формула для отримання рандомного числа включаючи верх і низ діапазону
    if (rundomNumber % 2 === 0) {
      parniCount++;
    } else {
      neParniCount++;
    }
  }

  let totalCount = parniCount + neParniCount;
  let parniPercentage = (parniCount / totalCount) * 100;
  let neParniPercentage = (neParniCount / totalCount) * 100;

  console.log("Кількість згенерованих чисел:", totalCount);
  console.log("Парних чисел:", parniCount);
  console.log("Непарних чисел:", neParniCount);
  console.log("Відсоток парних до не парних:", parniPercentage.toFixed(2) + "% :", neParniPercentage.toFixed(2) + "%");
  // округлюємо відсотки до двох знаків після крапки
}

// checkProbabilityTheory(1000000);
