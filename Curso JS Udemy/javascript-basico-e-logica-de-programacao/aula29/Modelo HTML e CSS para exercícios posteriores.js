function meuEscopo() {
    const caixaPeso = document.querySelector('.caixadopeso');
    const caixaAltura = document.querySelector('.caixadaaltura');
    const resultado = document.querySelector('.resultado');

    function calculadoraIMC() {
        resultado.innerHTML = `<p>Seu IMC é: ${caixaPeso / (caixaAltura * caixaAltura)}.</p>`;
        return resultado;
    }
}
meuEscopo();