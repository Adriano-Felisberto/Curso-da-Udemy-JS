/*
====================================================

SPLICE()

====================================================

• O método splice() permite:

  → Remover elementos

  → Adicionar elementos

  → Substituir elementos

• Sintaxe:

  array.splice(indice, quantidade, elem1, elem2, ...)

• O primeiro parâmetro indica o ÍNDICE inicial

• O segundo parâmetro indica a QUANTIDADE de elementos
  que serão removidos

• Os parâmetros seguintes são os elementos que serão
  adicionados no lugar da remoção

• O splice() também aceita ÍNDICES NEGATIVOS

====================================================
*/


// ==================================================
// ÍNDICES POSITIVOS E NEGATIVOS
//
// Índices positivos:
//  0         1         2         3
//
// Índices negativos:
// -4        -3        -2        -1
// ==================================================

const nomes = ['Adriano', 'Baiano', 'Daniel', 'Denilson'];


// ==================================================
// REMOÇÃO COM splice()
// → Primeiro parâmetro: índice inicial
// → Segundo parâmetro: quantidade de elementos
// ==================================================

const remover = nomes.splice(3, 1);

console.log(remover);

console.log(nomes);


// ==================================================
// ÍNDICE NEGATIVO
// → -1 representa o último elemento
// → -2 representa o penúltimo elemento
// ==================================================

const removerNegativo = nomes.splice(-2, 1);

console.log(removerNegativo);


// ==================================================
// REMOVER ATÉ O FINAL
// → Number.MAX_VALUE pode ser utilizado como uma
//   quantidade muito grande de elementos
// → A remoção começa no índice -2 e continua até o final
// ==================================================

const removerAteOFinal = nomes.splice(-2, Number.MAX_VALUE);

console.log(Number.MAX_VALUE);

console.log(removerAteOFinal);


// ==================================================
// QUANTIDADE 0
// → Nenhum elemento será removido
// → O array permanece inalterado
// ==================================================

const removerVazio = nomes.splice(-2, 0);

console.log(removerVazio);


// ==================================================
// REMOVER E ADICIONAR
// → splice() pode remover um elemento e adicionar
//   outro no mesmo lugar
//
// → splice(3, 1, 'sla')
//
// → Começa no índice 3
// → Remove 1 elemento
// → Adiciona 'sla'
// ==================================================

const removerAdicionar = nomes.splice(3, 1, 'sla');

console.log(removerAdicionar);


// ==================================================
// SIMULAR pop()
// → pop() remove o último elemento
// → splice(-1, 1) produz o mesmo efeito
// ==================================================

const simularPop = nomes.splice(-1, 1);

console.log(simularPop);


// ==================================================
// SIMULAR shift()
// → shift() remove o primeiro elemento
// → splice(0, 1) produz o mesmo efeito
// ==================================================

const simularShift = nomes.splice(0, 1);

console.log(simularShift);


// ==================================================
// SIMULAR push()
// → push() adiciona no final
// → splice(nomes.length, 0, 'novo nome')
//   adiciona um elemento no final
//
// → nomes.length aponta para a posição logo após
//   o último índice
// ==================================================

const simularPush = nomes.splice(nomes.length, 0, 'novo nome');


// ==================================================
// SIMULAR unshift()
// → unshift() adiciona no início
// → splice(0, 0, 'novo nome 2')
//   adiciona um elemento no índice 0
// ==================================================

const simularUnshift = nomes.splice(0, 0, 'novo nome 2');


/*
====================================================

VALOR RETORNADO PELO splice()

====================================================

• splice() retorna um NOVO ARRAY contendo os
  elementos que foram removidos

Exemplo:

    const nomes = ['A', 'B', 'C'];

    const removidos = nomes.splice(1, 1);

Resultado:

    removidos → ['B']

    nomes → ['A', 'C']

• Quando nenhum elemento é removido:

    nomes.splice(1, 0);

  → O retorno será um array vazio:

    []

====================================================


ÍNDICES NEGATIVOS

====================================================

• Índices negativos começam a contar a partir
  do FINAL do array

Exemplo:

    const nomes = ['A', 'B', 'C', 'D'];

              0    1    2    3
             -4   -3   -2   -1

• -1 → último elemento

• -2 → penúltimo elemento

• -3 → terceiro elemento a partir do final

====================================================


RESUMO IMPORTANTE

====================================================

• splice(indice, quantidade)

  → Remove elementos

• splice(indice, 0, elemento)

  → Adiciona elementos

• splice(indice, quantidade, elemento)

  → Remove e adiciona elementos

• Índices negativos

  → Permitem acessar posições contando
    a partir do final

• splice(-1, 1)

  → Pode simular pop()

• splice(0, 1)

  → Pode simular shift()

• splice(nomes.length, 0, elemento)

  → Pode simular push()

• splice(0, 0, elemento)

  → Pode simular unshift()

⚠️ splice() ALTERA o array original.

⚠️ splice() retorna um ARRAY com os elementos
   removidos.

====================================================
*/