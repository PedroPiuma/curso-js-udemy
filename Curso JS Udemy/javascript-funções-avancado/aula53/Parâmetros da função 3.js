// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que são enviados para os argumentos

function funcao(a, b = 2, c = 4) {
//    b = b || 0;
    console.log(a + b + c);
}
funcao(2, 10);