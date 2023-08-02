var salada = require("readline-sync");
var numerosDigitados = [];
var media = 0;
var tomate = 1;
while (tomate < 10) {
    var num = parseFloat(salada.question("Digite o numero: "));
    numerosDigitados.push(num);
    media = media + num;
    tomate++;
}
console.log(media / 10);
console.log(Math.max.apply(Math, numerosDigitados));
console.log(Math.min.apply(Math, numerosDigitados));
