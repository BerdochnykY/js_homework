"use strict";

// Максимальний вік до якого буде вірно визначати закінчення - 110

var prompt = require("prompt");

prompt.start();

prompt.get(["age"], function (_err, result) {
  var yourAge = result.age;

  if (Number(yourAge) && yourAge > 0) {
    var ostatok = yourAge % 10;
    var wordType;

    if (yourAge >= 11 && yourAge <= 20) {
      wordType = "років";
    } else if (ostatok === 1) {
      wordType = "рік";
    } else if (ostatok > 1 || ostatok === 0) {
      wordType = ostatok >= 2 && ostatok <= 4 ? "роки" : "років";
    } else {
      console.log(yourAge, " - це як так вийшло?");
    }
    console.log("Ваш вік:", yourAge, wordType);
  } else {
    console.log("Не вірний формат");
  }
});
