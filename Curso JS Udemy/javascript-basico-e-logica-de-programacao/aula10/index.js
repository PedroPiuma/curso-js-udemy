// String, number, undefined, null, boolean, symbol. São os dados primitivos.

const nome = 'Luís'; // string
const nome1 = "Luís"; // string
const nome2 = `Luís`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined, recebe esse valor automático. Não aponta pra local nenhum da memória.
const sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhum da memória.

// valores booleanos 
const aprovado = true; // Boolean = true ou false (valor lógico)

console.log(typeof num1, num1);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

let a = [1, 2]; // array
const b = a;

console.log(a, b);

b.push(3); // adicionado valor em b. foi adicionado também no a porque apontam para mesmo local da memória.
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d); // 2, 2

c = 3
console.log(c, d); // 3, 2