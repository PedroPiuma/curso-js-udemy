const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'Luís'; // criando
var nome2 = 'Luís';

var nome2 = 'Pedro';

if (verdadeira) {
    let nome = 'Pedro'; // criando
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Outra coisa';
    }
}

var sobrenome = 'Piúma';
function falaOi() {
    var nome3 = 'Luís';
    console.log(sobrenome);
}
// console.log(nome3); não funciona
falaOi();