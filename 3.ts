const bife= require("readline-sync");

let tab : number = bife.question("Digite um numero: ");

let t = 0;

while( t < 10 )
 { t++
    console.log(t*tab);
}