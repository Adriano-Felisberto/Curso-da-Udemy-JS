/*
====================================================

FOREACH()

====================================================

⚠️ ATENÇÃO

• forEach()

  → Utilize quando quiser apenas PERCORRER os
    elementos e executar alguma ação.

• map()

  → Utilize quando quiser TRANSFORMAR elementos
    e obter um novo array.

• filter()

  → Utilize quando quiser FILTRAR elementos.

• reduce()

  → Utilize quando quiser ACUMULAR valores ou
    reduzir os elementos a um resultado.

====================================================
*/


const a1 = [10, 2, 30, 4, 50, 6, 70, 8, 90, 10];


// ==================================================
// for...of
// → Percorre diretamente os valores do array
// ==================================================

for (const valor of a1) {

    console.log(valor);

}


console.log('=====================================');


// ==================================================
// forEach()
// → Percorre cada elemento do array
// → Pode acessar o valor e o índice
// ==================================================

let total = 0;

a1.forEach((valor, indice) => {

    console.log(valor, indice);

    total += valor;

    console.log(total);

});


// ==================================================
// EXEMPLO COM reduce() E forEach()
// → Os dois métodos podem ser utilizados para
//   percorrer/acumular valores
// → Porém, não é necessário utilizar reduce()
//   dentro de um forEach()
// ==================================================

const a2 = [10, 2, 30, 4, 50, 6, 70, 8, 90, 10];


// ==================================================
// REDUCE()
// → Acumula todos os valores do array
// ==================================================

const totalReduce = a2.reduce((acumulador, valor) => {

    return acumulador + valor;

}, 0);

console.log(totalReduce);


// ==================================================
// FOREACH()
// → Também pode ser utilizado para acumular valores
// → Neste caso, precisamos criar uma variável
//   para armazenar o resultado
// ==================================================

let totalForEach = 0;

a2.forEach((valor) => {

    totalForEach += valor;

});

console.log(totalForEach);


/*
====================================================

REDUCE() x FOREACH()

====================================================

• forEach()

  → Percorre os elementos

  → Executa uma função para cada elemento

  → Não possui como objetivo retornar um resultado
    acumulado

  → Pode ser utilizado para acumulação através
    de uma variável externa

• reduce()

  → Percorre os elementos

  → Utiliza um ACUMULADOR

  → Retorna o resultado da acumulação

====================================================


RESUMO IMPORTANTE

====================================================

• forEach()

  → PERCORRE

  → Executa uma ação para cada elemento

• map()

  → TRANSFORMA

  → Retorna um novo array

• filter()

  → FILTRA

  → Retorna um novo array

• reduce()

  → ACUMULA

  → Retorna um resultado

====================================================


⚠️ ATENÇÃO AO ESCOLHER O MÉTODO

====================================================

• Quero apenas percorrer o array?

  → forEach()

• Quero transformar os elementos?

  → map()

• Quero selecionar alguns elementos?

  → filter()

• Quero acumular os elementos em um resultado?

  → reduce()

⚠️ Evite utilizar reduce() quando map() ou
   filter() tornam a operação mais simples
   e legível.

⚠️ Evite utilizar reduce() dentro de um
   forEach() sem uma necessidade específica.

====================================================
*/