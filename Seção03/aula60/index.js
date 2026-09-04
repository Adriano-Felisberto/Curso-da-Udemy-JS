/*
====================================================

RECURSIVIDADE

====================================================

• Recursividade ocorre quando uma função chama a si mesma

• É necessário definir uma CONDIÇÃO DE PARADA

• Sem uma condição de parada, a função continuará
  chamando a si mesma indefinidamente

====================================================
*/


// ==================================================
// FUNÇÃO RECURSIVA
// → Recebe um valor máximo como parâmetro
// → Incrementa o valor a cada chamada
// → Exibe o valor no console
// → Chama a própria função novamente
// ==================================================

const recursiva = (max) => {

    // → Condição de parada da recursividade
    // → Encerra a função quando o valor atingir 10
    if (max >= 10) {

        return;

    }

    max++;

    console.log(max);

    // → Chama a própria função com o valor atualizado
    recursiva(max);

}

recursiva(0);


/*
====================================================

COMO A RECURSIVIDADE FUNCIONA

====================================================

• A função começa recebendo o valor 0

• A cada execução:

  → Verifica a condição de parada

  → Incrementa o valor

  → Exibe o valor

  → Chama a própria função novamente

• Quando max atingir 10:

  → A condição if será verdadeira

  → return encerra a função

  → A recursividade é finalizada

====================================================


RESUMO IMPORTANTE

====================================================

• RECURSIVIDADE

  → Função que chama a si mesma

• CONDIÇÃO DE PARADA

  → Define quando a recursividade deve terminar

• return

  → Interrompe a execução da função

⚠️ Toda função recursiva deve possuir uma condição
   de parada para evitar chamadas infinitas.

====================================================
*/