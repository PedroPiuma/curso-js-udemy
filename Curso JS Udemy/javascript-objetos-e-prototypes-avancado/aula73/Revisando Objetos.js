const pessoa = {
    nome: 'Luís',
    sobrenome: 'Piúma',
};
const chave = 'nome';
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);



const pessoa1 = new Object();
pessoa1.nome = 'Luís';
pessoa1.sobrenome = 'Piúma';
pessoa1.idade = 22;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando nome.`);
};
pessoa1.getDataNascimento = function() {
   const dataAtual = new Date();
   return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(chave);
};



// Factory functions / Constructor functions / Classes
/* function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
          return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luís', 'Piúma');
console.log(p1.nomeCompleto());
 */


function Pessoa(nome, sobrenome) {
    this.nome = nome;  
    this.sobrenome = sobrenome;   

//    Object.freeze(this);
}

// {} <- this -> this
// p1 = (ENDEREÇODEMEMÒRIA) -> 'Valor'
const p1 = new Pessoa('Luís', 'Pedro');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Pedro');
console.log(p1);
console.log(p2);