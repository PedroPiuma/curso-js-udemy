// A classe é um molde que cria novas objetos
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de instância
    // trocaPilha() {}

    //Método estático  | Estático é chamado apenas pela classe pai, no caso ControleRemoto
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
