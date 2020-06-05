import * as rs from "readline-sync";

let n: number = Number (parseInt(rs.question("Digite um numero de 1 a 10: ")));

if (n > 10 || n < 1) {
    console.log("Numero informado inválido!");
} else {
    for (let i = 1; i <= 10; i++) {
        let resultado = n * i
        console.log(n + "x" + i + "=" + resultado);
    }
}

