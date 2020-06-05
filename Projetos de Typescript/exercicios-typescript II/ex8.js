"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var resultado = 0;
for (var i = 1; i <= 10; i++) {
    var n = Number(rs.question("Digite um numero " + i + ": "));
    resultado += n;
}
console.log("A soma de todos os numeros digitados é: " + resultado);
