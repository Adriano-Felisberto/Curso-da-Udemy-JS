/*
====================================================

OBJETO MAP

====================================================

• Map é uma estrutura utilizada para armazenar
  pares de CHAVE e VALOR.

• Diferente de objetos comuns, a chave de um Map
  pode ser de diferentes tipos.

• Os métodos principais utilizados neste exemplo são:

  → set() → adiciona ou altera um valor

  → get() → recupera um valor através da chave

  → delete() → remove um elemento através da chave

  → keys() → retorna as chaves do Map

  → values() → retorna os valores do Map

====================================================
*/


const pessoa = [

    { id: 3, nome: 'Adriano' },

    { id: 2, nome: 'Ana' },

    { id: 1, nome: 'Ester' }

];


// ==================================================
// ARRAY → OBJETO
// → Utilizando o ID como chave do objeto
// ==================================================

const novasPessoas = {};

for (const { id, nome } of pessoa) {

    console.log(id, nome);

    novasPessoas[id] = { id, nome };

};


// ==================================================
// ARRAY → OBJETO
// → Copiando cada objeto utilizando spread
// ==================================================

const novasPessoas2 = {};

for (const pessoaAtual of pessoa) {

    console.log(pessoaAtual.id, pessoaAtual.nome);

    novasPessoas2[pessoaAtual.id] = { ...pessoaAtual };

};


// ==================================================
// ARRAY → MAP
// → Utilizando o ID como chave
// ==================================================

const novasPessoas3 = new Map();

for (const pessoaAtual of pessoa) {

    console.log(pessoaAtual.id, pessoaAtual.nome);

    novasPessoas3.set(pessoaAtual.id, { ...pessoaAtual });

};


// ==================================================
// PERCORRENDO O MAP
// → Cada elemento possui CHAVE e VALOR
// → O valor é desestruturado para acessar id e nome
// ==================================================

for (const [identifica, { id, nome }] of novasPessoas3) {

    console.log(identifica, id, nome);

};


// ==================================================
// PERCORRENDO AS CHAVES
// → keys() retorna somente as chaves do Map
// ==================================================

for (const identifica of novasPessoas3.keys()) {

    console.log(identifica);

};


// ==================================================
// PERCORRENDO OS VALORES
// → values() retorna somente os valores do Map
// ==================================================

for (const valor of novasPessoas3.values()) {

    console.log(valor);

};


// ==================================================
// REMOVENDO ELEMENTO
// → delete() remove o elemento através da chave
// ==================================================

novasPessoas3.delete(2);

console.log(novasPessoas3);