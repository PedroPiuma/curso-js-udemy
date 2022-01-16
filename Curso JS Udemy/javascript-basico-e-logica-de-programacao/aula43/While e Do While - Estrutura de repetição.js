/* const nome = 'Luís';

let i = 0;

while (i < nome.length) {
    console.log(i);
    i++;
} */

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
// let rand = 10;


// checa a condição antes de executar
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('................');


// primeiro executa o código dps checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);