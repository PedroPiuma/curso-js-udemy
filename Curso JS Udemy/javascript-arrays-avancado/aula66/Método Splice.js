//              -5      -4          -3      -2          -1
//              0       1           2       3           4       
const nomes = ['Luís', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem, elem2, elem3);

// pop
/* const removidos = nomes.splice(-1, 1);
*/

// shift
/* const removidos = nomes.splice(0, 1);
 */

// push
/* nomes.splice(nomes.length, 0, 'Luís');
 */

// unshift
nomes.slice(0, 0, 'Luís', 'Pedro');
console.log(nomes);