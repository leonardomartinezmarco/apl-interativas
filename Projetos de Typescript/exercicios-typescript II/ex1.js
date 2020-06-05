"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n = Number(rs.question('Informe um numero:'));
if (n % 2 === 0) {
    console.log("Par");
}
else {
    console.log("impar");
}
