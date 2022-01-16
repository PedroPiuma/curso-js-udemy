const nome = 'Luís';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Pedro';
    falaNome();
}
usaFalaNome();