/*
====================================================

FACTORY FUNCTION + PROTOTYPE + COMPOSIÇÃO / MIXIN

====================================================

• Factory Function

  → Função responsável por criar e retornar objetos.

• Prototype

  → Os métodos são armazenados em um objeto separado
    e compartilhados através da cadeia de protótipos.

• Composição / Mixin

  → Permite combinar comportamentos de diferentes
    objetos em um único prototype.

====================================================
*/


// ==================================================
// OBJETO FALAR
// → Define o comportamento de falar
// ==================================================

const falar = {

    fala() {

        console.log(`${this.nome} está falando`);

    },

};


// ==================================================
// OBJETO COMER
// → Define o comportamento de comer
// ==================================================

const comer = {

    comer() {

        console.log(`${this.nome} está comendo`);

    },

};


// ==================================================
// OBJETO BEBER
// → Define o comportamento de beber
// ==================================================

const beber = {

    beber() {

        console.log(`${this.nome} está bebendo`);

    },

};


// ==================================================
// COMPOSIÇÃO DOS COMPORTAMENTOS
// → Object.assign() copia os métodos dos objetos
//   para um novo objeto
// → Esse objeto será utilizado como prototype
// ==================================================

// const pessoaPrototype = {...falar, ...comer, ...beber}

const pessoaPrototype = Object.assign({}, falar, comer, beber);


// ==================================================
// FACTORY FUNCTION
// → Cria e retorna novos objetos
// → Object.create() define o prototype do objeto
// ==================================================

const criaPessoa = function(nome, sobrenome) {

    return Object.create(pessoaPrototype, {

        nome: {
            value: nome
        },

        sobrenome: {
            value: sobrenome
        }

    });

};


// ==================================================
// CRIAÇÃO DE OBJETOS
// ==================================================

const p1 = criaPessoa('Adriano', 'Felisberto');

console.log(p1.beber());


const p2 = criaPessoa('Ana', 'Luiza');

console.log(p2.beber());