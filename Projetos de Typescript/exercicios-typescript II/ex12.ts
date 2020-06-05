import * as rs from 'readline-sync';

let n: string;

function lerNome(): string {
    n = rs.question("Digite seu nome: ");
    return n;
}

function exibirNome(){
    lerNome();
    console.log("Seu nome: " +n);
}

exibirNome();