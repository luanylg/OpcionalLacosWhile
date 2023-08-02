var bife = require("readline-sync");
var tab = bife.question("Digite um numero: ");
var t = 0;
while (t < 10) {
    t++;
    console.log(t * tab);
}
