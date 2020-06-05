import * as rs from 'readline-sync';

const n1 = Number(rs.question("Primeiro valor: "));
const operacao: string = rs.question("Escolha a operacao desejada (+, -, *, /)");
const n2 = Number(rs.question("Segundo valor: "));
let resultado: number;

function soma (){
    resultado = n1 + n2;
    console.log(resultado);
}

function subtracao (){
    resultado = n1 - n2;
    console.log(resultado);
}

function divisao (){
    resultado = n1 / n2;
    console.log(resultado);
}

function multiplica (){
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