/*
====================================================

IIFE
Immediately Invoked Function Expression

====================================================

• IIFE é uma função executada imediatamente após
  sua criação

• O principal objetivo é criar um ESCOPO isolado

• Variáveis declaradas dentro da IIFE não ficam
  disponíveis no escopo externo

• Pode receber parâmetros normalmente

====================================================
*/


// ==================================================
// FUNÇÃO CONVENCIONAL
// → A função é declarada primeiro
// → Precisa ser chamada posteriormente
// ==================================================

const qualquerCoisa = () => {

    console.log(123);

};

qualquerCoisa();


// ==================================================
// IIFE
// → A função é criada e executada imediatamente
// → Não é necessário realizar uma chamada posteriormente
// → Cria um escopo isolado para suas variáveis
// ==================================================

(function () {

    const sobrenome = 'Felisberto';

    console.log(123456);

    const nome = 'Adriano';

    console.log(nome);


    // ==================================================
    // FUNÇÃO INTERNA
    // → Possui acesso às variáveis do escopo externo
    // → sobrenome pertence ao escopo da IIFE
    // ==================================================

    const criaNome = (nome) => {

        return nome + ' ' + sobrenome;

    };


    // ==================================================
    // FUNÇÃO falaNome
    // → Utiliza criaNome() para formar o nome completo
    // → Também possui acesso ao escopo da IIFE
    // ==================================================

    const falaNome = () => {

        console.log(criaNome('Luiz'));

    };


    falaNome();

})();


// ==================================================
// ESCOPO EXTERNO
// → A variável nome abaixo pertence ao escopo externo
// → Não possui relação com a variável nome criada
//   dentro da IIFE
// ==================================================

const nome = 'Qualquer coisa';


// ==================================================
// IIFE COM PARÂMETROS
// → A função recebe parâmetros normalmente
// → Os valores são enviados na chamada da IIFE
// ==================================================

(function (idade, peso, altura) {

    console.log(idade, peso, altura);

})(30, 80, 1.80);


/*
====================================================

ESCOPO DA IIFE

====================================================

• Variáveis criadas dentro da IIFE pertencem ao
  escopo interno da função

• Essas variáveis não podem ser acessadas diretamente
  fora da IIFE

• Funções internas podem acessar variáveis do escopo
  onde foram criadas

• Isso ajuda a evitar conflitos entre variáveis

====================================================


RESUMO IMPORTANTE

====================================================

• IIFE

  → Immediately Invoked Function Expression

  → Função executada imediatamente

  → Utilizada para criar um escopo isolado

• Sintaxe básica:

  (function () {

      // código

  })();

• Também pode utilizar Arrow Function:

  (() => {

      // código

  })();

• Parâmetros

  → Podem ser recebidos normalmente

  → Os argumentos são informados na execução

• Escopo

  → Variáveis internas permanecem dentro da IIFE

  → Não ficam disponíveis diretamente no escopo externo

⚠️ O objetivo principal da IIFE não é simplesmente
   "executar uma função automaticamente", mas também
   permitir a criação de um escopo isolado.

====================================================
*/