/*
====================================================

ARRAYS

====================================================

• Arrays são estruturas utilizadas para armazenar
  múltiplos valores em uma única variável

• Os elementos são organizados através de ÍNDICES

• O primeiro elemento possui índice 0

• Arrays possuem diversos métodos para adicionar,
  remover e manipular elementos

====================================================
*/


// ==================================================
// CRIAÇÃO DE ARRAYS
// → Array literal utilizando []
// → Constructor Function utilizando new Array()
// ==================================================

const nomes = ['Eduardo', 'Maria', 'Joana'];

const nomes2 = new Array('Adriano', 'Ester', 'Ricky');


// ==================================================
// delete
// → Remove o valor de uma posição do array
// → NÃO reorganiza os índices
// → A posição removida passa a possuir o valor empty
// → Não é recomendado para remoção convencional
// ==================================================

// delete nomes[1];


// ==================================================
// REFERÊNCIA
// → Atribuir um array a outra variável não cria uma cópia
// → As duas variáveis apontam para o MESMO ARRAY
// ==================================================

const novo = nomes;


// ==================================================
// pop()
// → Remove o ÚLTIMO elemento do array
// → Altera o array original
// ==================================================

novo.pop();


// ==================================================
// ALTERAÇÃO DE ELEMENTO
// → Permite substituir um valor através do índice
// → O índice 2 corresponde ao terceiro elemento
// ==================================================

nomes[2] = 'João';


// ==================================================
// splice()
// → Remove ou adiciona elementos em qualquer posição
// → Primeiro parâmetro: índice inicial
// → Segundo parâmetro: quantidade de elementos removidos
// ==================================================

nomes.splice(2, 1);


// ==================================================
// push()
// → Adiciona um elemento ao FINAL do array
// → Retorna o novo tamanho do array
// ==================================================

nomes.push('arthur');


// ==================================================
// unshift()
// → Adiciona um elemento no INÍCIO do array
// → Os elementos existentes são deslocados
// ==================================================

nomes.unshift('wallace');


// ==================================================
// shift()
// → Remove o PRIMEIRO elemento do array
// → Os elementos restantes são deslocados
// ==================================================

nomes.shift();


// ==================================================
// EXIBIÇÃO DOS RESULTADOS
// ==================================================

console.log('nomes:', nomes);

console.log('nomes2:', nomes2);


// ==================================================
// CÓPIA DO ARRAY
// → O operador spread (...) cria um novo array
// → O novo array possui uma referência diferente
// → Os elementos são copiados para o novo array
// ==================================================

const novo2 = [...nomes];

console.log('novo2:', novo2);


// ==================================================
// length
// → Retorna a quantidade de elementos do array
// ==================================================

console.log('length:', nomes.length);


/*
====================================================

REFERÊNCIA x CÓPIA

====================================================

• Referência

  → const novo = nomes;

  → Não cria um novo array

  → novo e nomes apontam para o mesmo array

  → Alterações em novo também afetam nomes

• Cópia

  → const novo2 = [...nomes];

  → Cria um novo array

  → novo2 possui uma referência diferente

  → Alterações estruturais em novo2 não alteram
    diretamente o array nomes

====================================================


DELETE x SPLICE

====================================================

• delete

  → Remove o valor de uma posição

  → NÃO reorganiza os índices

  → Pode deixar uma posição vazia no array

• splice()

  → Remove elementos e reorganiza os índices

  → É mais apropriado para remoções convencionais

Exemplo:

    const nomes = ['Eduardo', 'Maria', 'Joana'];

    nomes.splice(1, 1);

Resultado:

    ['Eduardo', 'Joana']

====================================================


RESUMO IMPORTANTE

====================================================

• push()

  → Adiciona no FINAL

• pop()

  → Remove do FINAL

• unshift()

  → Adiciona no INÍCIO

• shift()

  → Remove do INÍCIO

• splice()

  → Remove e/ou adiciona elementos em qualquer posição

• delete

  → Remove o valor de uma posição
  → NÃO reorganiza os índices

• length

  → Retorna a quantidade de elementos

• spread (...)

  → Pode ser utilizado para criar uma cópia
    de um array

⚠️ Arrays são objetos e são armazenados através
   de referências.

⚠️ const não impede a alteração dos elementos
   internos do array.

Exemplo:

    const nomes = ['Eduardo'];

    nomes.push('Maria');

Isso é permitido porque a referência do array
continua sendo a mesma.

====================================================
*/