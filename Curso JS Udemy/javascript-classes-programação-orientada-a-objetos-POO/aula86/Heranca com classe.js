class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Chama o construtor da classe pai e executa todo código
        // Específicos do Smartphone
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    // métodos podem ser sobrescritos
    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.falaOi();
console.log(t1);