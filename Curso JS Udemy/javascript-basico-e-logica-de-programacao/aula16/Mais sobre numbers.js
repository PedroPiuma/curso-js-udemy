// IEEE 754 - 2008 

let num1 = 1500; // number
let num2 = 2.58791; // number

console.log(num1.toString() + num2); // toString faz um number parecer uma string temperorário
console.log(typeof num1); // continua sendo um número
console.log(num1.toString(2)); // representação binária
console.log(num2.toFixed(3)); // arrendonda o número em 3 casas decimais
console.log(Number.isInteger(num1)); // vai retornar se o número é inteiro ou não

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // se essa conta for NaN retona true (sempre que a conta for inválida), not a number.

let num3 = 0.7; // number
let num4 = 0.1; // number

num3 += num4; // num3 = num3 + num4 (0.8)
num3 += num4; // num3 = num3 + num4 (0.9)
num3 += num4; // num3 = num3 + num4 (1.0)

console.log(num3); // (1.0) porém 0.99999
// para resolver 
//num3 = num3.toFixed(2);
console.log(num3);
// porém não verdade
console.log(Number.isInteger(num3)); // não é inteiro porque checou os binários

// para resolver mesmo
num3 = parseFloat(num3.toFixed(2)); // também dá pra usar Number
console.log(num3); // é 1
console.log(Number.isInteger(2)); // é inteiro true

// também se pode fazer com contas
let num5 = 0.7;
let num6 = 0.1;
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.9
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 1
console.log(num5);
console.log(Number.isInteger(num5));
