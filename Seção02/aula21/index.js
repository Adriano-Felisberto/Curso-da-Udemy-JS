/*
OPERADORES DE COMPARAÇÃo

>   Maior que
>=  Maior que ou igual a
<   Menor que
<=  Menor que ou igual a
==  Igualdade (compara apenas o valor)
=== Igualdade estrita (compara valor e tipo)
!=  Diferente (compara apenas o valor)
!== Diferente estrito (compara valor e tipo)

IMPORTANTE:
• Operadores de comparação SEMPRE retornam um valor boolean
• Boolean pode ser apenas: true ou false

EXEMPLOS:
10 > 5   -> true
10 < 5   -> false

Podemos armazenar comparações dentro de variáveis

RECOMENDAÇÃO:
• Prefira SEMPRE os operadores estritos (=== e !==)
• Eles evitam erros de comparação entre tipos diferentes
=========================================================
*/

console.log(10 > 5);
// Retorna true, pois 10 é maior que 5

console.log(10 >= 10);
// Retorna true, pois 10 é maior ou igual a 10

const comparacao = 10 < 5;
// Armazena o resultado da comparação dentro da variável

console.log(comparacao);
// Exibe false, pois 10 não é menor que 5

const num = 10;
const num2 = 10;
// Declara duas variáveis numéricas com o mesmo valor

console.log(num <= num2);
// Retorna true, pois 10 é menor ou igual a 10

const comp = num == num2;
// Igualdade simples, compara apenas o valor

console.log(comp);
// Retorna true

const num3 = 10;
// Tipo number

const num4 = '10';
// Tipo string

console.log(num3 === num4);
// Retorna false
// Apesar dos valores serem iguais, os tipos são diferentes

const num5 = 10;
let num6 = 9;
// Variáveis com valores diferentes

console.log(num5 != num6);
// Retorna true, pois os valores são diferentes

num6 = 10;
// Atualiza o valor da variável num6

console.log(num5 != num6);
// Retorna false, pois agora os valores são iguais
