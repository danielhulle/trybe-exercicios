let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let indexImprime = 0; indexImprime < numbers.length; indexImprime += 1) {
    console.log(numbers[indexImprime]);
}

// 2- Some todos os valores contidos no array e imprima o resultado;

let soma = 0

for(let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1) {
    soma += numbers[indexSoma];
}

    console.log(soma)

// 3- Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let soma2 = 0

for(let indexMed = 0; indexMed < numbers.length; indexMed += 1) {
    soma2 += numbers[indexMed];
}

let med = soma2/numbers.length;

if(med > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// 4- Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0]

for(indexMaior = 1; indexMaior < numbers.length; indexMaior += 1) {
    if(numbers[indexMaior] > maiorNumero) {
        maiorNumero = numbers[indexMaior];
    }
}

console.log(maiorNumero);

// 5- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numerosImpar = 0

for(indexImpar = 0; indexImpar < numbers.length; indexImpar += 1) {
    numerosImpar += numbers[indexImpar] % 2 !== 0;
}

if(numerosImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpar);
}

// 6- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let indexMenor = 1; indexMenor < numbers.length; indexMenor += 1) {
    if(numbers[indexMenor] < menorNumero) {
        menorNumero = numbers[indexMenor]
    }
}

console.log(menorNumero);

// 7- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for(let index = 1; index <= 25; index += 1) {
    array.push(index);
}

console.log(array);

// 8- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for(let indexDivisao = 0; indexDivisao < array.length; indexDivisao += 1) {
    console.log(array[indexDivisao] / 2);
}