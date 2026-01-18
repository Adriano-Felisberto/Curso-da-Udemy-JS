let numero1 = 10;
let numero2 = 2;
let numero3 = 3.7;

console.log(numero1.toString() + numero2);

numero1 = numero1.toString(); // podemos usar o toString para converter um número em string
console.log(typeof (numero1)); // confirmando a conversão
console.log(numero1.toString(2)); // com o paramentro 2, converte o número para binário
console.log(numero3.toFixed()); // o toFixed arredonda o número para o inteiro mais próximo
// e se quisermos arrendondar uma certa quantidade de casas decimais é só passar o número de casas como parâmetro

console.log(Number.isInteger(numero2)); // verifica se o número é inteiro atraves do number.isinteger

let temp = numero3 * 'olá'; // se for um numero string o isnan vira false, se for uma string que não é número, vem true
console.log(temp);
console.log(Number.isNaN(temp));


// prestar atenção com a precisão dos numeros no js

let numero4 = 0.7;
let numero5 = 0.1;

console.log(numero4 + numero5); // o resultado esperado seria 0.8, mas por causa da precisão do js, o resultado vem 0.7999999999999999

// só o tofixed não resolve o problema por completo

numero4 += numero5;
numero4 += numero5;
numero4 += numero5;

console.log(numero4); // o resultado esperado seria 1.0, mas por causa da precisão do js, o resultado vem 0.9999999999999999

// para resolver esse problema, podemos usar o seguinte truque:

numero4 = parseFloat(numero4.toFixed(2));
console.log(numero4);

// ou podemos usar o number no lugar do parsefloat

// metodo atraves de calculo matematoco

numero4 = ((numero4 * 100) + (numero5 * 100)) / 100;
console.log(numero4);