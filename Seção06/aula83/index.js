/*
====================================================

HERANÇA COM CLASSES

====================================================

• Uma classe pode herdar propriedades e métodos
  de outra classe através da palavra-chave extends.

• A classe que fornece as propriedades e métodos
  é chamada de classe PAI.

• A classe que recebe esses recursos é chamada
  de classe FILHA.

• A palavra-chave super() chama o constructor
  da classe PAI.

• Quando uma classe FILHA possui um constructor(),
  é obrigatório utilizar super() antes de utilizar
  o this.

====================================================
*/


// ==================================================
// CLASSE PAI
// → Classe base para os dispositivos eletrônicos
// ==================================================

class DispositivoEletronico {

    constructor(nome) {

        this.nome = nome;

        this.ligado = false;

    }


    // ==================================================
    // MÉTODO LIGAR
    // → Altera o estado do dispositivo para ligado
    // ==================================================

    ligar() {

        if (this.ligado) return `${this.nome} está ligado`;

        this.ligado = true;

    }


    // ==================================================
    // MÉTODO DESLIGAR
    // → Altera o estado do dispositivo para desligado
    // ==================================================

    desligar() {

        if (!this.ligado) return `${this.nome} está desligado`;

        this.ligado = false;

    }

}


// ==================================================
// CLASSE SMARTPHONE
// → Herda de DispositivoEletronico
// → Adiciona cor e modelo
// ==================================================

class Smartphone extends DispositivoEletronico {

    constructor(nome, cor, modelo) {

        // → Chama o constructor da classe PAI
        // → Inicializa a propriedade nome

        super(nome);

        this.cor = cor;

        this.modelo = modelo;

    }

}


// ==================================================
// CLASSE TABLET
// → Herda de DispositivoEletronico
// → Adiciona a propriedade wifi
// ==================================================

class Tablet extends DispositivoEletronico {

    constructor(nome, wifi) {

        super(nome);

        this.wifi = wifi;

    }


    // ==================================================
    // SOBRESCRITA DO MÉTODO LIGAR
    // → Substitui o comportamento herdado da classe PAI
    // ==================================================

    ligar() {

        console.log('Olha, você alterou o método ligar');

    }


    // ==================================================
    // MÉTODO FALA OI
    // → Método exclusivo da classe Tablet
    // ==================================================

    falaOi() {

        console.log('oi');

    }

}


// ==================================================
// INSTÂNCIA DA CLASSE PAI
// ==================================================

const d1 = new DispositivoEletronico('Smartphone');

d1.ligar();

console.log(d1);

d1.desligar();

console.log(d1);


// ==================================================
// INSTÂNCIA DA CLASSE SMARTPHONE
// → Smartphone herda de DispositivoEletronico
// ==================================================

const s1 = new Smartphone(
    'Samsung',
    'preto',
    'Galaxy S10'
);

console.log(s1.ligado);

console.log(s1);


// ==================================================
// INSTÂNCIA DA CLASSE TABLET
// ==================================================

const t1 = new Tablet('iPad', true);

console.log(t1.ligado);


// ==================================================
// MÉTODO SOBRESCRITO
// → Tablet possui sua própria versão de ligar()
// ==================================================

t1.ligar();


// ==================================================
// MÉTODO EXCLUSIVO DO TABLET
// ==================================================

t1.falaOi();