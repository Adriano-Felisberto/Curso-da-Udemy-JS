/*
====================================================
LAÇOS DE REPETIÇÃO – FOR
====================================================

• O laço for é usado quando sabemos QUANTAS vezes
  queremos repetir um bloco de código

ESTRUTURA DO FOR:
for (inicialização; condição; incremento) {
    código a ser repetido
}

• inicialização → geralmente um contador
• condição → enquanto for true, o laço continua
• incremento → altera o contador a cada repetição

====================================================
*/

// Execução manual (sem laço)
console.log('linha 1');
console.log('linha 2');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5');
// Esse método não é escalável e gera repetição de código

// ==================================================

// i = index (índice / contador)
for (let i = 0; i <= 5; i++) {
    console.log(`linha ${i}`);
    // O código será executado enquanto i <= 5
    // A cada volta, i aumenta 1
}

// ==================================================

// Incremento personalizado
for (let i = 0; i <= 50; i += 10) {
    console.log(`linha ${i}`);
    // Aqui o contador aumenta de 10 em 10
}

// ==================================================

// Contagem regressiva
for (let i = 500; i >= 400; i -= 10) {
    console.log(`linha ${i}`);
    // Começa em 500 e diminui 10 a cada iteração
}

// ==================================================

// Verificando se o número é par
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    // Se o resto da divisão por 2 for 0, é par

    console.log(i, par);
    // Exibe o número e true/false
}

// ==================================================

// Usando operador ternário para classificar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    // Operador ternário:
    // condição ? valorSeTrue : valorSeFalse

    console.log(i, par);
}

// ==================================================

// Percorrendo um array com for
const frutas = ['maça', 'pêra', 'uva'];
// Arrays possuem a propriedade length (tamanho)

for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}`, frutas[i]);
    // i representa o índice do array
    // frutas[i] acessa o valor naquela posição
}

/*
====================================================
OBSERVAÇÕES IMPORTANTES
====================================================

• O for é muito usado em código profissional
• Ideal para percorrer arrays
• O contador (i) só existe dentro do bloco do for
• Evita repetição desnecessária de código
• Torna o código mais limpo e fácil de manter

Mais à frente:
→ veremos for...of
→ veremos for...in
→ e métodos como forEach
====================================================
*/
