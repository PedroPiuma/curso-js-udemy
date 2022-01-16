/* 

Operadores de comparação:
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estritra (valor e tipe)
!= diferente (valor)
!== (valor e tipo)

*/

console.log(10 > 5); // óbvio

const num1 = 10; // number
const num2 = '10'; // string
// comparou number com string e disse que é true!?
const comp = num1 == num2; // não é recomendado usar ==
console.log(comp);
// Por isso se utiliza === ou !==
const num3 = 10;
const num4 = '10';
const comp2 = num3 === num4; // agora sim diz que é false
console.log(comp2);

