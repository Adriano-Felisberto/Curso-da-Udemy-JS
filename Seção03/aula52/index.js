/*
====================================================
ESCOPO LÉXICO (LEXICAL SCOPE)
====================================================

O que é escopo léxico?

• Escopo léxico significa que o JavaScript
  decide de ONDE uma variável será acessada
  no MOMENTO em que a função é CRIADA
  (e NÃO quando ela é executada)

Em outras palavras:
👉 Funções "enxergam" variáveis com base
   no local onde foram escritas no código

====================================================
COMO O JS PROCURA UMA VARIÁVEL?
====================================================

Quando uma função precisa de uma variável:

1️⃣ Procura dentro da própria função
2️⃣ Se não encontrar, procura no escopo onde
    ela FOI DEFINIDA
3️⃣ Continua subindo até o escopo global
4️⃣ Se não encontrar → ReferenceError

⚠️ Importante:
Não importa de onde a função é chamada,
mas SIM onde ela foi criada.

====================================================
EXPLICAÇÃO DO CÓDIGO ABAIXO
====================================================

• A variável "nome" está no escopo GLOBAL
• A função falaNome foi criada no escopo global
• Por isso, ela TEM acesso à variável "nome"

• A função usaFalaNome chama falaNome
• Mas isso NÃO muda o escopo de falaNome

Ou seja:
falaNome NÃO herda o escopo de quem chama
falaNome herda o escopo de onde foi definida

====================================================
CONEXÃO COM CLOSURE
====================================================

• Escopo léxico é a REGRA
• Closure é o RESULTADO dessa regra

Toda closure existe porque o JS respeita
o escopo léxico.

====================================================
RESUMO FINAL
====================================================

• Escopo léxico é decidido no código, não na execução
• Funções não "pegam" variáveis de quem chama
• Elas usam o escopo onde foram criadas
• Isso torna o JS previsível e seguro

====================================================
*/




// escopo léxico
const nome = 'Adriano';

const falaNome = () => {
    console.log(nome);
};

falaNome();

const usaFalaNome = () => {
    falaNome();
};

usaFalaNome();
