// 705.484.450-52 070.987.720-03
/*


7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
___________________________________
70  0   40  28  48  20  16  15  0   =   237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o dígito for maior que 9, consideramos 0.


7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   5   6   4   3   2
______________________________________
77  0   45  32  56  24  20  20  0   10 = 284

11 - (237 % 11) = 2 (Primeiro dígito)
Se o dígito for maior que 9, consideramos 0.

705.484.450-52 === 705.484.450-52
*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
//console.log(cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0));

/* function converteParaNumero() {
    cpfLimpo = Number(cpfLimpo);
    return cpfLimpo
}
converteParaNumero(); */

//console.log(cpfArray[0]);

/* function multiplica() {

    for(let i = 0; i < 9; i++) {
        let resultadoTotal = 0;

        if (i === 0) {
            resultadoTotal += cpfArray[i] * 10;
        } else if (i === 1 && cpfLimpo[1] !== 0) {
            console.log(cpfLimpo[1]);
            resultadoTotal += cpfArray[i] * 9;
            console.log(resultadoTotal);
        } else if (i === 2) {
            resultadoTotal += cpfArray[i] * 8;
        } else if (i === 3) {
            resultadoTotal += cpfArray[i] * 7;
        } else if (i === 4) {
            resultadoTotal += cpfArray[i] * 6;
        } else if (i === 5) {
            resultadoTotal += cpfArray[i] * 5;
        } else if (i === 6) {
            resultadoTotal += cpfArray[i] * 4;
        } else if (i === 7) {
            resultadoTotal += cpfArray[i] * 3;
        } else if (i === 8) {
            resultadoTotal += cpfArray[i] * 2;
        } else {
            console.log('Erro');
        }
    };

}
multiplica();

 */



function multiplica() {

    function multiplicador() {
        for (let i = 10; i > 1; i--) {
            return i;
        };
    }
    multiplicador();

    function index() {
        for (let a = 0; a < 9; a++) {
            return a;
        };
    }
    index();

    for(valor of multiplicador()) {
        console.log(valor);
    }
    let resultadoTotal = 0;
    resultadoTotal = cpfArray[index] * m;
    console.log(resultadoTotal);
}
multiplica();