// array é uma lista de coisas
//            0123
const nome = 'Luís';
console.log(nome[0]); // dessa maneira seleciona a letra 1

// dentro dos colchete pode colocar qualquer coisa
// separado por vírgulas
const alunos0 = ['Luís', 'Maria', 'João', 1, true, null];
console.log(alunos0);
console.log(alunos0[3]);

// porém não é uma boa prática de programação
// preferível usar apenas um tipe de dado na array

//                0        1        2
const alunos = ['Luís', 'Maria', 'João'];
console.log(alunos); // mostra a lista
console.log(alunos[2]); // mostra o índice 2
alunos[0] = 'Eduardo'; // modifica o índice 0
alunos[3] = 'Luiza'; // adiciona um elemento no array

console.log(alunos.length); // mostra o número de elementos no array


/*
* Da seguinte maneira, criou-se uma const com array;
* Em seguida, as funções a seguir adicionam mais
* um elemento na array
*/
const alunos2 = ['Rafael', 'Silvia', 'Luiza'];
alunos2[alunos2.length] = 'Jorge';
alunos2[alunos2.length] = 'Beatriz';
alunos2[alunos2.length] = 'Neusa';
console.log(alunos2);

// Também é possível adicionar com o comando push
// No fim
const alunos3 = ['Rafael', 'Silvia', 'Luiza'];
alunos3.push('Otávio');
alunos3.push('Bárbara');
console.log(alunos3);

// Para adicionar no começo 
// índices          0         1         2
const alunos4 = ['Rafael', 'Silvia', 'Luiza'];
alunos4.unshift('Fábio'); // adiciona no índice 0
console.log(alunos4);

// Para remover elementos é com pop
const alunos5 = ['Rafael', 'Silvia', 'Luiza'];
const removido = alunos5.pop(); // remove último elemento
console.log(removido); // mostra o removido
console.log(alunos5); // mostra como ficou sem o elemento

// Para remover elementos pelo começo é com shift
const alunos6 = ['Bruna', 'Fabiana', 'Gabriel'];
const removido2 = alunos6.shift(); // remove primeiro elemento
console.log(removido2); // mostra o removido
console.log(alunos6); // mostra como ficou sem o elemento

// Também da pra apagar com delete
const alunos7 = ['Bruna', 'Fabiana', 'Gabriel'];
delete alunos7[1]; // gera um vazio
console.log(alunos7);

// ...              0          1         2             3    4    
const alunos8 = ['Bruna', 'Fabiana', 'Gabriel']; // Luiza, Luiz
alunos8.push('Luiza');
alunos8.push('Luiz');
console.log(alunos.slice(0, 3));
console.log(typeof alunos8);
console.log(alunos8 instanceof Array); // é uma instância de array?



/*
const descreve uma variável que não pode ser 
reatribuída (com o operador de atribuição =). 
    Depois de criá-la, não podemos fazer algo assim:
*const nome = 'luiz';
*nome = 'joão'; // Erro: Assignment to constant variable.

Porém, existe uma diferença entre variável e valor.
Variáveis são como um apelido para um valor, 
uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e 
sustentam determinado tipo. Alguns tipos de valores são imutáveis,
 como number, string, boolean, undefined, null, symbol e bigint 
 (os primitivos todos são imutáveis). Outros tipos são mutáveis,
  como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas 
que sustentam outros valores ou comportamentos internamente. 
Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais 
poderá ser alterado. Nesse caso, além de const não permitir reatribuição,
 o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), 
a variável continua sendo constante, porém os valores dentro do 
objeto poderão ser alterados. Isso acontece porque quando alteramos 
um valor interno de um objeto, não ocorre a reatribuição da variável com 
sinal de atribuição = (a variável continua apontando para o mesmo local na memória),
 apenas a alteração de um valor interno do mesmo objeto.Por este motivo, 
 pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos.
  A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:
    Isso pode:
*const array = [1, 2, 3, 4, 5];
*array.pop();
*array[0] = 1024;
*console.log(array); // [ 1024, 2, 3, 4 ]

    Isso NÃO pode   
*const array = [1, 2, 3, 4, 5];
*array = 'Legal'; // Assignment to constant variable.
*/