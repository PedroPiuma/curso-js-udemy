// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que são enviados para os argumentos
// ... é rest operator : sempre tem que ser o último
// não existe arguments em arrow function tipo console.log(arguments) não funciona 
const conta = (...args) => {
    console.log(args);
};
conta('/', 1, 20, 30, 40, 50);