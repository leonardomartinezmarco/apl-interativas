"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var valorReal = 4.63;
var valorConvertido;
function imprimeCambio() {
    console.log("Valor atual do dolar em real: " + valorReal);
    return valorReal;
}
function converteDolar(valorEmDolar) {
    imprimeCambio();
    valorConvertido = valorEmDolar * valorReal;
    return valorConvertido;
}
var valor = Number(rs.question("Digite o valor em USD: "));
console.log("Valor digitado convertido para reais: " + converteDolar(valor));
