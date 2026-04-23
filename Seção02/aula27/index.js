/*
OPERADOR TERNÁRIO

SINTAXE:
condição ? valor_se_verdadeiro : valor_se_falso

EXPLICAÇÃO:
- O operador ternário é uma forma CURTA de escrever um if/else simples
- Ele SEMPRE trabalha com uma condição booleana (true ou false)
- Ele SEMPRE retorna um valor

IMPORTANTE:
- É POSSÍVEL usar MAIS DE DUAS condições com ternário
  (ternário aninhado)
- Porém, NÃO É RECOMENDADO em código profissional
- Ternários aninhados dificultam a leitura e manutenção

QUANDO USAR:
- Quando existem APENAS DUAS opções de resposta
- Quando a lógica é simples
- Quando o ternário deixa o código mais legível

QUANDO NÃO USAR:
- Quando existem muitas condições
- Quando o código começa a ficar confuso
- Quando for necessário usar ternários aninhados

REGRA DE OURO (IMPORTANTE):
→ Se você precisa parar para pensar para entender o ternário,
  NÃO use ternário. Prefira if / else.

EM CÓDIGO PROFISSIONAL:
- Clareza é mais importante do que código curto
- Ternário é usado apenas quando melhora a leitura
====================================================
*/


const pontuacaoUsuario = 999;
// Pontuação do usuário
// Esse valor será avaliado na condição


const nivelUsuario = pontuacaoUsuario >= 1000
    ? 'Usuário VIP'
    : 'Usuário normal';
// Se a condição for verdadeira (>= 1000), retorna "Usuário VIP"
// Caso contrário, retorna "Usuário normal"


console.log(nivelUsuario);
// Exibe o nível do usuário


/*
EXEMPLO DE TERNÁRIO COM MAIS DE DUAS CONDIÇÕES (NÃO RECOMENDADO)

- Funciona
- Mas prejudica a leitura
- Use apenas para estudo
*/

const nivelExemplo = pontuacaoUsuario >= 1000
    ? 'VIP'
    : pontuacaoUsuario >= 500
        ? 'Premium'
        : 'Normal';

console.log(nivelExemplo);


/*
USO DE VALOR PADRÃO COM ||

- Muito comum junto com ternário
- Se o valor da esquerda for falsy, o valor da direita será usado
*/

const corUsuario = null;
// Valor vindo do usuário (pode ser null, undefined, '', etc)

const corPadrao = corUsuario || 'preta';
// Se corUsuario for falsy, 'preta' será usada como valor padrão

console.log(corPadrao);
// Exibe a cor definida


/*
COMPARAÇÃO ENTRE TERNÁRIO E IF / ELSE

Os dois exemplos abaixo fazem a MESMA coisa.
A diferença é apenas a forma de escrever.
*/


// USANDO IF / ELSE (FORMA TRADICIONAL)

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
}

else {
    console.log('Usuário normal');
}
