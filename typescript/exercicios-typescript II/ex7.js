"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n = Number(parseInt(rs.question("Digite um numero de 1 a 10: ")));
if (n > 10 || n < 1) {
    console.log("Numero informado inválido!");
}
else {
    for (var i = 1; i <= 10; i++) {
        var resultado = n * i;
        console.log(n + "x" + i + "=" + resultado);
    }
}
