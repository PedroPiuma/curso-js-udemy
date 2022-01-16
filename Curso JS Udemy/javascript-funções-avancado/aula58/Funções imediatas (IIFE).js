// IIEE -> Imeediately invoke function expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Piúma';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luís'));
    }
    falaNome();
    console.log(idade, peso, altura);

})(22, 79, 1.76);

const sobrenome = 'Qualquer coisa';