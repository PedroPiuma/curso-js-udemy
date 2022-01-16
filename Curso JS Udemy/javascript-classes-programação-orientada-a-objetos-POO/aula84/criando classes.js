// Classes já fazem o prototype aumaticamente
// classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

// função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
};


// p1 classe
const p1 = new Pessoa('Luís', 'Piúma');
// p2 função construtora
const p2 = new Pessoa2('Maria', 'Piúma');
// analisar no navegador
