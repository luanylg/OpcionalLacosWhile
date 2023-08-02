var feijao = require("readline-sync");
var media = 0;
var n = 0;
while (n < 5) {
    n++;
    var valor = parseFloat(feijao.question('Digite a nota: '));
    media = media + valor;
}
console.log(media / 5);
