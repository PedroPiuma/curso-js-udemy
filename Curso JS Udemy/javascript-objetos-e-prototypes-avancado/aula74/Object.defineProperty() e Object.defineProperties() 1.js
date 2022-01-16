// defineProperty -> defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
delete p1.estoque; // não funciona com o configurable false
console.log(p1);
console.log(Object.keys(p1)); // tem como ver pq enumerable está true

for(let chave in p1) {
    console.log(chave);
}