"use strict";

var services = {
  "Стрижка голови": "350 грн",
  "Укладка бороди": "150 грн",
  "Миття голови": "100 грн",
  price: function () {
    let totalPrice = 0;
    console.log("Надані послуги:");
    for (let property in this) {
      if (typeof this[property] !== "function") {
        console.log(`  - ${property}: ${this[property]}`);
        totalPrice += parseInt(this[property]);
      }
    }
    return totalPrice;
  },
  minPrice: function () {
    let min = 999999;
    for (let property in this) {
      if (typeof this[property] !== "function") {
        let price = parseInt(this[property]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },
  maxPrice: function () {
    let max = 0;
    for (let property in this) {
      if (typeof this[property] !== "function") {
        let price = parseInt(this[property]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  },
};

services["Розбите скло"] = "150 грн";
services["Виклик таксі"] = "100 грн";

console.log(`Загальна вартість послуг:`, services.price());
console.log(`Вартість найдешевшої послуги:`, services.minPrice());
console.log(`Вартість найдорощої послуги:`, services.maxPrice());
