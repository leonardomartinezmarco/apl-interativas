import * as rs from 'readline-sync';

const valorReal = 4.63;
let valorConvertido;

function imprimeCambio() {
    console.log("Valor atual do dolar em real: " + valorReal);
    return valorReal;
}

function converteDolar(valorEmDolar: number){
    imprimeCambio();
    valorConvertido = valorEmDolar * valorReal;
    return valorConvertido;
}

let valor = Number(rs.question("Digite o valor em USD: "));
console.log("Valor digitado convertido para reais: " + converteDolar(valor));
