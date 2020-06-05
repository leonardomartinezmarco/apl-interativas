import * as rs from 'readline-sync';

var pos = new Array();
var nums = new Array(100);
var numero = 0;

for (let i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 10);
    console.log(nums[i])
}

function procurar(nums, numero, pos): number {
    let search = 0;
    
    nums.forEach(element => {
        console.log(nums[element])
    });

    for (let index = 0; index < 100; index++) {
        if (nums[index] == numero) {

            pos[search] = index;
            search++;
        }
    }

    return pos;
}

numero = Number(rs.question("Digite o numero que deseja procurar: "));

procurar(nums, numero, pos);

console.log("Foram encontrados nas posições: ");

pos.forEach(element => {
    console.log(pos[element])
});