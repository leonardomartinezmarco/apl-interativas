"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var ano = Number(rs.question('Digite um ano:'));
if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log("Este ano é bissexto");
}
else {
    console.log("Este ano não é bissexto");
}
