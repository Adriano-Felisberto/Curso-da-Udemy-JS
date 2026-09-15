/*
====================================================

GETTERS E SETTERS EM CLASSES

====================================================

• Getter

  → Permite acessar um método como se fosse uma
    propriedade.

• Setter

  → Permite definir ou alterar um valor através
    de uma atribuição.

• Getters e setters podem ser utilizados para
  controlar o acesso e a alteração de propriedades.

====================================================
*/


// ==================================================
// SYMBOL
// → Cria uma chave única para a propriedade
// → Utilizado neste exemplo para simular uma
//   propriedade privada
// ==================================================

const _velocidade = Symbol('velocidade');


// ==================================================
// CLASSE CARRO
// ==================================================

class Carro {

    constructor(nome, velocidade) {

        this.nome = nome;

        this[_velocidade] = 0;

    }


    // ==================================================
    // SETTER VELOCIDADE
    // → É executado quando tentamos atribuir um valor
    //   através de c1.velocidade = valor
    // ==================================================

    set velocidade(valor) {

        console.log('SETTER');

        if (typeof valor !== 'number') return;

        if (valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor;

    }


    // ==================================================
    // GETTER VELOCIDADE
    // → É executado quando acessamos c1.velocidade
    // → Permite obter o valor da velocidade
    // ==================================================

    get velocidade() {

        console.log('GETTER');

        return this[_velocidade];

    }


    // ==================================================
    // MÉTODO ACELERAR
    // → Aumenta a velocidade em 1
    // → Impede que a velocidade ultrapasse 100
    // ==================================================

    acelerar() {

        if (this[_velocidade] >= 100) return;

        this[_velocidade]++;

    }


    // ==================================================
    // MÉTODO FREIAR
    // → Diminui a velocidade em 1
    // → Impede que a velocidade fique abaixo de 0
    // ==================================================

    freiar() {

        if (this.velocidade <= 0) return;

        this[_velocidade]--;

    }

}


// ==================================================
// INSTÂNCIA DO CARRO
// ==================================================

const c1 = new Carro('Fusca');


// ==================================================
// TESTANDO ACELERAÇÃO
// → Mesmo executando 200 vezes, a velocidade
//   não ultrapassa 100
// ==================================================

for (let i = 0; i <= 200; i++) {

    c1.acelerar();

}


console.log(c1);


// ==================================================
// TESTANDO O SETTER
// → Tenta alterar a velocidade através do setter
// → Valores iguais ou superiores a 100 são ignorados
// ==================================================

c1.velocidade = 2000;

console.log(c1);


// ==================================================
// TESTANDO O GETTER
// → Acessa a velocidade como uma propriedade
// → Não é necessário utilizar ()
// ==================================================

console.log(c1.velocidade);



// ==================================================
// GETTERS E SETTERS COM NOME COMPLETO
// ==================================================

class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;

        this.sobrenome = sobrenome;

    }


    // ==================================================
    // GETTER NOME COMPLETO
    // → Retorna nome e sobrenome juntos
    // → É acessado como uma propriedade
    // ==================================================

    get nomeCompleto() {

        return this.nome + ' ' + this.sobrenome;

    }


    // ==================================================
    // SETTER NOME COMPLETO
    // → Recebe o nome completo
    // → Divide o valor em nome e sobrenome
    // ==================================================

    set nomeCompleto(valor) {

        valor = valor.split(' ');

        this.nome = valor.shift();

        this.sobrenome = valor.join(' ');

    }

}


// ==================================================
// INSTÂNCIA DA PESSOA
// ==================================================

const p1 = new Pessoa('Adriano', 'Felisberto');


// ==================================================
// ACESSANDO O GETTER
// → Não utiliza ()
// → Getter é acessado como uma propriedade
// ==================================================

// console.log(p1.nomeCompleto()); // Não funciona assim

console.log(p1.nomeCompleto);


// ==================================================
// UTILIZANDO O SETTER
// → O valor é atribuído como se fosse uma propriedade
// → O setter separa nome e sobrenome automaticamente
// ==================================================

p1.nomeCompleto = 'Adriano Felisberto dos Santos';

console.log(p1.nomeCompleto);