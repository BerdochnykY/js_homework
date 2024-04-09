"use strict";

var re = /^[^аА]{6,}$/;

var str = "тут відсутня літерa A з кирилиці";
console.log(re.test(str));

var str_2 = "а тут вже є А з кирилиці"
console.log(re.test(str_2));
