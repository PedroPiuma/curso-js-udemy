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
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

// race
// sempre entrega o primeiro resolvido
Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });