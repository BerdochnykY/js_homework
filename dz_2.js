"use strict";

function myPad(textField, symbol, countSybmols, endOrStart) {
  let countAdd = 0;
  // Вираховуємо кількість символів яку потрібно додати до рядка
  if (countSybmols >= String(textField).length) {
    countAdd = countSybmols - String(textField).length;
  } else {
    countAdd = 0;
  }

  /* Перевірка на те, що:
    в функцію передається тільки 1 символ для додавання 
    останній агрумент має тип 'boolean' */
  if (String(symbol).length === 1 && typeof endOrStart === "boolean") {
    let addStr = "";
    let result = "";
    for (let i = 1; i <= countAdd; ++i) {
      addStr += String(symbol);
      if (endOrStart) {
        result = addStr + textField;
        // Якщо endOrStart = true - відбувається додавання символів в початок
      } else {
        result = textField + addStr;
        // Якщо endOrStart = false - відбувається додавання символів в кінець
      }
    }
    console.log(result);
    return result;
  } else {
    return console.log("Error");
  }
}

// let test0 = myPad("", "*", 3, true);
// let test1 = myPad(" ", "*", 5, true);
// let test2 = myPad(" ", "*", 5, false);
// let test3 = myPad("test", "+", 11, true);
// let test4 = myPad("testtest", "+", 15, false);
