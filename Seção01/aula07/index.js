
// não é permitido criar constantes com palavras reservadas
// e não podemos criar com o mesmo nome de uma que  já existe
//temos que criar com nomes significativos
// não pode começar com numeros
// não pd ter espaçoes
//utilizamos camelCase para nomear variaveis
//Case-sensitive
// não podemos modificar o valor de uma constantes
// não usar o var, usar const(valor fixo) ou let(valor modificavel)
// o const tem que possuir um valor na declaração
const nome = "Adriano";

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 5;


console.log(conta);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero));

//cuidado!!!

const a = "5";
const b = 5;

console.log(a + b); // vai juntar e não somar


