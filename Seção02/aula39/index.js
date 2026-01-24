/*
====================================================
WHILE, DO...WHILE E FOR
====================================================

OBJETIVO DESTE CÓDIGO
----------------------------------------------------
• Mostrar o funcionamento do while
• Mostrar a diferença do do...while
• Comparar quando usar for ou while

====================================================
*/

// Exemplo simples com while
const nome = 'luiz';
let controle = 0;

while (controle < nome.length) {
    console.log(controle);
    controle++;
}

// ==================================================

// Função para gerar número aleatório
const randomizador = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

let rand = randomizador(1, 50);
console.log(rand);

// While tradicional
// Só executa se a condição for verdadeira
while (rand !== 10) {
    rand = randomizador(1, 50);
    console.log(rand);
}

console.log('#####################################');

// Do...while
// Executa PELO MENOS UMA VEZ, mesmo que a condição seja falsa
do {
    rand = randomizador(1, 50);
    console.log(rand);
} while (rand !== 10);

/*
====================================================
DIFERENÇAS ENTRE FOR, WHILE E DO...WHILE
====================================================

FOR
----------------------------------------------------
• Usado quando você SABE:
  → quantas vezes vai repetir
  → ou tem um controle claro de início e fim

Exemplo típico:
for (let i = 0; i < array.length; i++) { }

Quando usar:
✔ Percorrer arrays
✔ Percorrer strings
✔ Repetições com contador definido

====================================================

WHILE
----------------------------------------------------
• Usado quando você NÃO SABE
  quantas vezes o loop vai rodar
• Depende de uma condição externa

⚠ Pode NÃO executar nenhuma vez

Exemplo:
while (condicao) { }

Quando usar:
✔ Esperar algo acontecer
✔ Gerar valores até atingir um resultado
✔ Laços baseados em condição, não em quantidade

====================================================

DO...WHILE
----------------------------------------------------
• Igual ao while
• MAS garante pelo menos UMA execução

⚠ A condição é verificada SÓ NO FINAL

Exemplo:
do { } while (condicao);

Quando usar:
✔ Quando o código precisa rodar ao menos uma vez
✔ Menus
✔ Tentativas iniciais obrigatórias

====================================================

RESUMO RÁPIDO 🧠
----------------------------------------------------
• FOR → quando sabe quantas vezes
• WHILE → quando NÃO sabe quantas vezes
• DO...WHILE → quando precisa rodar pelo menos uma vez
====================================================
*/
