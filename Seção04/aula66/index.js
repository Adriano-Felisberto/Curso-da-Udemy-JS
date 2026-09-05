/*
====================================================

MAP()

====================================================

• O método map() é utilizado para TRANSFORMAR
  os elementos de um array

• Ele percorre todos os elementos do array

• Para cada elemento, executa uma função CALLBACK

• O map() sempre retorna um NOVO ARRAY

• O novo array sempre possui a MESMA QUANTIDADE
  de elementos do array original

• A callback pode transformar o elemento em
  qualquer outro valor ou estrutura

====================================================
*/


const numeros = [
    5, 50, 80, 1, 2, 3, 5,
    8, 7, 11, 15, 22, 27
];


// ==================================================
// TRANSFORMANDO OS ELEMENTOS
// → Cada número é multiplicado por 2
// → A quantidade de elementos permanece a mesma
// ==================================================

const dobraNumber = numeros.map((valor) => {

    return valor * 2;

});

console.log(dobraNumber);


// ==================================================
// MAP() COM OBJETOS
// → Podemos acessar uma propriedade de cada objeto
// → O retorno pode ser diferente do objeto original
// ==================================================

const pessoas = [

    { nome: 'luiz', idade: 62 },

    { nome: 'maria', idade: 23 },

    { nome: 'eduardo', idade: 55 },

    { nome: 'leticia', idade: 19 },

    { nome: 'rosana', idade: 32 },

    { nome: 'wallace', idade: 47 }

];


// ==================================================
// RETORNANDO SOMENTE UMA PROPRIEDADE
// → Cada objeto é transformado em uma string
// → O resultado será um array somente com os nomes
// ==================================================

const stringNome = pessoas.map((obj) => {

    return obj.nome;

});

console.log(stringNome);


// ==================================================
// delete
// → Remove a propriedade nome dos objetos originais
// → O map() continua retornando um novo array
// → Porém, os objetos originais também são modificados
//
// ⚠️ O retorno de delete é um BOOLEAN
//
// → true  → propriedade foi removida
// → false → propriedade não foi removida
// ==================================================

const removeChave = pessoas.map((objNome) => {

    return delete objNome.nome;

});

console.log(removeChave);

console.log(pessoas);


// ==================================================
// REMOVER A PROPRIEDADE SEM ALTERAR OS OBJETOS
// → O spread (...) cria um novo objeto
// → Somente a propriedade idade é mantida
// → Os objetos originais não são modificados
// ==================================================

// const removeChave = pessoas.map((objNome) => {
//
//     return { idade: objNome.idade };
//
// });


// ==================================================
// ADICIONANDO UMA PROPRIEDADE
// → O índice é utilizado como valor da propriedade id
// → O objeto original é MODIFICADO
//
// ⚠️ Neste caso, map() está sendo utilizado para
//   transformar o array, mas também estamos alterando
//   os objetos existentes.
// ==================================================

const addChaveId = pessoas.map((objId, indice) => {

    return objId.id = indice;

});

console.log(addChaveId);

console.log(pessoas);


// ==================================================
// ADICIONANDO ID SEM MODIFICAR O OBJETO ORIGINAL
// → O spread (...) copia as propriedades do objeto
// → Uma nova propriedade id é adicionada
// → Um NOVO OBJETO é criado
// ==================================================

// const addChaveId = pessoas.map((objId) => {
//
//     return {
//         ...objId,
//         id: Math.floor(Math.random() * 1000)
//     };
//
// });
//
// console.log(addChaveId);


/*
====================================================

MAP() E TRANSFORMAÇÃO

====================================================

• O map() não serve apenas para multiplicar números

• Ele pode transformar:

  → Número em número

  → Objeto em string

  → Objeto em outro objeto

  → String em outro valor

  → Qualquer elemento em outra estrutura

Exemplo:

    const numeros = [1, 2, 3];

    const dobro = numeros.map(valor => valor * 2);

Resultado:

    [2, 4, 6]

====================================================


MAP() x FILTER()

====================================================

• map()

  → TRANSFORMA os elementos

  → Mantém a mesma quantidade de elementos

• filter()

  → FILTRA os elementos

  → Pode retornar a mesma quantidade ou menos

Exemplo:

    [1, 2, 3, 4]

    map(valor => valor * 2)

    → [2, 4, 6, 8]

    filter(valor => valor > 2)

    → [3, 4]

====================================================


EFEITO COLATERAL

====================================================

• Alterar diretamente um objeto dentro do map()
  modifica o objeto original

Exemplo:

    pessoas.map(obj => {
        obj.id = 1;
        return obj;
    });

• O array retornado é novo, mas os objetos podem
  continuar sendo os mesmos objetos da estrutura
  original.

• Para criar novos objetos:

    pessoas.map(obj => {
        return {
            ...obj,
            id: 1
        };
    });

====================================================


RESUMO IMPORTANTE

====================================================

• map()

  → Transforma elementos

  → Retorna um NOVO ARRAY

  → Mantém a mesma quantidade de elementos

• filter()

  → Seleciona elementos

  → Retorna um NOVO ARRAY

  → Pode retornar menos elementos

• map() pode transformar o formato dos dados

  → Objeto → String

  → Número → Número

  → Objeto → Objeto

• spread (...)

  → Pode ser utilizado para criar novos objetos
    sem modificar diretamente o objeto original

⚠️ map() não impede que você altere os objetos
   originais dentro da callback.

⚠️ O que define o resultado do map() é aquilo
   que você coloca no return.

====================================================
*/