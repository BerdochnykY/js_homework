"use strict"

function myIsNaN(value) {
    if (Number(value) || value === null || value == 0){
        return false
    }
    else {
        return true
    }
}

// console.log(isNaN(NaN), myIsNaN(NaN)); // true
// console.log(isNaN(undefined), myIsNaN(undefined)); // true
// console.log(isNaN({}), myIsNaN({})); // true
// console.log(isNaN(true), myIsNaN(true)); // false
// console.log(isNaN(null), myIsNaN(null)); // false
// console.log(isNaN(37), myIsNaN(37)); // false
// console.log(isNaN("37"), myIsNaN("37")); // false
// console.log(isNaN("37.37"), myIsNaN("37.37")); // false
// console.log(isNaN(""), myIsNaN("")); // false
// console.log(isNaN(" "), myIsNaN(" ")); // false
// console.log(isNaN("37,5"), myIsNaN("37,5")); // true
// console.log(isNaN(new Date()), myIsNaN(new Date())); // false
// console.log(isNaN(new Date().toString()), myIsNaN(new Date().toString())); // true
// console.log(isNaN("blabla"), myIsNaN("blabla")); // true
