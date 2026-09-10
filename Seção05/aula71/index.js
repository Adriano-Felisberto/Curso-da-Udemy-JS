/*
====================================================

Object.defineProperty() e Object.defineProperties()

====================================================

• Object.defineProperty() permite criar ou modificar
  uma propriedade de um objeto definindo suas
  características

• Object.defineProperties() permite definir várias
  propriedades de uma vez

• Esses métodos permitem controlar como as
  propriedades podem ser utilizadas

====================================================
*/


// ==================================================
// Object.defineProperty()
// → Define UMA propriedade do objeto
// → Permite configurar suas características
// ==================================================

const Produto = function(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {

        enumerable: true,
        // → Define se a propriedade será exibida
        //   em Object.keys() e for...in

        value: estoque,
        // → Define o valor inicial da propriedade

        writable: false,
        // → false = não permite alterar o valor
        // → true  = permite alterar o valor

        configurable: true
        // → true = permite reconfigurar a propriedade
        //   e também permite deletá-la

    });


    // ==================================================
    // RECONFIGURAÇÃO DA PROPRIEDADE
    // → Como configurable está true, podemos
    //   modificar as configurações da propriedade
    // ==================================================

    Object.defineProperty(this, 'estoque', {

        enumerable: true,

        value: estoque,

        writable: true,
        // → Agora o valor pode ser alterado

        configurable: false
        // → Depois de definido como false,
        //   não poderá voltar para true
        // → Também não poderá mais ser deletado
        //   ou reconfigurado
    });


    // ==================================================
    // Object.defineProperties()
    // → Define VÁRIAS propriedades de uma vez
    // ==================================================

    Object.defineProperties(this, {

        nome: {

            enumerable: true,

            value: nome,

            writable: true,

            configurable: true

        },

        preco: {

            enumerable: true,

            value: preco,

            writable: true,

            configurable: true

        }

    });

};


// ==================================================
// CRIAÇÃO DO OBJETO
// → new chama a Constructor Function
// → this passa a representar o novo objeto
// ==================================================

const p1 = new Produto('camiseta', 20, 3);

console.log(p1);


// ==================================================
// ALTERAÇÃO DE VALOR
// → writable: true permite alterar o valor
// ==================================================

p1.estoque = 50000;

console.log(p1);


// ==================================================
// delete
// → configurable: false impede a exclusão
//   da propriedade
// ==================================================

delete p1.estoque;

console.log(p1);


// ==================================================
// Object.keys()
// → Retorna as propriedades enumeráveis
// → enumerable: true permite que apareçam
// ==================================================

console.log(Object.keys(p1));


// ==================================================
// for...in
// → Percorre as propriedades enumeráveis do objeto
// ==================================================

for (let chave in p1) {

    console.log(chave);

}


// ==================================================
// ACESSANDO A PROPRIEDADE
// → estoque é uma propriedade que contém um valor
// → NÃO é uma função/método
// ==================================================

console.log(p1.estoque);


/*
====================================================

DESCRITORES DE PROPRIEDADES

====================================================

• enumerable

  → true  = aparece em Object.keys() e for...in

  → false = não aparece nesses métodos


• value

  → Define o valor da propriedade


• writable

  → true  = permite alterar o valor

  → false = impede alteração do valor


• configurable

  → true  = permite deletar e reconfigurar

  → false = não permite deletar ou reconfigurar


====================================================

⚠️ ATENÇÃO SOBRE configurable

====================================================

• Depois que configurable for definido como false,
  não é possível voltar para true.

• No exemplo:

    configurable: true

  ↓

  A propriedade pode ser reconfigurada.

    configurable: false

  ↓

  A propriedade fica bloqueada para exclusão
  e reconfiguração.

====================================================


RESUMO IMPORTANTE

====================================================

• Object.defineProperty()

  → Define ou modifica UMA propriedade


• Object.defineProperties()

  → Define ou modifica VÁRIAS propriedades


• enumerable

  → Controla se a propriedade será enumerável


• value

  → Define o valor da propriedade


• writable

  → Controla se o valor pode ser alterado


• configurable

  → Controla se a propriedade pode ser
    deletada ou reconfigurada

⚠️ configurable: false não significa que o valor
   não pode ser alterado.

   Se writable for true:

       p1.estoque = 50000;

   → O valor pode ser alterado.

   Porém:

       delete p1.estoque;

   → Não será permitido.

====================================================
*/