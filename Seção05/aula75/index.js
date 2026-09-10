/*
====================================================

MANIPULANDO PROTÓTIPOS

====================================================

• Podemos manipular diretamente o protótipo de
  um objeto utilizando métodos do Object.

• Principais métodos utilizados:

  → Object.setPrototypeOf()

  → Object.create()

• Também podemos adicionar métodos diretamente
  ao prototype de uma Constructor Function.

====================================================
*/


// ==================================================
// OBJETO A
// → Objetos literais possuem Object.prototype
//   como protótipo por padrão
// ==================================================

const objA = {

    chaveA: 'A'

};

console.log(
    objA.__proto__ === Object.prototype
);
// → true


// ==================================================
// OBJETO B
// → Alterando o protótipo de objB
// → objA passa a ser o protótipo de objB
// ==================================================

const objB = {

    chaveB: 'B'

};

Object.setPrototypeOf(objB, objA);


// → A propriedade chaveA não existe diretamente
//   em objB
// → O JavaScript encontra em objA

console.log(objB.chaveA);
// → A


// ==================================================
// OBJETO C
// → Criado utilizando new Object()
// ==================================================

const objC = new Object();

objC.chaveC = 'C';


// → Definindo objA como protótipo de objC

Object.setPrototypeOf(objC, objA);


console.log(objC.chaveA);
// → A


// → chaveB não está em objC
// → Também não está em objA
// → Portanto, retorna undefined

console.log(objC.chaveB);
// → undefined


// ==================================================
// CONSTRUCTOR FUNCTION
// ==================================================

const Produto = function(nome, preco) {

    this.nome = nome;

    this.preco = preco;

};


// ==================================================
// MÉTODO NO PROTOTYPE
// → O método é compartilhado pelas instâncias
// → Não é criado individualmente em cada objeto
// ==================================================

Produto.prototype.desconto = function(percentual) {

    this.preco =
        this.preco - (this.preco * percentual / 100);

};


// ==================================================
// MÉTODO NO PROTOTYPE
// ==================================================

Produto.prototype.aumenta = function(percentual) {

    this.preco =
        this.preco + (this.preco * percentual / 100);

};


// ==================================================
// INSTÂNCIA
// → new cria o objeto
// → O prototype da instância será Produto.prototype
// ==================================================

const p1 = new Produto('camiseta', 50);


// → desconto() não está diretamente em p1
// → É encontrado em Produto.prototype

p1.desconto(10);

console.log(p1);


// ==================================================
// OBJETO LITERAL
// ==================================================

const p2 = {

    nome: 'caneca',

    preco: 15

};


// ==================================================
// ALTERANDO O PROTÓTIPO
// → Produto.prototype passa a ser o protótipo de p2
// → p2 poderá acessar os métodos de Produto.prototype
// ==================================================

Object.setPrototypeOf(p2, Produto.prototype);


console.log(p2);


// → O método aumenta() está em Produto.prototype
// → Portanto, p2 consegue acessá-lo

p2.aumenta(10);

console.log(p2);


// ==================================================
// Object.create()
// → Cria um novo objeto utilizando o objeto
//   informado como seu protótipo
// ==================================================

const p3 = Object.create(Object.prototype);


// ⚠️ aumenta() NÃO está em Object.prototype.
//
// Portanto:
//
// p3.aumenta(10);
//
// causaria:
//
// TypeError: p3.aumenta is not a function


// ==================================================
// Object.create() COM Produto.prototype
// ==================================================

// Para que p3 tenha acesso aos métodos de Produto,
// seu protótipo precisa ser Produto.prototype.

const p3Correto = Object.create(Produto.prototype);

p3Correto.nome = 'garrafa';

p3Correto.preco = 30;

p3Correto.aumenta(10);

console.log(p3Correto);


// ==================================================
// Object.create() COM PROPRIEDADES
// → Também podemos criar propriedades diretamente
//   durante a criação do objeto
// ==================================================

const p4 = Object.create(Produto.prototype, {

    tamanho: {

        writable: true,

        configurable: true,

        enumerable: true,

        value: 113

    },

    tamanho2: {

        writable: true,

        configurable: true,

        enumerable: true,

        value: 42

    },

});


console.log(p4);


/*
====================================================

Object.setPrototypeOf()

====================================================

• Permite alterar o protótipo de um objeto
  depois que ele já foi criado.

Exemplo:

    Object.setPrototypeOf(objB, objA);

→ objA passa a ser o protótipo de objB.

Cadeia:

    objB
      ↓
    objA
      ↓
    Object.prototype
      ↓
    null

====================================================


Object.create()

====================================================

• Cria um novo objeto utilizando um objeto
  específico como protótipo.

Exemplo:

    const p3 = Object.create(Produto.prototype);

Cadeia:

    p3
     ↓
    Produto.prototype
     ↓
    Object.prototype
     ↓
    null

====================================================


Object.create() COM PROPRIEDADES

====================================================

• Também podemos definir propriedades durante
  a criação do objeto.

Exemplo:

    const p4 = Object.create(Produto.prototype, {

        tamanho: {

            writable: true,

            configurable: true,

            enumerable: true,

            value: 113

        }

    });


• As propriedades utilizam DESCRIPTORS:

  → writable

  → configurable

  → enumerable

  → value

====================================================


HERANÇA POR PROTÓTIPOS

====================================================

• Quando fazemos:

    Object.setPrototypeOf(p2, Produto.prototype);

  p2 passa a conseguir acessar os métodos
  existentes em Produto.prototype.

Exemplo:

    p2.aumenta(10);


Ordem da procura:

    p2
     ↓
    Produto.prototype
     ↓
    Object.prototype
     ↓
    null

====================================================


RESUMO IMPORTANTE

====================================================

• Object.setPrototypeOf()

  → Altera o protótipo de um objeto já existente.


• Object.create()

  → Cria um objeto utilizando um protótipo
    específico.


• Produto.prototype

  → Pode armazenar métodos que serão
    compartilhados pelas instâncias.


• `new Produto()`

  → Cria uma instância cujo protótipo é:

      Produto.prototype


• Object.setPrototypeOf()

    Object.setPrototypeOf(p2, Produto.prototype);

  → Faz p2 utilizar Produto.prototype
    como seu protótipo.


• Object.create()

    Object.create(Produto.prototype);

  → Cria diretamente um objeto que possui
    Produto.prototype como protótipo.


⚠️ O objeto precisa estar ligado ao protótipo
   correto para conseguir acessar seus métodos.

Exemplo:

    Object.create(Object.prototype)

  NÃO permite acessar:

    aumenta()

  porque aumenta() está em:

    Produto.prototype

====================================================
*/