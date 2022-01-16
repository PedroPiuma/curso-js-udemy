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

// Promise.resolve:
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else esperaAi('Baixei a página', 3000);
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));