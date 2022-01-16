// Factory function (Function fábrica)
// Constructor function (Função construtura)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luís', 'Pedro', 1.76, 80);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p1.fala('falando sobre JS'));
console.log(p1.nome);
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc());