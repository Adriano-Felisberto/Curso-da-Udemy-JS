let umaString = "Um \"texto\""; // a \ é usada para escapar caracteres especiais

console.log(umaString[4]);

console.log(umaString.charAt(4)); // mesma coisa que a linha de cima
// porém é mais explícita e fácil de entender

console.log(umaString.concat(' ', 'em', ' ', 'um ')); // concatena strings
// pouco usado hoje em dia; o operador + ou template string são mais comuns

console.log(umaString.indexOf('texto')); // procura letras ou palavras na string

console.log(umaString.indexOf('o', 3)); // procura o 'o' a partir da posição 3

console.log(umaString.lastIndexOf('o')); // procura a última ocorrência de 'o' na string

console.log(umaString.match(/[a-z]/)); // retorna a primeira letra minúscula encontrada

console.log(umaString.search(/x/)); // retorna o índice onde o padrão foi encontrado

console.log(umaString.replace('um', 'outra')); // substitui a primeira ocorrência

console.log(umaString.replace(/u/g, '#')); // 

console.log(umaString.length);

console.log(umaString.slice(3, 10));

console.log(umaString.split(' ')); // divide a string em um array, usando o espaço como separador

console.log(umaString.slice(-3 -1));

console.log(umaString.substring(umaString.length -5, umaString.length -1));

console.log(umaString.split(' '));

console.log(umaString.split(' ', 1));

console.log(umaString.toUpperCase());

console.log(umaString.toLowerCase());



