/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar o valor verdadeiro
FALSY
*false
0
'' "" ``
null / undefined
NaN

*/
/* 
function falaOi () {
    return 'Oi';
}

let vaiExecutar = undefined;

console.log(vaiExecutar && falaOi()); */

console.log(0 || false || null || 'Luís Pedro' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

// pegadinha
const a = 0;
const b = null;
const c = 'false'; // Aqui é verdadeiro
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
