let varA = 'A';
let varB = 'B';
let varC = 'C';

let varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varTemp);

//Segunda resolução

[varA, varB, varC] = [varB, varC, varA]; 
//basicamente fiz uma lista e com essa lista eu criei uma nova modificando as posições

console.log(varA, varB, varC);