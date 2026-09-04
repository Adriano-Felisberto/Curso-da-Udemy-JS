/*
====================================================

CALLBACKS E EXECUÇÃO ASSÍNCRONA

====================================================

• Callback é uma função passada como argumento para
  outra função

• O callback pode ser executado posteriormente,
  de acordo com a lógica da função que o recebeu

• Callbacks são muito utilizados em operações
  assíncronas, como setTimeout(), eventos e requisições

• Uma função NÃO precisa obrigatoriamente receber
  um callback

• Callback não é exclusivo de funções assíncronas

====================================================
*/


// ==================================================
// FUNÇÃO rand
// → Gera um número aleatório entre min e max
// → Possui valores padrão para os parâmetros
// → Math.random() gera um número entre 0 e 1
// → Math.floor() remove as casas decimais
// ==================================================

const rand = (min = 1000, max = 3000) => {

    const num = Math.random() * (max - min) + min;

    return Math.floor(num);

};

console.log(rand());


// ==================================================
// FUNÇÃO f1
// → Recebe um callback como parâmetro
// → Executa uma operação utilizando setTimeout()
// → Após o tempo definido, exibe "f1"
// → Se existir um callback, ele será executado
// ==================================================

const f1 = (callback) => {

    setTimeout(function() {

        console.log('f1');

        // → Verifica se um callback foi fornecido
        // → Caso exista, executa a função
        if (callback) callback();

    }, rand());

};


// ==================================================
// FUNÇÃO f2
// → Recebe um callback como parâmetro
// → Executa após um intervalo aleatório
// → Após sua execução, chama o callback
// ==================================================

const f2 = (callback) => {

    setTimeout(function() {

        console.log('f2');

        // → Executa o callback caso ele tenha sido fornecido
        if (callback) callback();

    }, rand());

};


// ==================================================
// FUNÇÃO f3
// → Recebe um callback como parâmetro
// → Executa após um intervalo aleatório
// → Após sua execução, chama o callback
// ==================================================

const f3 = (callback) => {

    setTimeout(function() {

        console.log('f3');

        // → Executa o callback caso ele tenha sido fornecido
        if (callback) callback();

    }, rand());

};


// ==================================================
// CALLBACKS ANINHADOS
// → f1 é executada primeiro
// → Quando f1 termina, chama f2
// → Quando f2 termina, chama f3
// → Quando f3 termina, exibe "Olá mundo"
// ==================================================

f1(function () {

    f2(function () {

        f3(function () {

            console.log('Olá mundo');

        });

    });

});


/*
====================================================

CALLBACKS NOMEADOS

====================================================

• Callbacks também podem ser armazenados em funções
  nomeadas

• Isso permite separar a lógica de cada etapa

• O resultado é equivalente ao exemplo anterior,
  porém com funções separadas

====================================================
*/


// ==================================================
// CALLBACK DA FUNÇÃO f1
// → É executado após f1 terminar
// → Inicia a execução de f2
// ==================================================

function f1Callback() {

    f2(f2Callback);

}


// ==================================================
// CALLBACK DA FUNÇÃO f2
// → É executado após f2 terminar
// → Inicia a execução de f3
// ==================================================

function f2Callback() {

    f3(f3Callback);

}


// ==================================================
// CALLBACK DA FUNÇÃO f3
// → É executado após f3 terminar
// → Finaliza a sequência de callbacks
// ==================================================

function f3Callback() {

    console.log('Olá mundo');

}


// ==================================================
// EXECUÇÃO DA SEQUÊNCIA
// → f1 executa
// → f1Callback chama f2
// → f2Callback chama f3
// → f3Callback finaliza a sequência
// ==================================================

f1(f1Callback);


/*
====================================================

CALLBACK x ARROW FUNCTION

====================================================

• Callback NÃO é um tipo específico de função

• Qualquer função pode ser utilizada como callback

• Arrow Functions podem ser callbacks normalmente

• O fato de uma função ser callback não depende
  de ela ser uma function tradicional ou Arrow Function

Exemplo:

    f1(() => {
        console.log('Callback executado');
    });

====================================================


ARROW FUNCTION E this

====================================================

• Arrow Functions não possuem seu próprio this

• Arrow Functions também não possuem seu próprio
  arguments

• Isso NÃO impede uma Arrow Function de ser utilizada
  como callback

• A escolha entre function e Arrow Function depende
  principalmente do comportamento desejado para this

====================================================


RESUMO IMPORTANTE

====================================================

• CALLBACK

  → É uma função passada como argumento para outra função

  → Pode ser executada posteriormente

  → Pode ser uma function tradicional ou Arrow Function

• CALLBACK NÃO É OBRIGATÓRIO

  → Uma função pode receber ou não um callback

• CALLBACK E ASSINCRONISMO

  → Callbacks são frequentemente utilizados em
    operações assíncronas

  → setTimeout() é um exemplo

• if (callback)

  → Verifica se um callback foi fornecido

• callback()

  → Executa a função recebida como argumento

• SEQUÊNCIA DE CALLBACKS

  → Uma função pode executar outra através de um callback

  → Isso permite criar uma sequência de operações

⚠️ Muitas funções dependentes de callbacks aninhados
   podem deixar o código difícil de manter.

⚠️ Esse problema é conhecido como "Callback Hell".

====================================================
*/