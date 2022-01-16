/*
Luís Pedro Piúma tem 22 anos, pesa 79 kg
tem 1.8 de altura e seu IMC é de 25....
Luís Pedro nasceu em 1999.
*/

const nome = 'Luís Pedro';
const sobrenome = 'Piúma';
const idade = 22;
const peso = 79;
const alturaEmM = 1.76;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura*altura)
let anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, "de altura e seu IMC é de", indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento + '.'); // +

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`)
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
/*
maneira mais moderna usando cifrão e chaves
*/