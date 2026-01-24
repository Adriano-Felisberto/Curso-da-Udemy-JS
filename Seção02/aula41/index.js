// atividida



/*
====================================================
FUNÇÃO PARA DESCOBRIR O MAIOR NÚMERO
====================================================

Abaixo estão TRÊS formas válidas de resolver o
mesmo problema, do jeito mais didático até o
mais enxuto (padrão profissional).

====================================================
*/

// ==================================================
// 1️⃣ FORMA MAIS VERBOSA (if / else)
// ==================================================
// Boa para iniciantes, pois deixa a lógica bem clara

// const funcaoMaior = (n1, n2) => {
//     if (n1 > n2) {
//         return `${n1} é o número maior`;
//     } 
//     else if (n1 < n2) {
//         return `${n2} é o número maior`;
//     }
//     else {
//         return 'Iguais';
//     }
// };

// const maior = funcaoMaior(1, 4);
// console.log(maior);

// ==================================================
// 2️⃣ USANDO Math.max()
// ==================================================
// Forma simples e confiável
// Muito usada quando não precisamos de lógica extra

// const funcaoMaior = (n1, n2) => {
//     const maiorNum = Math.max(n1, n2);
//     return maiorNum;
// };

// const maior = funcaoMaior(1, 4);
// console.log(maior);

// ==================================================
// 3️⃣ OPERADOR TERNÁRIO (forma mais comum)
// ==================================================

/*
Operador ternário
condição ? valorSeVerdadeiro : valorSeFalso

⚠ AVISO IMPORTANTE
• Ideal quando existem APENAS duas respostas possíveis
• Pode até ser aninhado (mais de uma condição),
  mas NÃO é recomendado pois prejudica a leitura
*/

const funcaoMaior = (n1, n2) => {
    return n1 > n2 ? n1 : n2;
};

console.log(funcaoMaior(4, 10));
// Resultado: 10

/*
====================================================
QUAL USAR NA PRÁTICA?
====================================================

• if / else
  → quando a lógica for grande ou didática

• Math.max
  → quando só precisa do maior valor

• Ternário
  → quando é simples e tem só duas opções

====================================================
*/
