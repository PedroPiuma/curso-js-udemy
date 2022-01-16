/*
Operadores lógicos:
&& -> AND -> E  Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

const expressaoOr2 = true || true || false || true;
console.log(expressaoOr2);

// Exemplo como se fosse real
// form usuário digitou
const usuario = 'Luís';
const senha = '123456';
//                      true                 true
const vailogar = usuario === 'Luís' && senha === '123456';
console.log(vailogar);


console.log(!true); // negando o true, então é false
console.log(!false); // negando o false, então é true
console.log(!!true); // negou duas vezes, então voltou a ser true


