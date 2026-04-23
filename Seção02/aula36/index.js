/*
====================================================
FOR / FOR...IN (ARRAYS E OBJETOS)
====================================================

• for tradicional
  → Usado quando precisamos do CONTROLE do índice
  → Muito comum para arrays

• for...in
  → Percorre os ÍNDICES do array
  → Percorre as CHAVES de um objeto
  → Muito útil quando queremos saber "o nome" da propriedade

IMPORTANTE:
• for...in NÃO retorna o valor diretamente
• Ele retorna o índice (array) ou a chave (objeto)

====================================================
*/

const frutas = ['pera', 'maça', 'uva'];
// Array de frutas

// ==================================================
// FOR TRADICIONAL (ARRAY)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    // Acessa o valor usando o índice
}

// Índices do array:
//     0        1        2
//  'pera',  'maça',  'uva'

// ==================================================
// FOR...IN COM ARRAY (LÊ OS ÍNDICES)

for (let i in frutas) {
    console.log(i);
    // Exibe apenas os índices: 0, 1, 2
}

// ==================================================
// FOR...IN COM ARRAY (LENDO OS VALORES)

for (let i in frutas) {
    console.log(frutas[i]);
    // Usa o índice para acessar o valor
}

// ==================================================
// OBJETOS

const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Felisberto',
    idade: 19
};
// Objeto com pares chave: valor

// Acessando propriedades manualmente
console.log(pessoa.nome);
// Acesso direto com ponto

console.log(pessoa['nome']);
// Acesso usando colchetes (útil quando a chave é dinâmica)

// ==================================================
// FOR...IN COM OBJETO (LÊ AS CHAVES)

for (let i in pessoa) {
    console.log(i);
    // Exibe as chaves: nome, sobrenome, idade
}

// ==================================================
// FOR...IN COM OBJETO (LÊ OS VALORES)

for (let i in pessoa) {
    console.log(pessoa[i]);
    // Usa a chave para acessar o valor
}

// ==================================================
// FOR...IN MOSTRANDO CHAVE + VALOR

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
    // Exibe a chave e o valor correspondente
}

/*
====================================================
RESUMO IMPORTANTE
====================================================

• for tradicional
  → Melhor para arrays
  → Dá controle total do índice

• for...in
  → Arrays → percorre ÍNDICES
  → Objetos → percorre CHAVES

• Para objetos:
  → for...in é a forma mais comum
*/