"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var n1 = Number(rs.question("Primeiro valor: "));
var operacao = rs.question("Escolha a operacao desejada (+, -, *, /)");
var n2 = Number(rs.question("Segundo valor: "));
var resultado;
function soma() {
    resultado = n1 + n2;
    console.log(resultado);
}
function subtracao() {
    resultado = n1 - n2;
    console.log(resultado);
}
function divisao() {
    resultado = n1 / n2;
    console.log(resultado);
}
function multiplica() {
    resultado = n1 * n2;
    console.log(resultado);
}
switch (operacao) {
    case "+":
        soma();
        break;
    case "-":
        subtracao();
        break;
    case "*":
        multiplica();
        break;
    case "/":
        divisao();
        break;
    default:
        console.log("Operador invalido!");
        break;
}
