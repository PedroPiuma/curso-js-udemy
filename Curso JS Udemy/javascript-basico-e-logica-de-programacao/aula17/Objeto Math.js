let num1 = 9.54578;
let num2 = Math.floor(num1); // arredondando para baixo
console.log(num2);

let num3 = Math.ceil(num1); // arredonda para cima
console.log(num3);

let num4 = Math.round(num1); // arredonda para o mais próximo
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // retonar o maior número da sequência
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // retonar o menor número da sequência
console.log(Math.random()); // gera um número aleatório
// pode se fazer também da seguinte maneira
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
// arredondado com aleatorio sempre entre 5 e 10.
console.log(aleatorio);

console.log(Math.PI); // número de pi
console.log(Math.pow(2, 10)); // 2 elevado a 10
console.log(2 ** 10); // 2 elevado a 10, de modo fácil

console.log(num1 ** (1/2)); // raiz quadrada
// ou
console.log(num1 ** 0.5); 

console.log(100 / 0); // em JavaScript pode dividir por 0
// retorna o valor infinity


