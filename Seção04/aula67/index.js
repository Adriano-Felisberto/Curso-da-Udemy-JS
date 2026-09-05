/*
====================================================

REDUCE()

====================================================

• O método reduce() é utilizado para REDUZIR os
  elementos de um array a um único resultado

• Esse resultado pode ser:

  → Número

  → String

  → Objeto

  → Array

  → Ou qualquer outra estrutura

• O reduce() percorre os elementos do array e,
  a cada iteração, atualiza o ACUMULADOR

• Sintaxe:

    array.reduce((acumulador, valor) => {

        return novoValorDoAcumulador;

    }, valorInicial);

====================================================
*/


const numeros = [

    5, 50, 80, 1, 2, 3, 5,

    8, 7, 11, 15, 22, 27

];


// ==================================================
// SOMA DE TODOS OS NÚMEROS
//
// → acumulador
//   → Guarda o resultado acumulado
//
// → valor
//   → Elemento atual do array
//
// → 0
//   → Valor inicial do acumulador
// ==================================================

const total = numeros.reduce((acumulador, valor) => {

    console.log(acumulador);

    return acumulador + valor;

}, 0);


// ==================================================
// VALOR INICIAL
// → O segundo argumento do reduce() define o
//   valor inicial do acumulador
//
// → Neste exemplo:
//
//    acumulador começa em 0
//    valor começa em 5
//
// → Depois:
//
//    acumulador = 5
//    valor = 50
//
//    acumulador = 55
//    valor = 80
//
//    E assim por diante
// ==================================================

console.log(total);


// ==================================================
// REDUCE() SEM VALOR INICIAL
//
// → Quando o valor inicial não é informado:
//
//    acumulador → primeiro elemento
//    valor      → segundo elemento
//
// → O reduce() começa a iteração a partir do
//   segundo elemento
// ==================================================

// const total = numeros.reduce((acumulador, valor) => {
//
//     return acumulador + valor;
//
// });


// ==================================================
// SOMAR SOMENTE OS NÚMEROS PARES
// → O reduce() pode realizar uma lógica semelhante
//   ao filter(), mas acumulando os valores
// ==================================================

const totalPares = numeros.reduce((acumulador, valor) => {

    return valor % 2 === 0
        ? acumulador + valor
        : acumulador;

}, 0);

console.log(totalPares);


/*
====================================================

REDUCE() x FILTER() x MAP()

====================================================

• filter()

  → FILTRA elementos

  → Retorna um novo array

  → Pode retornar menos elementos

Exemplo:

    numeros.filter(valor => valor % 2 === 0);


• map()

  → TRANSFORMA elementos

  → Retorna um novo array

  → Mantém a mesma quantidade de elementos

Exemplo:

    numeros.map(valor => valor * 2);


• reduce()

  → ACUMULA valores

  → Normalmente reduz o array a um único resultado

Exemplo:

    numeros.reduce((acumulador, valor) => {
        return acumulador + valor;
    }, 0);

====================================================

⚠️ O reduce() pode ser utilizado para reproduzir
   comportamentos semelhantes ao filter() e ao map().

⚠️ Porém, isso geralmente NÃO é recomendado.

→ filter() é mais claro para FILTRAR.

→ map() é mais claro para TRANSFORMAR.

→ reduce() é mais apropriado quando precisamos
  ACUMULAR ou CONSTRUIR um resultado.

====================================================
*/


// ==================================================
// REDUCE() COM OBJETOS
// → Podemos utilizar reduce() para encontrar
//   determinado objeto dentro de um array
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
// ENCONTRAR A PESSOA MAIS VELHA
//
// → acumulador
//   → Guarda o objeto que possui a maior idade
//   encontrado até o momento
//
// → pessoa
//   → Representa o objeto atual
//
// → Sem valor inicial:
//   → acumulador começa como o primeiro objeto
//   → pessoa começa como o segundo objeto
// ==================================================

const maisVelha = pessoas.reduce((acumulador, pessoa) => {

    if (acumulador.idade > pessoa.idade) {

        return acumulador;

    }

    return pessoa;

});

console.log(maisVelha);


/*
====================================================

COMO O REDUCE() FUNCIONA

====================================================

Considerando:

    [10, 20, 30]

E:

    reduce((acumulador, valor) => {
        return acumulador + valor;
    }, 0);


1ª ITERAÇÃO

    acumulador = 0
    valor = 10

    resultado → 10


2ª ITERAÇÃO

    acumulador = 10
    valor = 20

    resultado → 30


3ª ITERAÇÃO

    acumulador = 30
    valor = 30

    resultado → 60


RESULTADO FINAL:

    60

====================================================
*/


/*
====================================================

RESUMO IMPORTANTE

====================================================

• reduce()

  → Percorre um array

  → Utiliza um acumulador

  → Retorna um resultado acumulado

• acumulador

  → Guarda o resultado produzido
    durante as iterações

• valor

  → Representa o elemento atual

• valorInicial

  → Define o valor inicial do acumulador

• COM valor inicial:

    acumulador → valor inicial
    valor      → primeiro elemento

• SEM valor inicial:

    acumulador → primeiro elemento
    valor      → segundo elemento

• O resultado final do reduce() pode ser:

  → Número

  → String

  → Objeto

  → Array

  → Outras estruturas

⚠️ reduce() não significa necessariamente
   "somar números".

⚠️ Sua principal característica é utilizar
   um acumulador para construir um resultado.

⚠️ Prefira filter() para filtrar e map()
   para transformar quando essas operações
   forem suficientes.

====================================================
*/