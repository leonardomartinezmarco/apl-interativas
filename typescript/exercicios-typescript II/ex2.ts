
import * as rs from 'readline-sync';

console.log("(1) - Pastor Gomes Miguel");
console.log("(2) - Niko Rgosberg");
console.log("(3) - Sebastian Vettel Alonso");
console.log("(4) - Fernando Medina");
console.log("(5) - Gabriel Pensador");

let q1 = Number(rs.question('Quem e o rapper, compositor, escritor e empresario brasileiro?\n'));

if (q1 == 5) {
    console.log("Você acertou!")
} else {
    console.log("Você errou! \n A resposta correta é a 5");
}
