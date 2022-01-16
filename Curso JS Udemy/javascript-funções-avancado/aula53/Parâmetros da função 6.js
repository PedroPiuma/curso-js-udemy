// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que são enviados para os argumentos
// ... é rest operator : sempre tem que ser o último
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 30, 40, 50);