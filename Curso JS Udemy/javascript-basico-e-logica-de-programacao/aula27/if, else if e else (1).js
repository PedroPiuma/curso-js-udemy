/* 
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

// If pode ser usado sozinho
// Sempre que utiliza a palavra else, precisa de um if antes
// Pode ter no sistema quantos else ifs precisar
// Só pode ter um else na checagem
// Pode usar condições só com if e else, sem else if

const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Bom tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
};