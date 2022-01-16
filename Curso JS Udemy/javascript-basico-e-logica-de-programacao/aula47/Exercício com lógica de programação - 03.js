// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divísivel por 3 = Fizz
// Número é divísivel por 5 = Buzz
// Número é divísivel por 3 e por 5 = FizzBuzz
// Número NÂO é divísvel por 3 e por 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

function retornoDeDivisao(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return console.log('FizzBuzz');
    } else if (numero % 3 === 0 && numero % 5 !== 0) {
        return console.log('Fizz');
    } else if (numero % 3 !== 0 && numero % 5 === 0) {
        return console.log('Buzz');
    } else if (numero % 3 !== 0 && numero % 5 !== 0) {
        return console.log(numero + ' indivisível por 3 e 5');
    } else if (numero === Number) {
        return console.log(numero + ' é um número!');
    } else {
        return 'Problema não resolvido';
    }
}
retornoDeDivisao((Math.random() * 100).toFixed(0));

// Poderia ter usado for clássico pra gerar números de 0 a 100 também