/*
====================================================

CÓPIA E MANIPULAÇÃO DE OBJETOS

====================================================

• Objetos podem ser copiados de diferentes formas

• Podemos utilizar:

  → Spread Operator (...)

  → Object.assign()

  → Cópia manual

• Também existem métodos para consultar e
  controlar as propriedades dos objetos

====================================================
*/


// ==================================================
// OBJETO ORIGINAL
// ==================================================

const produto = {

    nome: 'caneca',

    preco: 1.8

};


// ==================================================
// SPREAD OPERATOR
// → Cria um NOVO objeto
// → Copia as propriedades do objeto original
// ==================================================

const caneca = {

    ...produto,

    material: 'porcelana'

};


// → caneca é uma cópia independente do objeto produto

caneca.nome = 'outra coisa';

caneca.preco = 2.5;

console.log(produto);

console.log(caneca);


// ==================================================
// Object.assign()
// → Também pode ser utilizado para copiar objetos
// → O primeiro argumento é o objeto de destino
// ==================================================

const caneca2 = Object.assign({}, // objeto de destino

    produto, {

        material: 'vidro'

    });

console.log(caneca2);


// ==================================================
// CÓPIA MANUAL
// → Copiamos cada propriedade individualmente
// ==================================================

const caneca3 = {

    nome: produto.nome,

    preco: produto.preco

};

console.log(caneca3);


// ==================================================
// Object.keys()
// → Retorna um array contendo as CHAVES
//   enumeráveis do objeto
// ==================================================

console.log(Object.keys(produto));


// ==================================================
// Object.freeze()
// → Congela o objeto
// → Impede alterações nas propriedades
// → Impede adicionar novas propriedades
// → Impede remover propriedades
// → Impede reconfigurar propriedades
// ==================================================

Object.freeze(produto);


// ==================================================
// Object.getOwnPropertyDescriptor()
// → Mostra as configurações de uma propriedade
// → Permite visualizar seus descriptors
// ==================================================

console.log(
    Object.getOwnPropertyDescriptor(produto, 'nome')
);


// ==================================================
// Object.defineProperty()
// → Permite definir ou modificar os descriptors
//   de uma propriedade
// ==================================================

// ⚠️ Neste ponto, produto já está congelado.
// Por isso, não podemos alterar os descriptors
// da propriedade nome.

Object.defineProperty(produto, 'nome', {

    writable: false,

    configurable: false

    // value: 'outra coisa'

});


// ==================================================
// CONSULTANDO NOVAMENTE O DESCRIPTOR
// ==================================================

console.log(
    Object.getOwnPropertyDescriptor(produto, 'nome')
);


// ==================================================
// Object.values()
// → Retorna um array contendo os VALORES
//   enumeráveis do objeto
// ==================================================

console.log(Object.values(produto));


// ==================================================
// Object.entries()
// → Retorna um array contendo pares
//   [chave, valor]
// ==================================================

console.log(Object.entries(produto));


// ==================================================
// PERCORRENDO Object.entries()
// → Cada entry representa um array:
//   [chave, valor]
// ==================================================

for (let entry of Object.entries(produto)) {

    console.log(entry);

}


// ==================================================
// DESESTRUTURAÇÃO
// → Podemos separar diretamente a chave e o valor
// ==================================================

for (let [chave, valor] of Object.entries(produto)) {

    console.log(chave, valor);

}


/*
====================================================

SPREAD OPERATOR x Object.assign()

====================================================

• Spread Operator

    const copia = {
        ...produto
    };

  → Cria um novo objeto

  → Copia as propriedades enumeráveis próprias


• Object.assign()

    const copia = Object.assign({}, produto);

  → Cria um novo objeto

  → Copia propriedades enumeráveis próprias


• Cópia manual

    const copia = {
        nome: produto.nome,
        preco: produto.preco
    };

  → Cada propriedade é copiada manualmente

====================================================


Object.keys()

====================================================

• Retorna as CHAVES:

    Object.keys(produto);


Exemplo:

    ['nome', 'preco']

====================================================


Object.values()

====================================================

• Retorna os VALORES:

    Object.values(produto);


Exemplo:

    ['caneca', 1.8]

====================================================


Object.entries()

====================================================

• Retorna CHAVE e VALOR:

    Object.entries(produto);


Exemplo:

    [
        ['nome', 'caneca'],
        ['preco', 1.8]
    ]

====================================================


Object.freeze()

====================================================

• Congela o objeto

• Impede:

  → Alteração das propriedades

  → Exclusão de propriedades

  → Adição de propriedades

  → Reconfiguração das propriedades

⚠️ O freeze() é SHALLOW.

→ Se o objeto possuir outro objeto dentro dele,
  o objeto interno ainda poderá ser alterado.

====================================================


Object.getOwnPropertyDescriptor()

====================================================

• Mostra as configurações de uma propriedade

• Pode mostrar:

  → value

  → writable

  → enumerable

  → configurable

Exemplo:

    Object.getOwnPropertyDescriptor(
        produto,
        'nome'
    );

====================================================


Object.defineProperty()

====================================================

• Permite criar ou modificar uma propriedade

• Também permite configurar seus descriptors

⚠️ Se a propriedade ou objeto já estiver congelado,
   não será possível realizar determinadas
   alterações em seus descriptors.

====================================================


RESUMO IMPORTANTE

====================================================

• { ...objeto }

  → Cria uma cópia do objeto utilizando
    o Spread Operator


• Object.assign()

  → Copia propriedades de um ou mais objetos
    para um objeto de destino


• Object.keys()

  → Retorna as CHAVES


• Object.values()

  → Retorna os VALORES


• Object.entries()

  → Retorna CHAVE e VALOR


• Object.freeze()

  → Congela o objeto


• Object.getOwnPropertyDescriptor()

  → Mostra os descriptors de uma propriedade


• Object.defineProperty()

  → Define ou modifica uma propriedade
    e seus descriptors


⚠️ Spread e Object.assign() fazem uma
   cópia SUPERFICIAL (shallow copy).

⚠️ Objetos internos continuam sendo
   referências compartilhadas.

====================================================
*/