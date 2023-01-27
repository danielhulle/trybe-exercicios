let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for(let indexImprime = 0; indexImprime < numbers.length; indexImprime += 1) {
//     console.log(numbers[indexImprime]);
// }

// 2- Some todos os valores contidos no array e imprima o resultado;

// let soma = 0

// for(let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1) {
//     soma += numbers[indexSoma];
// }

//     console.log(soma)

// 3- Calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0

for(let indexMed = 0; indexMed < numbers.length; indexMed += 1) {
    soma += numbers[indexMed];
}

let med = soma/numbers.length;

if(med > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}


// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.