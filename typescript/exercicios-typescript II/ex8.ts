import * as rs from "readline-sync";

var resultado = 0;

for (let i = 1; i <= 10; i++) {
    let n: number = Number(rs.question("Digite um numero " + i + ": "));
    resultado += n;
}

console.log("A soma de todos os numeros digitados é: " + resultado);