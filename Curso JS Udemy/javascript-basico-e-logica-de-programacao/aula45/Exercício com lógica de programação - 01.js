// Escreva uma função que recebe 2 números e retorne o maior deles

// tentativa 1
/* function returnBiggerNumber(a, b) {
    if (a > b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

returnBiggerNumber(7, 8); */

// jeito 2
/* function returnBiggerNumber(a, b) {
    return a > b ? a : b;
}
console.log(returnBiggerNumber(10, 20));
 */

// jeito 3
/* const returnBiggerNumber = (a, b) => {
    return a > b ? a : b;
}
console.log(returnBiggerNumber(10, 20));
 */

// jeito 4
const returnBiggerNumber = (a, b) => a > b ? a : b;
console.log(returnBiggerNumber(10, 20));
