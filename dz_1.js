"use strict";

var myNewObject = {
  name: "Yaroslav",
  age: 30,
  city: "Kyiv",
  getInfo: function () {
    for (let property in this) {
      if (typeof this[property] !== "function") {
        console.log(`${property}: ${this[property]}`);
      }
    }
  },
};

// додаємо нову властивість до обʼєкта
myNewObject.gender = "male";
myNewObject.test = true;

// викликаємо метод getInfo для виведення всіх властивостей обʼєкта
myNewObject.getInfo();
