const pessoa1 = {
    nome: 'Luís',
    sobrenome: 'Piúma',
    idade: 22,

    fala () { /*sem function*/
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++; // 25 + 1
    }
};
// this se refere no caso ao objeto pessoa1

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
