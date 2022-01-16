// objetos é com chaves
const pessoa = {
    nome: 'Luís',
    sobrenome: 'Piúma',
    idade: 22,
    endereco: {
        rua: 'Venâncio Aires',
        numero: 590
    }
}

// atribuição via desestruturação
const {nome, sobrenome, idade, endereco: { rua, numero}} = pessoa;
console.log(nome, sobrenome, idade, rua, numero);