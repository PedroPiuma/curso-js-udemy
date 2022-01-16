/*
Primitos (imutáveis) - string, number, boolean, 
undefined, null (bigint, symbol)
*/
//          0123 
/*
let nome = 'Luís';
nome[0] = 'R'; // string imutável
console.log(nome[0]);
*/
/*
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa'; // b continua sendo A
console.log(a, b);
*/

/*
Referência (mutável) - array, object, function
passados por referência
*/
// nessa caso não é uma cópia, aponta p mesmo local da memória, pq array é mutável
let a = [1, 2, 3];
let b = a; // não é uma cópia
let c = [...a]; // isso é uma cópia
console.log(a, b, c);

a.push(4); // b também muda
console.log(a, b, c);

b.pop(); // a também muda
console.log(a ,b); 


const pessoa = {
    nome: 'Luís',
    sobrenome: 'Pedro'
};
const pessoa3 = {...pessoa}; // cópia
const pessoa2 = pessoa; // passado por referência
pessoa.nome = 'João'; // Luís para João
console.log(pessoa2);

console.log(pessoa3);

// Valores primitios são copiados
// Valores mutáveis são passados por referência