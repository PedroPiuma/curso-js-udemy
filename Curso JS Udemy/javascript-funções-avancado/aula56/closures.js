function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luís');
const funcao2 = retornaFuncao('Pedro');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());