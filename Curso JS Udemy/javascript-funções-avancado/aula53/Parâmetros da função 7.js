// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que são enviados para os argumentos
// ... é rest operator : sempre tem que ser o último
const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments);
};
conta('/', 1, 20, 30, 40, 50);