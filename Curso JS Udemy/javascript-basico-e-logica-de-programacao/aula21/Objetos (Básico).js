/*
const array = [1, 2, 3];
array.push(4); // adiciona o valor 4 ao fimda array
array[0] = 'Luís';
console.log(array);
*/
// uma const para cada muito chato
/*
const nome01 = 'Luís';
const sobrenome01 = 'Piúma';
const idade01 = 22;

const nome02 = 'Luísa';
const sobrenome02 = 'Fulana';
const idade02 = 18;
*/
// [] é array
// {} é objeto
// Da seguinte maneira também precisaria
// criar vários objetos para cada pessoa
/*
const pessoa1 = {
    nome: 'Luís',
    sobrenome: 'Piúma',
    idade: 22
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Fulana',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/
// Com funcção é melhor
// Argumento é o valor passado para o parâmetro
function criaPessoa (nome, sobrenome, idade)/*<-parâmetro*/ {
    return {/* essas chaves indica criação de objetos*/
        nome: nome, // repetido pode usar só nome, invés de nome: nome,
        sobrenome: sobrenome, // repetido pode usar só sobrenome, ...
        idade: idade // repetido pode usar só idade, ...
    }   // ficaria tipo: return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luís', 'Piúma', 22)/*<-argumento*/;
const pessoa2 = criaPessoa('Maria', 'Oliveira', 21)/*<-argumento*/;
const pessoa3 = criaPessoa('João', 'Moreira', 20)/*<-argumento*/;
const pessoa4 = criaPessoa('Junior', 'Lara', 18)/*<-argumento*/;
const pessoa5 = criaPessoa('Jean', 'Jasni', 12)/*<-argumento*/;

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);

