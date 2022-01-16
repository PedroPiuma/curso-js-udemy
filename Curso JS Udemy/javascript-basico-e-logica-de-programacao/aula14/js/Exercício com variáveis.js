// índices       0123456789
let umaString = "Um \"texto\"";

console.log(umaString[4]); // índice 4 no caso é o t
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.')
console.log(umaString.indexOf('Um')); // onde começa o um
console.log(umaString.lastIndexOf('Um'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/)); // procura onde está o x
console.log(umaString.replace('Um', 'Outra')) // troca um por outra
console.log(umaString.length); // número de caractéres 

console.log(umaString.slice(1,6)); // pedaço
console.log(umaString.slice(-3)); // pode dar a volta

console.log(umaString.split(' ')); // separa retirando os espaços

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());