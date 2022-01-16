// return
// Retorna um valor
// Termina a função

// adicionar estilo no body
/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
})
 */


function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luís', 'Pedro');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);