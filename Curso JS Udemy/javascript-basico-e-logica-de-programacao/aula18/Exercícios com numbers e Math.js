const numero = Number(prompt('Digite um número:'));

const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raizQuadrada = document.getElementById('texto2');
const inteiroOrNot = document.getElementById('texto3');
const arrendadoParaBaixo = document.getElementById('texto4');
const arrendadoParaCima = document.getElementById('texto5');
const duasCasasDecimais = document.getElementById('texto6');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número -2 é ${numero -2}.</p>`;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
inteiroOrNot.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
arrendadoParaBaixo.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;
arrendadoParaCima.innerHTML = `<p>Arrendodado para cima ${Math.ceil(numero)}.</p>`;
duasCasasDecimais.innerHTML = `<p> Duas casas decimais: ${numero.toFixed(2)}.</p>`;

