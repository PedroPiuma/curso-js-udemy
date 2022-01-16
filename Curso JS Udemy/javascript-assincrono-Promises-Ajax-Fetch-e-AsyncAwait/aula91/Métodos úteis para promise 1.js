function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    // cria promise usando construtor da promise
    // recebe dois parametros
    // resolve resolve a promise
    // reject vai direto pro catch
    return new Promise((resolve, reject) => {
        // se o parametro foi diferente de string reijeita
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
// Métodos:
// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 1', 500),
    esperaAi('Promise 1', 1000),
   // esperaAi(1000, 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });