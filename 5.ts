const salada = require("readline-sync");

let numerosDigitados:number[] = [];
let media:number = 0
let tomate = 1

while ( tomate <10) {
  let num = parseFloat(salada.question("Digite o numero: " ));
  numerosDigitados.push(num);

  media = media + num;
  tomate++
}

console.log(media/10)

console.log(Math.max(...numerosDigitados))

console.log(Math.min(...numerosDigitados))