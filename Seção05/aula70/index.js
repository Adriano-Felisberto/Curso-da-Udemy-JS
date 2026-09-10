/*
====================================================

OBJETOS

====================================================

• Objetos são estruturas utilizadas para armazenar
  dados e comportamentos

• Os dados são armazenados através de:

  → CHAVE (key)
  → VALOR (value)

• Exemplo:

    nome: 'Luiz'

  → nome = chave
  → 'Luiz' = valor

• Os valores podem ser acessados através da
  notação de ponto ou colchetes

====================================================
*/


const pessoa = {

    nome: 'Luiz',

    sobrenome: 'Otávio'

};


// ==================================================
// ACESSANDO PROPRIEDADES
// → Notação de ponto
// ==================================================

console.log(pessoa.nome);

console.log(pessoa.sobrenome);


// ==================================================
// NOTAÇÃO DE COLCHETES
// → Permite acessar propriedades através de strings
// → Também pode ser utilizada de maneira dinâmica
// ==================================================

console.log(pessoa['nome']);


// ==================================================
// ACESSO DINÂMICO
// → A propriedade pode ser armazenada em uma variável
// → A variável é utilizada dentro dos colchetes
// ==================================================

const propriedade = 'nome';

console.log(pessoa[propriedade]);


// ==================================================
// CRIANDO OBJETO COM Object
// → Object() é uma função construtora
// → new Object() cria um novo objeto
// ==================================================

const pessoa1 = new Object();

pessoa1.nome = 'Luiz';

pessoa1.sobrenome = 'Otávio';

pessoa1.idade = 30;


// ==================================================
// MÉTODO DO OBJETO
// → Funções armazenadas dentro de objetos são
//   chamadas de MÉTODOS
//
// → this representa o objeto que está executando
//   o método
// ==================================================

pessoa1.falaNome = function() {

    return `${this.nome} está falando seu nome`;

};


// ==================================================
// MÉTODO PARA CALCULAR O ANO DE NASCIMENTO
// → Obtém o ano atual através de Date
// → Subtrai a idade da pessoa
// ==================================================

pessoa1.getDataNascimento = function() {

    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade;

};


console.log(pessoa1);


// ==================================================
// DELETANDO UMA PROPRIEDADE
// → O operador delete remove uma propriedade
//   do objeto
// ==================================================

delete pessoa1.nome;

console.log(pessoa1);


// ==================================================
// CHAMANDO MÉTODOS
// ==================================================

console.log(pessoa1.falaNome());

console.log(pessoa1.getDataNascimento());


// ==================================================
// PERCORRENDO AS PROPRIEDADES
// → for...in percorre as propriedades enumeráveis
//   do objeto
// → A variável chave recebe o nome da propriedade
// ==================================================

for (let chave in pessoa1) {

    console.log(chave);

}


// ==================================================
// OUTRA FORMA DE CRIAR UM OBJETO
// → Object literal
// → Forma mais comum e simples de criar objetos
// ==================================================

const pessoa2 = {

    nome: 'Luiz',

    sobrenome: 'Otávio',

    idade: 30

};

console.log(pessoa2);


/*
====================================================

FACTORY FUNCTION

====================================================

• Factory Function é uma função utilizada para
  CRIAR E RETORNAR objetos

• Cada chamada da função cria um novo objeto

• O objeto retornado pode possuir:

  → Propriedades

  → Métodos

  → Getters

====================================================
*/


const criaPessoa = function(nome, sobrenome) {

    const pessoa = {

        nome,

        sobrenome,

        get nomeCompleto() {

            return `${this.nome} ${this.sobrenome}`;

        }

    };

    return pessoa;

};


const p1 = criaPessoa('Luiz', 'Otávio');

console.log(p1.nomeCompleto);


// ==================================================
// Object.freeze()
// → Impede alterações no objeto
// → Não permite adicionar propriedades
// → Não permite remover propriedades
// → Não permite alterar propriedades existentes
//
// ⚠️ O objeto é CONGELADO
// ==================================================

// Object.freeze(p1);


// ==================================================
// const E REFERÊNCIA
//
// → const impede a REATRIBUIÇÃO da variável
// → Não impede necessariamente alterações no objeto
//   que ela referencia
//
// Exemplo:
//
//    const p1 = { nome: 'Luiz' };
//
//    p1.nome = 'Adriano';
//    → Permitido
//
//    p1 = { nome: 'Outro' };
//    → NÃO permitido
//
// ⚠️ Object.freeze() é diferente de const.
//
// → const protege a referência da variável
// → Object.freeze() impede alterações no objeto
// ==================================================


/*
====================================================

CONSTRUCTOR FUNCTION

====================================================

• Constructor Function é uma função utilizada
  para criar objetos através do operador new

• Por convenção, o nome da função começa
  com LETRA MAIÚSCULA

• O operador new:

  1. Cria um novo objeto

  2. Define esse objeto como this

  3. Executa a função

  4. Retorna o novo objeto

====================================================
*/


function Pessoa(nome, sobrenome) {

    this.nome = nome;

    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {

        return `${this.nome} ${this.sobrenome}`;

    };

}


const p2 = new Pessoa('Luiz', 'Otávio');

console.log(p2.nomeCompleto());


/*
====================================================

FACTORY FUNCTION x CONSTRUCTOR FUNCTION

====================================================

• Factory Function

    → Função que cria e retorna um objeto

    → Não necessita do operador new

    → Exemplo:

        const p1 = criaPessoa('Luiz', 'Otávio');


• Constructor Function

    → Função utilizada com new

    → O objeto é criado automaticamente

    → Utiliza this para definir propriedades
      e métodos

    → Exemplo:

        const p2 = new Pessoa('Luiz', 'Otávio');

====================================================


CONST x OBJETOS

====================================================

• const impede que a variável seja reatribuída

    const p1 = {
        nome: 'Luiz'
    };

• Podemos alterar propriedades:

    p1.nome = 'Adriano';

• Mas não podemos atribuir outro objeto:

    p1 = {
        nome: 'Outro'
    };

⚠️ const não torna o objeto imutável.

⚠️ Para congelar o objeto, podemos utilizar:

    Object.freeze(p1);

====================================================


RESUMO IMPORTANTE

====================================================

• objeto

  → Estrutura formada por propriedades e métodos

• propriedade

  → Chave + valor

• método

  → Função pertencente a um objeto

• this

  → Faz referência ao objeto no contexto
    em que está sendo utilizado

• delete

  → Remove uma propriedade

• for...in

  → Percorre as propriedades enumeráveis

• Object.freeze()

  → Impede alterações no objeto

• const

  → Impede a reatribuição da variável

• Factory Function

  → Cria e retorna objetos

• Constructor Function

  → Cria objetos utilizando new

====================================================
*/