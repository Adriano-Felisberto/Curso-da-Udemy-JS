let num1 = 9.6;
let num2 = Math.floor(num1); // floor arredonda para baixo
let num3 = Math.ceil(num1); // ceil arredonda para cima
// aviso tem um limite para cada arredondamento
console.log(num2);

let num4 = Math.round(num1); // round arredonda para o mais próximo
// exemplo 5.5 arredonda para cima, 5.4 arredonda para baixo
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

let numeroAleatorio = Math.random() * (10 - 5) + 5;// gera um número aleatório entre 5 e 10

console.log(numeroAleatorio);

let numeroAleatorio2 = Math.round(Math.random() * (10 - 5) + 5); 

console.log(Math.pow(2, 10)); // o pow é para raiz ou potenciação, no caso 2 elevado a 10

// ou podemos usar o operador **

console.log(25 ** 0.5); // raiz quadrada de 25

// prestar atenção que o js aceita divisão por zero e dependendo chega ao infinito