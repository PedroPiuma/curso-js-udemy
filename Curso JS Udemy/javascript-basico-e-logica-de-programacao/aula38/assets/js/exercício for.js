// array de objetos
const elementos = [{
        tag: 'p',
        texto: 'Frase 1'
    },
    {
        tag: 'div',
        texto: 'Frase 2'
    },
    {
        tag: 'footer',
        texto: 'Frase 3'
    },
    {
        tag: 'section',
        texto: 'Frase 4'
    },
];

const container = document.querySelector('.container');

/* container.innerHTML += `<p>Frase 1</p>`;
container.innerHTML += `<div>Frase 2</div>`;
container.innerHTML += `<footer>Frase 3</footer>`;
container.innerHTML += `<section>Frase 4</section>`;
 */

for (let i = 0; i <= elementos.length; i++) {
    if (i === 0) {
        container.innerHTML += `<p>Frase 1</p>`;
    } else if (i === 1) {
        container.innerHTML += `<div>Frase 2</div>`;
    } else if (i === 2) {
        container.innerHTML += `<footer>Frase 3</footer>`;
    } else if (i === 3) {
        container.innerHTML += `<section>Frase 4</section>`;
    } else {
        console.log('Deu ruim');
    }
}