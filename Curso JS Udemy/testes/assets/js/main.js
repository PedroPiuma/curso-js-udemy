// D 100
// A 97 
// W 119
// S 115

const botaoUm = document.querySelector('.btn-esquerdo');
const botaoDois = document.querySelector('.btn-cima');
const botaoTres = document.querySelector('.btn-direito');
const botaoQuatro = document.querySelector('.btn-baixo');

function capturaEvento() {
    botaoUm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('1');
    });
    botaoDois.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('2');

    });
    botaoTres.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('3');

    });
    botaoQuatro.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('4');

    });
}

capturaEvento();