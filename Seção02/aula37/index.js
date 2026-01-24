/*
====================================================
FOR CLÁSSICO / FOR...IN / FOR...OF / forEach
====================================================

• Strings e arrays são ITERÁVEIS
• Objetos NÃO são iteráveis com for...of

====================================================
*/

const nome = 'Adriano';
const nomes = ['Adriano', 'Daniel', 'Denilson', 'Robson'];

// ==================================================
// FOR CLÁSSICO COM STRING
// → Percorre usando o índice
// → Muito controle (contador, condição, incremento)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('*****************************');

// ==================================================
// FOR...IN COM STRING
// → Retorna os ÍNDICES da string
// → String vira algo parecido com um array de caracteres

for (let i in nome) {
    console.log(nome[i]);
}

console.log('*****************************');

// ==================================================
// FOR...OF COM STRING
// → Retorna o VALOR direto
// → Forma MAIS SIMPLES de ler strings

for (let valor of nome) {
    console.log(valor);
}

console.log('*****************************');

// ==================================================
// FOR CLÁSSICO COM ARRAY
// → Forma mais tradicional
// → Muito usada quando precisa do índice

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('*****************************');

// ==================================================
// FOR...IN COM ARRAY
// → Retorna os ÍNDICES do array
// → NÃO retorna o valor direto

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('*****************************');

// ==================================================
// FOR...OF COM ARRAY
// → Retorna o VALOR em si
// → Forma mais limpa quando não precisa do índice

for (let valor of nomes) {
    console.log(valor);
}

console.log('*****************************');

// ==================================================
// forEach (ARRAY)
// → Método do array
// → Executa uma função para cada elemento
// → NÃO funciona em strings

nomes.forEach(function(valor) {
    console.log(valor);
});

console.log('*****************************');

// ==================================================
// forEach com índice

nomes.forEach(function(valor, indice) {
    console.log(valor, indice);
});

console.log('*****************************');

// ==================================================
// forEach com valor, índice e array completo

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

/*
====================================================
RESUMO IMPORTANTE (DECORA ISSO)
====================================================

• for clássico
  → Melhor quando precisa de controle total
  → Muito usado com arrays e strings

• for...in
  → Retorna ÍNDICE (array/string)
  → Retorna CHAVE (objeto)
  ⚠️ Não retorna o valor direto

• for...of
  → Retorna o VALOR direto
  → Só funciona com ITERÁVEIS (array, string)
  ❌ NÃO funciona com objetos

• forEach
  → Só para arrays
  → Não dá break nem return
  → Código mais limpo e funcional

====================================================
*/
