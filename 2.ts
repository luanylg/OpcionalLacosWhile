const feijao = require("readline-sync");

let media = 0;
let n = 0;

while(n < 5){
    n++

    let valor = parseFloat(feijao.question('Digite a nota: '));
    
    media = media + valor;

}

console.log(media/5)