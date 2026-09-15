/*
====================================================

CLASSES

====================================================

• Classes possuem uma estrutura semelhante às
  Constructor Functions.

• O constructor() é responsável por receber os
  valores e criar as propriedades da instância.

• Os métodos definidos dentro da classe são
  adicionados automaticamente ao prototype.

• Uma classe também pode ser utilizada com
  a palavra-chave new para criar objetos.

====================================================
*/


// ==================================================
// CLASSE PESSOA
// → Utilizando class
// ==================================================

class Pessoa {

    // ==================================================
    // CONSTRUCTOR
    // → Inicializa as propriedades do objeto
    // ==================================================

    constructor(nome, sobrenome) {

        this.nome = nome;

        this.sobrenome = sobrenome;

    }


    // ==================================================
    // MÉTODO FALAR
    // → É adicionado ao prototype da classe
    // ==================================================

    falar() {

        console.log(`${this.nome} está falando`);

    }


    // ==================================================
    // MÉTODO COMER
    // → É adicionado ao prototype da classe
    // ==================================================

    comer() {

        console.log(`${this.nome} está comendo`);

    }


    // ==================================================
    // MÉTODO BEBER
    // → É adicionado ao prototype da classe
    // ==================================================

    beber() {

        console.log(`${this.nome} está bebendo`);

    }

}


// ==================================================
// INSTÂNCIA DA CLASSE
// → new cria um novo objeto baseado na classe
// ==================================================

const p1 = new Pessoa('Adriano', 'Felisberto');

console.log(p1);

console.log(p1.comer());

console.log(p1.falar());

console.log(p1.beber());


// ==================================================
// CONSTRUCTOR FUNCTION
// → Forma tradicional de criar objetos
// → Os métodos podem ser adicionados ao prototype
// ==================================================

const Pessoa2 = function(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

};


// ==================================================
// MÉTODO NO PROTOTYPE
// → O método não fica diretamente dentro da instância
// → É compartilhado através do prototype
// ==================================================

Pessoa2.prototype.falar = function() {

    console.log(`${this.nome} está falando`);

};


// ==================================================
// INSTÂNCIA DA CONSTRUCTOR FUNCTION
// ==================================================

const p2 = new Pessoa2('Ana', 'Luiza');

console.log(p2.falar());