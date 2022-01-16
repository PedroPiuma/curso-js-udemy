// Não podemos criar constantes com palavras reservadas

// Constantes precisam ter nomes significativos

// Não pode começar o nome de uma constante com um número

// Constantes não podem conter espaços ou traços

// Utilizamos camelCase.

// Essas variáveis são Case-sensitive. Diferenciam maiúscula e minúscula.

// Não pode modificar o valor de uma constante

/*
const nome = 'João';
console.log(nome);
*/

// + - * /

// Dentro de aspas é string | String é texto | Fora de aspas é number = número

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));
console.log(typeof (primeiroNumero + segundoNumero));