// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let inputLine = '';
let symbol = '*';

for(let indexLine = 0; indexLine < n; indexLine += 1) {
    inputLine =  inputLine + symbol;
}

for(let indexSquare = 1; indexSquare <= n; indexSquare += 1) {
    console.log(inputLine);
}




