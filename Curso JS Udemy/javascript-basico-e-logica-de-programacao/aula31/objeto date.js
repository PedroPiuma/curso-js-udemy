// precisa ter a palavra new e
// começar com letra maiúscula *Date
/* const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString()); */

// os meses começam do zero
// ano, mes, d, h, M, s, ms
const data = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString());

console.log('.......................................')

// outro formato
const data2 = new Date('2021-12-12 2:36:59.999');
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1); // Mês começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Seg', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('Dia semana', data2.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data2.toString());
console.log(Date.now())

console.log('.......................................')

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);