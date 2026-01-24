/*
====================================================
CONTINUE E BREAK EM ESTRUTURAS DE REPETIÇÃO
====================================================

• continue
  → PULA a iteração atual
  → O laço continua para o próximo valor

• break
  → ENCERRA o laço imediatamente
  → Nenhuma outra iteração acontece

⚠ IMPORTANTE
continue e break funcionam em QUALQUER laço:
for, for in, for of, while e do...while

====================================================
*/

// ==================================================
// FOR...OF (valores do array)
// ==================================================

const numeros = [1, , 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('pulei o número 2');
        continue; // pula o 2
    } 
    
    else if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // encerra o laço
    }

    console.log(numero);
}

// ==================================================
// FOR CLÁSSICO (controle total do índice)
// ==================================================

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 2) {
        console.log('pulei o número 2');
        continue;
    }

    if (numeros[i] === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    console.log(numeros[i]);
}

// ==================================================
// FOR...IN (índices / chaves)
// ==================================================

for (let indice in numeros) {
    if (numeros[indice] === 2) {
        console.log('pulei o número 2');
        continue;
    }

    if (numeros[indice] === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    console.log(numeros[indice]);
}

// ==================================================
// WHILE (condição externa)
// ==================================================

let i = 0;

while (i < numeros.length) {
    if (numeros[i] === 2) {
        console.log('pulei o número 2');
        i++; // ⚠ MUITO IMPORTANTE não esquecer
        continue;
    }

    if (numeros[i] === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    console.log(numeros[i]);
    i++;
}

// ==================================================
// DO...WHILE (executa pelo menos uma vez)
// ==================================================

let j = 0;

do {
    if (numeros[j] === 2) {
        console.log('pulei o número 2');
        j++;
        continue;
    }

    if (numeros[j] === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    console.log(numeros[j]);
    j++;
} while (j < numeros.length);

