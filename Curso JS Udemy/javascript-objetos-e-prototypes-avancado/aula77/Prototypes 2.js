/*
Javascript é baseado em protótipos para passar propriedades
e métodos de um objeto par outro.

Definição de protótipo:
Protótipo é o termo usado para referir ao que foi criado
pela primeira vez, servindo de moledo ou molde para futuras
produções.

Todos os objetos tem uma referência interna para um 
protótipo (_proto_) que vem da propriedade prototype da 
funçãoconstrutora que foi usada para criá-lo.
Quando tentamos acessar um membro de um objeto e depois 
a cadeia de protótipos é usada até o topo (null) até
encontra (ou não) tal membro.
*/

// Prototype é um objeto que já está aumaticamente
// atrelado na função construtora
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Luís', 'Piúma'); // <-- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'Gizé'); // <-- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);
