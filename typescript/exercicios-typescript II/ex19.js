"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num = new Array(3);
for (var x = 0; x < num.length; x++) {
    num[x] = Number(rs.question("Digite um numero: "));
}
for (var j = num.length - 1; j >= 0; j--) {
    console.log(num[j]);
}
