// alert('Com a nossa mensagem'); // aparece só no navegador

/* 
conta de soma
sem concatenação
*/
/*
const num1 = prompt('Digite um número:'); // pede um nº e salva ele na const num1
const num2 = prompt('Digite outro número:'); // pede um nº e salva ele na const num2
const resultadoUm = Number(num1); // cria um nova const com o typeof do num1 = number
const resultadoDois = Number(num2); // cria um nova const com o typeof do num2 = number
const resultadoFinal = resultadoUm + resultadoDois; // soma os números num1 e num2

alert('O resultado foi ' + resultadoFinal); // alerta o resultado final.
*/


// Corrigido
let num1 = prompt('Digite um número:'); // pede um nº e salva ele na let num1
let num2 = prompt('Digite outro número:'); // pede um nº e salva ele na let num2
num1 = Number(num1); // como se usou let é possível mudar seu valor
num2 = Number(num2); 
const resultadoFinal = num1 + num2; // soma os números num1 e num2

alert('O resultado foi ' + resultadoFinal); // alerta o resultado final.

