const arroz = require('readline-sync');
let numero: number = arroz.question('Digite um numero positivo: ');

let i = 0;

while(i<= numero)
{
    console.log(i)
    i = i+2
 
}