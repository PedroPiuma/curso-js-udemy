const falar = {
falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

// const pessoaPrototype = {...falar, ...comer, ...beber};
// Mesma coisa que o de cima
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
    const p1 = criPessoa('Luís', 'Piúma');
    const p2 = criPessoa('Maria', 'Gizé');
    console.log(p1);
    console.log(p2);
    