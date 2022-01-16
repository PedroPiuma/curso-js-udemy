const numero = Number(prompt('Digite um número:')); // Uma string digitada para salvar como number na const

const numeroTitulo = window.document.getElementById('numero-titulo'); // buscou elemento pelo id
const texto = document.getElementById('texto'); // busco elemento pelo id

numeroTitulo.innerHTML = numero; // alterou o elemento de id específico para ser igual ao numero
texto.innerHTML = ' '; // limpou o texto do elemento
texto.innerHTML += `<p>Seu número -2 é ${numero -2}.</p>`; // com += se adicionou mais o paragrafo
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arrendodado para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}.</p>`;

