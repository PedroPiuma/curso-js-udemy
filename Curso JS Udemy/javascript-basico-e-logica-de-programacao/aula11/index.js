/*
Operadores aritméticos 
*   + Adição / Concatenação
*   ** Potenciação
*   % Resto da divisão
*   
*   Ordem das contas: () ** * / % + -
*
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // Soma normal

const num3 = '5';
const num4 = 10;
console.log(num3 + num4); // Soma de concatenação

const num5 = 5;
const num6 = 10;
console.log(num5 ** num6); // Potenciação

const num7 = 10;
const num8 = 5;
console.log(num7 % num8); // Resto da divisão

const num9 = 5;
const num10 = 10;
const num11 = 2;
console.log(num9 + num10 * num11);

let contador = 1;
contador++; // 2  operador de incremento
contador++; // 3  só funcionado com variável. Não funciona com constante const
++contador; // pode ser na frente também
console.log(contador);
console.log(contador++); // primeiro mostra dps adicionado o incremento
console.log(++contador); // primeiro incrementa depois mostra o valor

/*
Incremento = ++
Decremento = --
*/


// Contador de 2 em 2
const passo = 2;
let contador1 = 0;

contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);
contador1 = contador1 + passo;
console.log(contador1);

// Atalho para contador de 2 em 2
contador1 += 2;
contador1 += 2; // contador = contador + 2 
contador1 += 2;
console.log(contador1);

let contador2 = 2;
contador2 **= 10;
console.log(contador2);

const numb1 = 10;
const numb2 = parseInt('5.2'); // parseInt converte o que ta dentro da string para um número inteiro e retorna um valor numérico
console.log(numb1 + numb2);
console.log(typeof numb2);

const numb3 = 10;
const numb4 = parseFloat('5.2'); // parseFloat converte o que ta dentro da string para um número com as casas decimais e retorna um valor numérico
console.log(numb3 + numb4);
console.log(typeof numb4);

const numb5 = 10;
const numb6 = Number('5.2'); // Number converte o que ta dentro da string para um número como for e retorna um valor numérico
console.log(numb5 + numb6);
console.log(typeof numb6);