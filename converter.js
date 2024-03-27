"use strict";

var prompt = require("prompt");

prompt.start();
console.log("Оберіть тип ('кілометри' або 'км', 'години' або 'г', 'кілограми' або 'кг') та введіть значення");
prompt.get(["type", "value"], function (_err, result) {
  var type = result.type;
  var value = result.value;
  var convert_value;

  switch (type) {
    case "кілометри":
    case "км":
      convert_value = value * 1000;
      //Результат у вигляді: "10 км це 10000 м" як в описі
      console.log("Результат:", value, "км це", convert_value, "м");
      break;
    case "години":
    case "г":
      convert_value = value * 60;
      //Результат у вигляді: "1 г це 60хв" як в описі
      console.log("Результат:", value, "г це", convert_value + "хв");
      break;
    case "кілограми":
    case "кг":
      convert_value = value * 1000;
      //Результат у вигляді: "1 кг. це 1000 грм" як в описі
      console.log("Результат:", value, "кг. це", convert_value, "грм");
      break;
    default:
      console.log("Помилка. Було введено не відому одиницю виміру");
  }
});
