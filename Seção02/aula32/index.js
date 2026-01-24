/*
====================================================
REST, SPREAD E DESESTRUTURAÇÃO COM ARRAYS
====================================================

• Desestruturação
  → Permite extrair valores de arrays ou objetos
  → Evita acessar índices manualmente (array[0], array[1]...)

• Rest (...)
  → Junta o "resto" dos valores em uma variável
  → Sempre vem por ÚLTIMO

• Spread (...)
  → Espalha valores (veremos melhor mais à frente)

====================================================
*/

// Valores iniciais
let a = 'A';
let b = 'B';
let c = 'C';

// Criamos um array com outra ordem
const letras = [b, c, a];

// Atribuição via desestruturação
[a, b, c] = letras;
// Os valores são reatribuídos conforme a ordem do array

console.log(a, b, c);
// Resultado: B C A

// ==================================================

// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Forma tradicional (sem desestruturação)
const primeiroNumeroEx1 = numeros[0];
// Acessa diretamente o índice 0

console.log(primeiroNumeroEx1);

// ==================================================

// Desestruturação com REST
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// primeiroNumero → 1
// segundoNumero → 2
// resto → [3, 4, 5, 6, 7]

console.log(primeiroNumero, segundoNumero, resto);

// ==================================================

// Pulando valores na desestruturação
const [um, , tres, , cinco, , sete] = numeros;
// As vírgulas "pulam" posições no array

console.log(um, tres, cinco);
// Resultado: 1 3 5

// ==================================================
// Arrays dentro de arrays (arrays aninhados)
// Índices:        0           1           2
//               0  1  2     0  1  2     0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Cada posição contém OUTRO array

// Acesso manual (forma tradicional)
console.log(numeros2[0][2]);
// Primeiro array → índice 0
// Dentro dele → índice 2 (valor 3)

// ==================================================

// Desestruturação de arrays aninhados (FORMA RECOMENDADA)
const [lista1, lista2, lista3] = numeros2;
// Cada variável recebe um array interno

console.log(lista2[2]);
// Acessa o terceiro valor do segundo array → 6

// ==================================================
/*
FORMA DIFÍCIL (NÃO RECOMENDADA)

→ Esse tipo de desestruturação funciona,
  mas é DIFÍCIL de ler e manter.

PROBLEMAS:
• Pouco legível
• Confuso para iniciantes
• Difícil de entender depois de um tempo
• Não é comum em código profissional

Use APENAS para estudo.
*/

// Forma difícil usando "pulos" dentro da desestruturação
const [, [, , seis]] = numeros2;
// Pula o primeiro array
// Entra no segundo array
// Pula dois valores
// Captura o valor 6

console.log(seis);
// Resultado: 6
