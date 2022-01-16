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
if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then(() => {
    console.log('Eu serei o último a ser exibido.')
})
// catch é erro
.catch(e => {
    console.log('ERRO', e);
});

console.log('Isso será exibido antes de qualquer promise')