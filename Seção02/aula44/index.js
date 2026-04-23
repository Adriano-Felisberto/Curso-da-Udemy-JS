/*
====================================================
TRY / CATCH E THROW (TRATAMENTO DE ERROS)
====================================================

• try
  → "tentar" executar um bloco de código
  → Se ocorrer um erro, o JS NÃO quebra o programa

• catch
  → Captura o erro que aconteceu no try
  → Permite tratar o erro de forma controlada

• throw
  → Lança um erro manualmente
  → Muito usado para validar dados em funções

====================================================
IMPORTANTE (PADRÃO PROFISSIONAL):
• Erros reais NÃO devem ser exibidos diretamente
  para o usuário final (front-end)
• O erro técnico é útil para manutenção e debug
• Para o usuário, mostramos uma mensagem amigável

====================================================
*/

// ==================================================
// EXEMPLO 1 — ERRO DE VARIÁVEL INEXISTENTE
// ==================================================

try { 
    // Tentamos executar este código
    console.log(nãoExisto);
}
catch (error) {
    // Executa SOMENTE se ocorrer um erro no try
    console.log('nãoExisto não existe');
    console.log(error);
    // O error contém detalhes técnicos do problema
}

// ==================================================
// EXEMPLO 2 — THROW (lançando erro manualmente)
// ==================================================

const soma = (x, y) => {
    // Validação dos parâmetros
    if (typeof x !== 'number' || typeof y !== 'number') {
        // Lançamos um erro manual
        throw new Error('x e y precisam ser números');
        // Também poderia ser:
        // throw 'x e y precisam ser números';
    }

    // Só executa se não houver erro
    return x + y;
};

// ==================================================
// TRATANDO O ERRO DA FUNÇÃO
// ==================================================

try {
    // Chamadas que geram erro
    console.log(soma('1', 2));
    console.log(soma('1', 2));
}
catch (err) {
    // Captura o erro lançado pelo throw
    console.log(err);
    console.log('Alguma coisa mais amigável');
    // Boa prática: NÃO mostrar erro técnico no front
}

/*
====================================================
QUANDO USAR TRY / CATCH?
====================================================

• Quando algo pode falhar:
  → Dados do usuário
  → Requisições
  → Funções críticas

• Para evitar que o programa "quebre"

====================================================
RESUMO RÁPIDO
====================================================

try    → tenta executar
catch  → captura o erro
throw  → cria um erro manual

====================================================
*/
