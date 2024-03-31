"use strict";

function drawTriangle_v1(heightTriangle, symbol) {
  let massage = "";
  for (let i = 0; i < heightTriangle; i++) {
    massage += symbol;
    console.log(massage);
  }
};

function drawTriangle_v2(heightTriangle, symbol) {
  for (let i = 1; i <= heightTriangle; i++) {
    let massage = "";
    for (let j = 0; j < i; j++) {
      massage += symbol;
    }
    console.log(massage);
  }
};

drawTriangle_v1(4, "*");
drawTriangle_v2(6, "&");
