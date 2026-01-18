const nome = 'Adriano'; // string
const nome1 = "Adriano";// string
const nome2 = `Adriano`;// string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeALuno; // undefined = não aponta para nenhum local na memória

let sobrenomeAluno = null; // nulo = não aponta para nenhum local na memória

// quando usar o null e o undefined

// undefined = quando a variável não foi inicializada(não recebeu nenhum valor)
// null = quando queremos zerar o valor da variável
/* 
null
let cor = 'azul';
cor = null; // zera o valor da variavel 

um exemplo profissional é um tema de site (claro ou escuro)
se o usuário não escolher o tema, o valor da variavel será null
e o sistema irá adotar um tema padrão

undefined
let cor;
console.log(cor); // undefined, pois a variavel não foi inicializada
um exemplo profissional é quando buscamos dados em um banco de dados
e o dado não existe que podemos adicionar um valor ao undefined

*/

const aprovado = true; // boolean = true, false

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);

console.log(a, b);

let c = 2;
let d = c;

console.log(c, d); // 2, 2

c = 3;

console.log(c, d); // 3, 2



