/*
====================================================
FUNÇÕES EM JAVASCRIPT
====================================================

OBJETIVO:
Demonstrar os principais jeitos de trabalhar com funções em JavaScript:
• Declaração de função
• Function Expression
• Funções como dados (first-class objects)
• Arrow Function
• Funções dentro de objetos

Esses conceitos são FUNDAMENTAIS em JS moderno
====================================================
*/

/*
====================================================
DECLARAÇÃO DE FUNÇÃO (FUNCTION HOISTING)
====================================================

• Funções declaradas dessa forma sofrem HOISTING
// Isso significa que elas são "movidas" para o topo do escopo
• Podem ser chamadas ANTES da declaração no código
• O JavaScript "move" a função para o topo na execução

====================================================
*/
falaoi(); // Funciona mesmo antes da função ser declarada

function falaoi() {
    console.log('oi');
}

falaoi(); // Também funciona normalmente

/*
====================================================
FIRST-CLASS OBJECTS (FUNÇÕES COMO DADOS)
====================================================

• Em JavaScript, funções são valores
• Podem ser armazenadas em variáveis
• Podem ser passadas como argumento
• Podem ser retornadas por outras funções

====================================================


----------------------------------------------------
FUNCTION EXPRESSION
----------------------------------------------------

• Função armazenada em uma variável
• NÃO sofre hoisting como a declaração de função
• Só pode ser usada após a definição

----------------------------------------------------
*/
const souUmDado = function () {
    console.log('sou um dado');
};

souUmDado();

/*
====================================================
FUNÇÃO RECEBENDO OUTRA FUNÇÃO
====================================================

• Demonstra que funções são tratadas como valores
• Muito usado em callbacks, eventos e programação funcional
callbacks significa "função de retorno", ou seja, uma função que é passada como argumento para outra função e é executada em algum momento dentro dessa função.



====================================================
*/
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao(); // Executa a função recebida
}

executaFuncao(souUmDado);

/*
====================================================
ARROW FUNCTION
====================================================

• Sintaxe mais curta
• Muito usada em callbacks e funções pequenas
• NÃO possui seu próprio this (importante mais pra frente)
this é uma palavra-chave que se deve ser utilizada para acessar o contexto de execução da função, ou seja, o objeto ao qual a função pertence. Em funções normais, o valor de this pode variar dependendo de como a função é chamada. Já em arrow functions, o valor de this é léxico, ou seja, ele herda o valor do contexto onde a função foi definida.

====================================================
*/
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

funcaoArrow();

/*
====================================================
FUNÇÕES DENTRO DE OBJETOS
====================================================

• Chamadas de MÉTODOS
• Representam comportamentos do objeto
• Forma clássica e forma moderna

====================================================
*/

/*
----------------------------------------------------
FORMA CLÁSSICA
----------------------------------------------------
*/
const obj = {
    falar: function () {
        console.log('estou falando');
    }
};

/*
----------------------------------------------------
FORMA MODERNA (SHORTHAND)
----------------------------------------------------

• Mais limpa
• Mais usada atualmente
• Mesmo comportamento da forma clássica

----------------------------------------------------
*/
const obj2 = {
    falar() {
        console.log('estou falando');
    }
};

// Chamando os métodos dos objetos
obj.falar();
obj2.falar();

/*
====================================================
RESUMO IMPORTANTE
====================================================

• function declaração → sofre hoisting
• function expression → função como valor
• funções são first-class objects
• arrow functions → sintaxe curta
• métodos → funções dentro de objetos

Dominar isso é BASE para:
• callbacks
• eventos
• orientação a objetos
• frameworks (React, Vue, etc.)

====================================================
*/
