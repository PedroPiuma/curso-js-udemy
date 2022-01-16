/*
function soma(x, y) { // 2 valores
    const resultado = x + y; // protegido, não é possível acessar ou alterar
    return resultado; // encerra a função
}
/*
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));
*/
/*
console.log(soma(2, 2));
console.log(soma('Luís', ' Pedro'));
*/

// const raiz = function(n) {
// Outra maneira é com arrow function usando =>
const raiz = (n) => { // igual a funciont (n)
    return n ** 0.5; // raiz quadrada
};

// Ainda + simplificado é
// const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
