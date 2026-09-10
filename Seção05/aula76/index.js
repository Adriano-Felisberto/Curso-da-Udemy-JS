/*
====================================================

HERANÇA

====================================================

• Herança permite que um objeto aproveite
  propriedades e métodos de outro objeto.

• No JavaScript, a herança é baseada em
  PROTÓTIPOS.

• Podemos fazer uma Constructor Function
  herdar os métodos de outra através da
  cadeia de protótipos.

• Neste exemplo:

    Produto
       ↑
    Camiseta

    Produto
       ↑
     Caneca

• Camiseta e Caneca herdam os métodos
  existentes em Produto.prototype.

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION Produto
// → Será a base para outras Constructor Functions
// ==================================================

const Produto = function(nome, preco) {

    this.nome = nome;

    this.preco = preco;

};


// ==================================================
// MÉTODO AUMENTO
// → Adiciona uma quantia ao preço
// → Está no prototype de Produto
// ==================================================

Produto.prototype.aumento = function(quantia) {

    this.preco += quantia;

};


// ==================================================
// MÉTODO DESCONTO
// → Subtrai uma quantia do preço
// → Está no prototype de Produto
// ==================================================

Produto.prototype.desconto = function(quantia) {

    this.preco -= quantia;

};


// ==================================================
// CONSTRUCTOR FUNCTION Camiseta
// → Camiseta irá herdar de Produto
// ==================================================

const Camiseta = function(nome, preco, cor) {

    // → Chama a Constructor Function Produto
    // → Define nome e preco no objeto atual
    Produto.call(this, nome, preco);

    this.cor = cor;

};


// ==================================================
// HERANÇA DO PROTOTYPE
// → Camiseta.prototype passa a herdar de
//   Produto.prototype
// ==================================================

Camiseta.prototype = Object.create(Produto.prototype);


// ==================================================
// CONSTRUCTOR
// → Corrige a referência do constructor
// → Depois da atribuição acima, o prototype de
//   Camiseta passa a ter Produto como constructor
// ==================================================

Camiseta.prototype.constructor = Camiseta;


// ==================================================
// SOBRESCRITA DE MÉTODO
// → Camiseta possui sua própria versão de aumento()
// → Esse método substitui a versão herdada de Produto
// ==================================================

Camiseta.prototype.aumento = function(percentual) {

    this.preco =
        this.preco + (this.preco * (percentual / 100));

};


// ==================================================
// CONSTRUCTOR FUNCTION Caneca
// → Também irá herdar de Produto
// ==================================================

function Caneca(nome, preco, material, estoque) {

    // → Reutiliza nome e preco de Produto

    Produto.call(this, nome, preco);


    // → Define material no objeto atual

    this.material = material;


    // ==================================================
    // GETTER E SETTER DE estoque
    // → Controla o acesso e a alteração do estoque
    // ==================================================

    Object.defineProperty(this, 'estoque', {

        enumerable: true,

        configurable: false,


        // ==================================================
        // GET
        // → Executado ao acessar:
        //
        //     caneca.estoque
        // ==================================================

        get: function() {

            return estoque;

        },


        // ==================================================
        // SET
        // → Executado ao alterar:
        //
        //     caneca.estoque = 10
        // ==================================================

        set: function(valor) {

            // → Só permite valores do tipo number

            if (typeof valor !== 'number') return;

            estoque = valor;

        }

    });

}


// ==================================================
// HERANÇA DA CANECA
// → Caneca.prototype herda de Produto.prototype
// ==================================================

Caneca.prototype = Object.create(Produto.prototype);


// ==================================================
// CONSTRUCTOR
// → Corrige a referência do constructor
// ==================================================

Caneca.prototype.constructor = Caneca;


// ==================================================
// CRIANDO PRODUTO
// ==================================================

const produto = new Produto('gen', 111);


// ==================================================
// CRIANDO CAMISETA
// ==================================================

const camiseta = new Camiseta(
    'regata',
    7.5,
    'preta'
);


// → Camiseta possui seu próprio aumento()
// → O método utiliza porcentagem

camiseta.aumento(10);

console.log(camiseta);


// ==================================================
// CRIANDO CANECA
// ==================================================

const caneca = new Caneca(
    'caneca',
    13,
    'plastico',
    5
);


console.log(caneca.estoque);

console.log(caneca);


/*
====================================================

COMO A HERANÇA FUNCIONA

====================================================

• Camiseta foi criada utilizando:

    new Camiseta()

• Seu prototype é:

    Camiseta.prototype

• Camiseta.prototype possui como protótipo:

    Produto.prototype

• Portanto, se um método não for encontrado
  em Camiseta, o JavaScript procura em
  Produto.prototype.

Cadeia:

    camiseta
        ↓
    Camiseta.prototype
        ↓
    Produto.prototype
        ↓
    Object.prototype
        ↓
    null

====================================================


Produto.call(this, nome, preco)

====================================================

• `call()` permite executar Produto utilizando
  outro objeto como `this`.

Exemplo:

    Produto.call(this, nome, preco);

• Isso permite reutilizar a inicialização
  de Produto dentro de Camiseta e Caneca.

• Dessa forma:

    this.nome = nome;
    this.preco = preco;

  são executados no objeto que está sendo criado.

====================================================


Object.create(Produto.prototype)

====================================================

• Cria um novo objeto utilizando
  Produto.prototype como protótipo.

Quando fazemos:

    Camiseta.prototype =
        Object.create(Produto.prototype);

Temos:

    Camiseta.prototype
          ↓
    Produto.prototype

• Isso cria a relação de herança entre
  Camiseta e Produto.

====================================================


SOBRESCRITA DE MÉTODO

====================================================

• Camiseta herda:

    Produto.prototype.aumento


• Porém, criamos:

    Camiseta.prototype.aumento

• Quando fazemos:

    camiseta.aumento(10);

  o JavaScript encontra primeiro o método
  em Camiseta.prototype.

• Portanto, o método de Produto não é utilizado.

====================================================


constructor

====================================================

• Depois de:

    Camiseta.prototype =
        Object.create(Produto.prototype);

  o prototype de Camiseta passa a ser um objeto
  baseado em Produto.prototype.

• Por isso corrigimos:

    Camiseta.prototype.constructor = Camiseta;

• O mesmo acontece com Caneca.

====================================================


CANeca x PRODUTO

====================================================

• Caneca também herda de Produto.

Cadeia:

    caneca
       ↓
    Caneca.prototype
       ↓
    Produto.prototype
       ↓
    Object.prototype
       ↓
    null

• Por isso Caneca pode utilizar:

    caneca.aumento()

    caneca.desconto()

  mesmo sem esses métodos terem sido definidos
  diretamente em Caneca.

====================================================


RESUMO IMPORTANTE

====================================================

• Herança

  → Permite reutilizar propriedades e métodos.


• Produto

  → Constructor Function base.


• Camiseta

  → Herda de Produto.


• Caneca

  → Herda de Produto.


• Produto.call()

  → Reutiliza a inicialização da Constructor Function.


• Object.create()

  → Cria a relação entre os prototypes.


• prototype.constructor

  → Corrige a referência do constructor após
    substituir o prototype.


• Sobrescrita

  → Uma classe/Constructor Function filha pode
    criar sua própria versão de um método herdado.


⚠️ A herança acontece através da cadeia de
   protótipos, não porque Camiseta ou Caneca
   recebem uma cópia dos métodos de Produto.

====================================================
*/