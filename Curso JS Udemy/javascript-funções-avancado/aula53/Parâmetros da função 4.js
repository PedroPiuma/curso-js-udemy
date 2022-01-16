// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que são enviados para os argumentos

function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
// let obj = {nome: 'Luís', sobrenome: 'Piúma', idade: 22};
// funcao(obj);
funcao({nome: 'Luís', sobrenome: 'Piúma', idade: 22});