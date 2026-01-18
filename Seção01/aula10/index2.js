
/**
 * Aritmeticos
 * 
 * + adição / concatenação
 * - subtração
 * * multiplicação
 * / divisão
 * ** potenciação
 * % resto da divisão
 * () parênteses
 */

/* ordem de precedência

1- parênteses ()
2- potenciação **
3- multiplicação * e divisão /
4- adição + e subtração -

*/

/* incremento e decremento

definição de incremento e decremento: 

incremento é o ato de aumentar o valor de uma variável em uma unidade
decremento é o ato de diminuir o valor de uma variável em uma unidade

operadores de incremento e decremento:

++ incremento
-- decremento

*/

/* operadores de atribuição
NaN = Not a number (não é um número)
aparece quando tentamos fazer uma operação matemática com um valor que não é numérico


Operadores de atribuição são usados para atribuir valores a variáveis.

eles são:

= atribuição simples
+= adição
-= subtração
*= multiplicação
/= divisão
**= potenciação
%= resto da divisão

*/

/* converter variaveis para outros tipos

*/

const num1 = 5
const num2 = 10

console.log(num1 + num2); // adição
console.log('Adriano' + ' ' + 'Silva'); // concatenação
console.log(num1 - num2); // subtraçaõ
console.log(num1 * num2); // multiplicação
console.log(num1 / num2); // divisão
console.log(num1 ** num2); // potenciação
console.log(num2 % num1); // resto da divisão

// metodo de forçar a começar por x parte do calculo
console.log((num1 + num2) * 2); // primeiro faz a soma, depois multiplica por 2 devido aos parentes

const passo = 2;
let contador = 1;
contador++; // adiciona mais um ao contador incremento
console.log(contador);
//pre incremento
console.log(++contador); // adiciona mais um ao contador antes de mostrar o valor
// ou seja mostra o valor antes de fazer a operação

//pos incremento
console.log(contador++); // mostra o valor do contador antes de adicionar mais um
// ou seja faz a operação depois de mostrar o valor



contador--; // subtrai um do contador decremento
console.log(contador);

// outro meio de fazer o incremento e o decremento

contador = contador + passo; // incremento 
contador = contador - passo; // decremento

// outra foma

contador += passo; // incremento
contador -= passo; // decremento

const stringNumero = parseInt('5'); // converte string para número inteiro forma mais usada
// const stringNumero = Number('5'); // converte string para número inteiro ou flutuante atualmente menos usada
stringNumero = parseFloat('5'); // converte string para número flutuante forma mais usada

const numero = 10;

console.log(stringNumero + numero);