/*
====================================================
ESCOPO DE VARIÁVEIS (let, var e const)
====================================================

REGRAS IMPORTANTES:

• let e const
  → Têm ESCOPO DE BLOCO
  → Só existem dentro do { } onde foram criadas

• var
  → Tem ESCOPO DE FUNÇÃO
  → Ignora blocos if, for, while
  → Pode causar sobrescritas indesejadas

====================================================
*/

let nome = 'Luiz';
var nome2 = 'luiz';
const verdadeira = true;

if (verdadeira) {
    // Novo escopo de bloco
    let nome = 'otavio';   // cria UMA NOVA variável
    var nome2 = 'otavio';  // sobrescreve a variável global

    console.log(nome, nome2); // otavio otavio

    if (verdadeira) {
        // Outro escopo de bloco
        let nome = 'outra coisa';
        console.log('ok', nome); // ok outra coisa
    }
}

// var NÃO respeita escopo de bloco
var sobrenome = 'miranda';

/*
====================================================
ESCOPO DE FUNÇÃO
====================================================

• Variáveis criadas com var dentro de funções
  NÃO são acessíveis fora delas
• Isso protege o código de conflitos externos

====================================================
*/
function falaOi() {
    var nome = 'adriano'; // escopo apenas da função
    console.log(nome, sobrenome); // acesso permitido ao sobrenome global
}

falaOi();

/*
====================================================
AVISOS IMPORTANTES
====================================================

• Variáveis precisam existir antes de serem usadas
• sobrenome2 NÃO foi declarada → erro de referência
• var permite redeclaração (não recomendado)

====================================================
*/

// console.log(sobrenome2); // ❌ ERRO: variável não existe

var sobrenome = 'adriano'; // var permite redeclarar (perigoso)
