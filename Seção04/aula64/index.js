/*
====================================================

CONCATENAÇÃO DE ARRAYS

====================================================

• A concatenação permite unir dois ou mais arrays

• Existem diferentes formas de concatenar arrays:

  → concat()

  → Spread Operator (...)

====================================================
*/


const a1 = [1, 2, 3];

const a2 = [4, 5, 6];


// ==================================================
// OPERADOR +
// → NÃO é recomendado para concatenar arrays
// → O JavaScript converte os arrays para strings
//   antes de realizar a operação
// ==================================================

let a3 = a1 + a2;

console.log(a3);


// ==================================================
// concat()
// → Utilizado para concatenar arrays
// → NÃO altera os arrays originais
// → Retorna um NOVO array
// ==================================================

a3 = a1.concat(a2);

console.log(a3);


// ==================================================
// concat() COM MÚLTIPLOS VALORES
// → Pode receber vários arrays
// → Também pode receber valores individuais
// ==================================================

const concatenar = a1.concat(a2, [7, 8, 9], 'sla');

console.log(concatenar);


// ==================================================
// SPREAD OPERATOR (...)
// → "Espalha" os elementos de um iterável
// → Pode ser utilizado para unir arrays
// → Também cria um novo array
// ==================================================

const a4 = [...a1, ...a2];

console.log(a4);


// ==================================================
// SPREAD COM OUTROS ELEMENTOS
// → Podemos misturar arrays e valores individuais
// → O spread espalha os elementos do array
//   diretamente dentro do novo array
// ==================================================

const a5 = [
    ...a1,
    'Adriano',
    ...a2,
    ...[7, 8, 9]
];

console.log(a5);


// ==================================================
// ARRAY DENTRO DE ARRAY
// → Sem o spread, [7, 8, 9] seria inserido como
//   um único elemento
// → Isso criaria um array dentro de outro array
// ==================================================

const a6 = [
    ...a1,
    [7, 8, 9]
];

console.log(a6);


// ==================================================
// SPREAD DO ARRAY
// → Com ...[7, 8, 9], os elementos são espalhados
// → Os valores 7, 8 e 9 entram individualmente
//   no novo array
// ==================================================

const a7 = [
    ...a1,
    ...[7, 8, 9]
];

console.log(a7);


/*
====================================================

concat() x SPREAD OPERATOR

====================================================

• concat()

    → a1.concat(a2)

    → Retorna um novo array

    → Não altera os arrays originais

    → Pode receber arrays e valores individuais

• Spread Operator (...)

    → [...a1, ...a2]

    → Espalha os elementos dos arrays

    → Permite combinar arrays e outros valores

    → Também cria um novo array

====================================================


REST x SPREAD

====================================================

• Os dois utilizam os três pontos (...)

• A diferença está na FUNÇÃO que o operador
  está desempenhando.

• SPREAD

    → Espalha elementos

    → Exemplo:

      const novo = [...a1, ...a2];

• REST

    → Agrupa vários valores em um único array

    → Exemplo:

      function soma(...numeros) {
          console.log(numeros);
      }

    → Os argumentos são agrupados em 'numeros'

====================================================


RESUMO IMPORTANTE

====================================================

• concat()

  → Concatena arrays

  → Retorna um novo array

• Spread (...)

  → Espalha elementos

  → Pode ser utilizado para concatenar arrays

• [7, 8, 9]

  → É um array

• [[7, 8, 9]]

  → É um array contendo outro array

• [...[7, 8, 9]]

  → Espalha os elementos 7, 8 e 9

⚠️ O operador + não deve ser utilizado para
   concatenar arrays.

⚠️ O operador ... pode representar SPREAD ou REST,
   dependendo do contexto.

====================================================
*/