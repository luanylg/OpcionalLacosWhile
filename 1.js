var arroz = require('readline-sync');
var numero = arroz.question('Digite um numero positivo: ');
var i = 0;
while (i <= numero) {
    console.log(i);
    i = i + 2;
}
