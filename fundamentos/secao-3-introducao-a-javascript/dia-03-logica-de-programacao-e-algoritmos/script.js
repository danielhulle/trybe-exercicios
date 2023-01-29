// Crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for(let indexFat = 10; indexFat > 0; indexFat -= 1) {
    fatorial *= indexFat;
}

console.log("O fatorial de 10 é: " + fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let reverseWord = ""

for(let indexRev = 0; indexRev < word.length; indexRev += 1) {
    reverseWord += word[word.length - 1 - indexRev];
}

console.log(reverseWord);

// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let biggestWord = array[0];

for(let index = 0; index < array.length; index += 1) {
    if(array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

console.log(biggestWord);

let smallestWord = array[0];

for(let indexSmall = 0; indexSmall < array.length; indexSmall += 1) {
    if(array[indexSmall].length < smallestWord.length) {
        smallestWord = array[indexSmall];
    }
}

console.log(smallestWord);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

// divide o número por todos entre 2 e 50;
// confere se ele só é divisivel por 1 e ele mesmo;
// confere entre os números primos qual é o maior.

let maiorNumeroPrimo = 0;

for(let numeroAtual = 2; numeroAtual < 50; numeroAtual += 1) {
    let primo = true;
    for(numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
        if(numeroAtual % numeroDivisor === 0) {
            let primo = false;
        }
    }
    if (primo) {
        maiorNumeroPrimo = numeroAtual;
    }
}

console.log(maiorNumeroPrimo);
