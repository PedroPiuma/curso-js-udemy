// array
const nomes = ['Luís', 'Pedro', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('........................');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('........................');


for (let valor of nomes) {
    console.log(valor);
}

console.log('........................');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

console.log('........................');

const pessoa = {
    nome: 'Luís',
    sobrenome: 'Piúma'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retornar o índice ou chave (strings, array ou objetos)
// For of - Retornar o valor em si (iteráveis, array ou strings)