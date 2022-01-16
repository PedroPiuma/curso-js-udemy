/* console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5'); */


// % resto da divisão 
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(`Linha ${i}`, par);
}

console.log('.................................');

//                 0       1      2 
const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let a = 0; a < frutas.length; a++) {
    console.log(`Ìndice ${a}`, frutas[a]);
}
