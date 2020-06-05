import * as rs from 'readline-sync';

let l1 = parseInt(rs.question("Primeiro lado do triangulo:"));
let l2 = parseInt(rs.question("Segundo lado do triangulo:"));
let l3 = parseInt(rs.question("Terceiro lado do triangulo:"));

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
    if (l1 === l2 && l1 === l3) {
        console.log("Triangulo Equilatero");
    } else if (l1 === l2 || l1 === l3) {
        console.log("Triangulo Isosceles");
    } else
        console.log("Triângulo Escaleno");
} else {
    console.log("Não é um triangulo!");
}
