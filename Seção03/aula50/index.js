/*
====================================================
FUNÇÕES AVANÇADAS – ARGUMENTS, PARÂMETROS E REST
====================================================

OBJETIVO:
Explicar comportamentos IMPORTANTES de funções em JavaScript:
• arguments
• Parâmetros a mais ou a menos
• Sobrescrita de funções
• Valores padrão
• Curto-circuito com ||
• Desestruturação
• Rest operator (...)

Tudo isso explica "POR QUE o JS se comporta assim"
====================================================
*/

/*
====================================================
ARGUMENTS (EXCLUSIVO DE FUNCTION)
====================================================

• arguments é um objeto parecido com array
• Contém TODOS os argumentos passados
• Funciona APENAS em funções declaradas com function
• NÃO funciona em arrow functions

====================================================
*/
function funcao() {
    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }

    console.log('oi');
    console.log(arguments);      // Todos os argumentos enviados
    console.log(arguments[0]);  // Primeiro argumento
    console.log(total);         // Soma total
}

/*
====================================================
ARGUMENTS IGNORA A QUANTIDADE DE PARÂMETROS
====================================================

• Mesmo declarando (a, b, c)
• arguments ainda captura TODOS os valores enviados
• JS NÃO valida quantidade de parâmetros

====================================================
*/
function funcao2(a, b, c) {
    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

/*
====================================================
PARÂMETROS A MAIS NÃO QUEBRAM A FUNÇÃO
====================================================

• Se enviar MENOS argumentos → ficam undefined
• Se enviar MAIS argumentos → ficam acessíveis via arguments

====================================================
*/
function funcao3(a, b, c, d, e, f) {
    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c, d, e, f);
}

/*
====================================================
SOBRESCRITA DE FUNÇÕES
====================================================

• JavaScript NÃO suporta overloading real
• A ÚLTIMA função com o mesmo nome SOBRESCREVE as anteriores

====================================================
*/
function funcao4(a, b, c) {
    console.log(a + b);
}

function funcao4(a, b) {
    console.log(a + b);
}

/*
====================================================
VALOR PADRÃO USANDO ||
====================================================

• Se b for falsy (undefined, null, 0, false...)
• O valor à direita é usado
• Pode causar bugs com 0

====================================================
*/
function funcao5(a, b) {
    b = b || 0;
    console.log(a + b);
}

/*
====================================================
PROBLEMA DO || COM VALORES FALSY
====================================================
*/
function funcao6(a, b) {
    b = b || 0;
    console.log(a + b);

    b = b || 2;
    console.log(a + b);
}

/*
====================================================
PARÂMETRO PADRÃO MODERNO (ES6)
====================================================
*/
function funcao7(a, b = 2) {
    console.log(a + b);
}

/*
====================================================
OUTRA SOBRESCRITA (ATENÇÃO!)
====================================================
*/
function funcao7(a, b, c) {
    b = b || 0;
    console.log(a + b);
}

/*
====================================================
DESESTRUTURAÇÃO DE OBJETO NOS PARÂMETROS
====================================================
*/
function funcao8({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

/*
====================================================
DESESTRUTURAÇÃO DE ARRAY NOS PARÂMETROS
====================================================
*/
function funcao9([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

/*
====================================================
REST OPERATOR (...)
====================================================

• Agrupa os argumentos restantes em um ARRAY
• Substitui arguments no JS moderno
• Funciona em qualquer tipo de função

====================================================
*/
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

        console.log(numero);
    }

    console.log(acumulador);
    console.log(operador, acumulador, numeros);
}

/*
====================================================
REST EM ARROW FUNCTION (CONTA2)
====================================================

• Arrow functions NÃO possuem arguments
• (...args) captura TODOS os valores enviados
• args é um ARRAY real
• Forma moderna e correta de lidar com múltiplos argumentos

====================================================
*/
const conta2 = (...args) => {
    console.log(args);
};

/*
====================================================
CHAMADAS DAS FUNÇÕES
====================================================
*/
funcao(1,2,3,4,5,6,7,8,9,10);
funcao2(1,2,3,4,5,6,7,8,9,10);
funcao3(1,2,3);
funcao4(2,2);
funcao5(2,2);
funcao6(2);
funcao8({ nome: 'adriano', sobrenome: 'felisberto', idade: 19 });
funcao9(['Adriano', 'Felisberto', 19]);
conta('+', 0, 20, 30, 40, 50);
conta2('+', 0, 20, 30, 40, 50);

/*
====================================================
RESUMO FINAL
====================================================

• arguments → só existe em function
• Arrow function NÃO tem arguments
• Rest (...) é o padrão moderno
• JS não valida quantidade de parâmetros
• Funções com mesmo nome são sobrescritas
• || pode causar bugs com valores falsy
• Parâmetros padrão são a forma correta

Esse conhecimento evita MUITOS bugs no dia a dia 👍
====================================================
*/
