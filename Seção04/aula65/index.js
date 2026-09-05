/*
====================================================

FILTER()

====================================================

• O método filter() é utilizado para FILTRAR elementos
  de um array

• Ele percorre todos os elementos do array

• Para cada elemento, executa uma função CALLBACK

• A callback deve retornar:

  → true  → elemento será incluído no novo array

  → false → elemento será ignorado

• O filter() sempre retorna um NOVO ARRAY

• O novo array pode possuir:

  → A mesma quantidade de elementos do original

  → Menos elementos que o original

  → Nenhum elemento

⚠️ O filter() NUNCA retorna mais elementos que
   o array original.

====================================================
*/


// ==================================================
// ARRAY ORIGINAL
//
// Índices:
//
//    0   1   2  3  4  5  6  7  8   9  10  11  12
// ==================================================

const numeros = [
    5, 50, 80, 1, 2, 3, 5,
    8, 7, 11, 15, 22, 27
];


// ==================================================
// CALLBACK
// → Recebe o valor atual do array
// → Retorna true ou false
// ==================================================

const callbackFilter = (valor) => {

    return valor >= 10;

};


// ==================================================
// filter()
// → Percorre o array numeros
// → Mantém somente os valores >= 10
// → Retorna um NOVO ARRAY
// ==================================================

const numerosFiltrados = numeros.filter(callbackFilter);

console.log('==========================================');


// ==================================================
// SIMULANDO O filter() COM for...of
// → Demonstra a lógica que o filter() realiza
// → Verifica cada elemento
// → Exibe somente os valores >= 10
// ==================================================

for (const item of numeros) {

    if (item >= 10) {

        console.log(item);

    }

}

console.log(numerosFiltrados);


// ==================================================
// CALLBACK COM TODOS OS PARÂMETROS
//
// → valor
//   → Valor atual do elemento
//
// → indice
//   → Índice atual do elemento
//
// → array
//   → Array que está sendo percorrido
// ==================================================

const numerosFiltrados2 = numeros.filter((valor, indice, array) => {

    console.log(valor, indice);

    return valor >= 10;

});

console.log(numerosFiltrados2);


/*
====================================================

FILTER() COM OBJETOS

====================================================

• O filter() também pode ser utilizado para filtrar
  arrays que possuem OBJETOS

====================================================
*/


const pessoas = [

    { nome: 'luiz', idade: 62 },

    { nome: 'maria', idade: 23 },

    { nome: 'eduardo', idade: 55 },

    { nome: 'leticia', idade: 19 },

    { nome: 'rosana', idade: 32 },

    { nome: 'wallace', idade: 47 }

];


// ==================================================
// FILTRAR POR IDADE
// → Retorna pessoas com idade maior ou igual a 50
// ==================================================

const filtroPessoasIdade = pessoas.filter((obj) => {

    return obj.idade >= 50;

});

console.log(filtroPessoasIdade);


// ==================================================
// FILTRAR PELO TAMANHO DO NOME
// → length retorna a quantidade de caracteres
// → Mantém nomes com 5 ou mais caracteres
// ==================================================

const filtroPessoasNome = pessoas.filter((obj) => {

    return obj.nome.length >= 5;

});

console.log(filtroPessoasNome);


// ==================================================
// FILTRAR PELA ÚLTIMA LETRA DO NOME
// → toLowerCase() transforma o nome em minúsculo
// → endsWith('a') verifica se termina com a letra "a"
// ==================================================

const filtroPessoasLetra = pessoas.filter((obj) => {

    return obj.nome.toLowerCase().endsWith('a');

});

console.log(filtroPessoasLetra);


/*
====================================================

PARÂMETROS DA CALLBACK

====================================================

• O filter() pode fornecer três parâmetros:

    array.filter((valor, indice, array) => {

    });

• valor

  → Elemento atual

• indice

  → Índice do elemento atual

• array

  → Array original que está sendo percorrido

====================================================


RESUMO IMPORTANTE

====================================================

• filter()

  → Filtra elementos de um array

  → Retorna um NOVO ARRAY

  → Não altera o array original

  → A callback deve retornar true ou false

• true

  → Elemento entra no novo array

• false

  → Elemento não entra no novo array

• valor

  → Elemento atual

• indice

  → Índice atual

• array

  → Array original

⚠️ filter() pode retornar a mesma quantidade,
   menos elementos ou um array vazio.

⚠️ filter() nunca retorna mais elementos que
   o array original.

====================================================
*/