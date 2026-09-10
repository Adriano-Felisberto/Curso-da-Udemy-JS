/*
====================================================

PROTOTYPES

====================================================

• JavaScript é baseado em PROTÓTIPOS.

• Protótipos permitem que objetos compartilhem
  propriedades e métodos através de uma
  CADEIA DE PROTÓTIPOS.

• Protótipo é o termo utilizado para se referir
  a algo que serve como modelo ou base para
  outras estruturas.

• Todo objeto possui internamente uma referência
  para um protótipo.

• Essa referência pode ser acessada através
  de __proto__.

• Quando tentamos acessar uma propriedade ou método,
  o JavaScript:

  1. Procura primeiro no próprio objeto.

  2. Caso não encontre, procura no protótipo.

  3. Continua percorrendo a cadeia de protótipos.

  4. A procura termina quando encontra o membro
     ou chega em null.

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION
// → Pode ser utilizada como um "molde" para criar
//   novas instâncias através do operador new
// ==================================================

const Pessoa = function(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {

        return this.nome + ' ' + this.sobrenome;

    };

};


// ==================================================
// PROTOTYPE
// → Toda função construtora possui a propriedade
//   prototype
// → Podemos adicionar propriedades e métodos
//   ao prototype
// → As instâncias poderão acessar esses membros
//   através da cadeia de protótipos
// ==================================================

Pessoa.prototype.estouAqui = 'hahaha';

Pessoa.prototype.nomeCompleto = function() {

    return this.nome + ' ' + this.sobrenome;

};


// ==================================================
// ORDEM DA PROCURA
// → O JavaScript procura primeiro na instância
// → Depois no seu protótipo
// → Depois nos protótipos seguintes
// → Até chegar em null
// ==================================================

// p1
//  ↓
// Pessoa.prototype
//  ↓
// Object.prototype
//  ↓
// null


// ==================================================
// INSTÂNCIAS
// → new cria novos objetos através da
//   Constructor Function
// ==================================================

const p1 = new Pessoa('Luiz', 'A');

const p2 = new Pessoa('Maria', 'A');

const data = new Date();


// ==================================================
// EXIBIÇÃO DOS OBJETOS
// ==================================================

console.log(p1);

console.log(p2);

console.log(data);


// ==================================================
// PROPRIEDADE DO PROTOTYPE
// → estouAqui não foi criada diretamente
//   dentro de p1 ou p2
// → Ela está em Pessoa.prototype
// → O JavaScript encontra através da
//   cadeia de protótipos
// ==================================================

console.log(p1.estouAqui);

console.log(p2.estouAqui);


// ==================================================
// prototype x __proto__
// ==================================================

console.log(
    Pessoa.prototype === p1.__proto__
);


// → Retorna true
//
// Pessoa.prototype
//        ↓
// É o protótipo de p1
//
// p1.__proto__
//        ↓
// Referencia Pessoa.prototype


// ==================================================
// EXEMPLOS DE MÉTODOS DO Date.prototype
// → O objeto Date possui diversos métodos
//   disponíveis através de seu protótipo
// ==================================================

console.log(data.getFullYear());
// → Retorna o ano


console.log(data.getMonth());
// → Retorna o mês
// → Janeiro = 0
// → Dezembro = 11


console.log(data.getDate());
// → Retorna o dia do mês


console.log(data.getDay());
// → Retorna o dia da semana
// → Domingo = 0
// → Sábado = 6


console.log(data.getHours());
// → Retorna a hora


console.log(data.getMinutes());
// → Retorna os minutos


console.log(data.getSeconds());
// → Retorna os segundos


// ==================================================
// ORDEM DA PROCURA DOS MÉTODOS DO DATE
// ==================================================

// Quando fazemos:
//
// data.getFullYear();
//
// O JavaScript procura:
//
// data
//   ↓
// Date.prototype
//   ↓
// Object.prototype
//   ↓
// null
//
// → getFullYear() é encontrado em Date.prototype


/*
====================================================

prototype x __proto__

====================================================

• prototype

  → É uma propriedade das funções.

  → Constructor Functions possuem essa propriedade.

  → É utilizada como objeto que servirá de
    protótipo para as instâncias criadas
    através de new.


• __proto__

  → É uma referência interna do objeto para
    seu protótipo.

  → Permite acessar a relação entre o objeto
    e seu protótipo.


Exemplo:

    Pessoa.prototype === p1.__proto__

    // true

====================================================


CADEIA DE PROTÓTIPOS

====================================================

• Quando uma propriedade ou método não é
  encontrado no próprio objeto, o JavaScript
  procura no protótipo.

Exemplo:

    p1.estouAqui;


Ordem da procura:

    p1
     ↓
    Pessoa.prototype
     ↓
    Object.prototype
     ↓
    null

====================================================


EXEMPLO COM DATE

====================================================

    const data = new Date();


Cadeia de protótipos:

    data
     ↓
    Date.prototype
     ↓
    Object.prototype
     ↓
    null


• Métodos como:

    getFullYear()
    getMonth()
    getDate()
    getDay()
    getHours()
    getMinutes()
    getSeconds()

  são disponibilizados através do Date.prototype.


====================================================


RESUMO IMPORTANTE

====================================================

• JavaScript utiliza HERANÇA POR PROTÓTIPOS.

• Objetos podem acessar propriedades e métodos
  através de seus protótipos.


• Constructor Function possui:

    Pessoa.prototype


• A instância possui uma referência interna
  para seu protótipo:

    p1.__proto__


• No exemplo:

    Pessoa.prototype === p1.__proto__

  → true


• A procura por uma propriedade ou método segue
  a CADEIA DE PROTÓTIPOS.


• A cadeia termina em:

    null


• Exemplo:

    p1
     ↓
    Pessoa.prototype
     ↓
    Object.prototype
     ↓
    null


• Exemplo com Date:

    data
     ↓
    Date.prototype
     ↓
    Object.prototype
     ↓
    null


• Métodos do Date:

    getFullYear()
    getMonth()
    getDate()
    getDay()
    getHours()
    getMinutes()
    getSeconds()

  → São encontrados através da cadeia de protótipos.

⚠️ `prototype` e `__proto__` NÃO são a mesma coisa.

• prototype

  → Propriedade da função.

• __proto__

  → Referência do objeto para seu protótipo.

====================================================
*/