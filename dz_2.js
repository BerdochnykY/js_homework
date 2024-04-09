"use strict";

var testArr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // false
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "@yahoo.com", // false
  },
];

var regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

function validatorEmails(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
      newArr.push(arr[i].email);
    }
  }
  return newArr;
}

var validEmails = validatorEmails(testArr);
console.log(validEmails);
