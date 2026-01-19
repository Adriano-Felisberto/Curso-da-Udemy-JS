/* =========================================================
TIPOS DE DADOS EM JAVASCRIPT

TIPOS DE DADOS PRIMITIVOS (IMUTÁVEIS)
• string
• number
• boolean
• undefined
• null
• bigint
• symbol

CARACTERÍSTICAS:
- São IMUTÁVEIS
- Não é possível alterar partes do valor
- Só mudam quando o valor é substituído por completo
  Ex: 'luiz' → 'adriano'

---------------------------------------------------------

TIPOS DE DADOS DE REFERÊNCIA (MUTÁVEIS)
• array
• object
• function

CARACTERÍSTICAS:
- São MUTÁVEIS
- São passados por REFERÊNCIA
- Duas variáveis podem apontar para o MESMO valor na memória
========================================================= */


/* =========================================================
IMUTABILIDADE DOS TIPOS PRIMITIVOS

• Tipos primitivos NÃO mudam internamente
• Alterações como nome[0] = 'a' NÃO funcionam
• Para "mudar", é necessário substituir o valor inteiro

EXEMPLO:
'luiz' → 'adriano' ✔
'luiz'[0] = 'a'   ✘
========================================================= */


/* ============================
PRIMITIVOS (STRING)
============================ */

let nome = 'luiz';
nome = 'otavio';

// ❌ Tentativa de alterar parte da string (não funciona)
nome[0] = 'a';

console.log(nome[0]);
// Resultado: 'o'
// A string não foi alterada


/* ============================
CÓPIA DE VALOR (PRIMITIVOS)
============================ */

let a = 'A';
let b = a; // ocorre uma CÓPIA do valor

console.log(a, b);

a = 'outra coisa';
console.log(a, b);
// b não é afetado


/* ============================
REFERÊNCIA (ARRAY)
============================ */

let a1 = [1, 2, 3];
let b1 = a1; 
// b1 aponta para o MESMO array que a1

console.log(a1, b1);

a1.push(4);
console.log(a1, b1);
// efeito espelho

b1.pop();
console.log(a1, b1);
// ambos continuam sendo alterados


/* ============================
REFERÊNCIA (OBJETO)
============================ */

const pessoa = {
  nome: 'Adriano',
  sobrenome: 'Felisberto'
};

const A2 = pessoa;
/*
A2 não é uma cópia.
É apenas outra referência para o MESMO objeto
(efeito espelho)
*/


/* =========================================================
COMO EVITAR O "EFEITO ESPELHO"

• Criamos uma CÓPIA usando o spread operator (...)
• Cada variável passa a ter seu próprio valor

OBS:
- Spread cria uma CÓPIA RASA (shallow copy)
========================================================= */

const B2 = { ...pessoa };

pessoa.nome = 'joão';

console.log(A2); // nome alterado
console.log(B2); // nome original mantido
