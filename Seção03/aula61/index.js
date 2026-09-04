/*
====================================================

GERADORES (GENERATORS)

====================================================

• Funções geradoras são declaradas utilizando function*

• Utilizam yield para pausar a execução da função

• Cada chamada de next() continua a execução
  a partir do último yield

• O método next() retorna um objeto contendo:

  → value: valor retornado pelo yield
  → done: indica se a execução terminou

====================================================
*/


// ==================================================
// GERADORA 1
// → Utiliza múltiplos yield
// → A execução é pausada a cada yield
// → next() continua a execução do ponto anterior
// ==================================================

function* geradora1() {

    yield 'valor 1';

    yield 'valor 2';

    yield 'valor 3';

}

const g1 = geradora1();

console.log(g1);

// → Primeira chamada: retorna o primeiro valor
console.log(g1.next());

// → Segunda chamada: retorna apenas o valor
console.log(g1.next().value);

// → Terceira chamada: retorna apenas o valor
console.log(g1.next().value);


// ==================================================
// GERADORES E for...of
// → Geradores são ITERÁVEIS
// → for...of percorre os valores produzidos por yield
// → O loop continua a partir do estado atual do gerador
// ==================================================

for (let valor of g1) {

    console.log(valor);

}

console.log('**************************************************');


// ==================================================
// GERADORA 2
// → Pode produzir uma sequência indefinidamente
// → while(true) mantém a execução contínua
// → Cada yield pausa a função temporariamente
// ==================================================

function* geradora2() {

    let i = 0;

    while (true) {

        yield i;

        i++;

    }

}

const g2 = geradora2();

console.log(g2.next().value);

console.log('**************************************************');


// ==================================================
// GERADORA 3
// → Produz uma sequência de valores
// ==================================================

function* geradora3() {

    yield 0;

    yield 1;

    yield 2;

}


// ==================================================
// GERADORA 4
// → Utiliza yield* para delegar a execução
// → yield* permite utilizar os valores de outro gerador
// → Após finalizar geradora3(), continua normalmente
// ==================================================

function* geradora4() {

    yield* geradora3();

    yield 3;

    yield 4;

    yield 5;

}

const g4 = geradora4();

for (let valor of g4) {

    console.log(valor);

}

console.log('**************************************************');


// ==================================================
// GERADORA 5
// → yield também pode retornar funções
// → O valor obtido por next().value pode ser executado
// ==================================================

function* geradora5() {

    yield function() {

        console.log('vim do y1');

    };

    yield function() {

        console.log('vim do y2');

    };

}

const g5 = geradora5();

const func1 = g5.next().value;

const func2 = g5.next().value;


// ==================================================
// EXECUTANDO AS FUNÇÕES RETORNADAS PELO GERADOR
// → next().value retorna a função armazenada no yield
// → A função só será executada quando for chamada
// ==================================================

func1();

func2();


/*
====================================================

YIELD x RETURN

====================================================

• yield

  → Pausa a execução da função geradora

  → Permite continuar posteriormente com next()

  → Pode ser utilizado várias vezes

  → A execução continua após o yield

• return

  → Encerra imediatamente a execução do gerador

  → Finaliza a sequência de valores

  → Os próximos next() retornam done: true

⚠️ Ao utilizar return dentro de um gerador,
   os yield posteriores não serão executados.

====================================================


RESUMO IMPORTANTE

====================================================

• function*

  → Declara uma função geradora

• yield

  → Pausa a execução

  → Produz um valor

  → Permite continuar posteriormente

• next()

  → Continua a execução do gerador

  → Retorna { value, done }

• yield*

  → Delega a execução para outro iterável ou gerador

• Geradores

  → São ITERÁVEIS

  → Podem ser utilizados com for...of

• return

  → Encerra a execução do gerador

  → Impede a execução dos yield posteriores

====================================================
*/