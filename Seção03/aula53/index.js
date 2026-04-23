/*
====================================================
CLOSURE (CONCEITO FUNDAMENTAL DO JAVASCRIPT)
====================================================

• Closure NÃO é uma função especial
• Closure acontece quando:
  → Uma função é criada dentro de outra
  → E essa função interna usa variáveis do escopo externo
  → Mesmo depois da função externa terminar

Ou seja:
A função "lembra" do lugar onde nasceu
====================================================
*/

// ========================================
// EXEMPLO 1 — CLOSURE BÁSICO
// ========================================

// Escopo GLOBAL
const retornaFuncao = () => {

    // Variável LOCAL da função retornaFuncao
    // Normalmente essa variável seria destruída
    // quando a função terminasse
    const nome = 'Adriano';

    /*
    Retornamos UMA FUNÇÃO

    ⚠️ Importante:
    Essa função usa a variável "nome",
    que NÃO está dentro dela,
    mas no escopo onde ela foi criada.

    Isso é exatamente o que cria o CLOSURE
    */
    return function () {
        return nome;
    }
}

/*
Aqui estamos EXECUTANDO retornaFuncao

O retorno dela NÃO é um valor,
é UMA FUNÇÃO.

Essa função vem "embrulhada"
com o escopo onde foi criada.
*/
const funcao = retornaFuncao();

/*
Mostra a função em si.
Você verá algo como: [Function]
*/
console.log(funcao);

/*
console.dir mostra os detalhes internos:
→ [[Scopes]]
→ [[Closure]]

Isso prova que o JavaScript
MANTEVE o escopo vivo na memória
*/
console.dir(funcao);

/*
Quando executamos funcao():

Mesmo a função externa já tendo terminado,
a variável "nome" AINDA EXISTE,
porque a função interna precisa dela.
*/
console.log(funcao()); // Adriano



/*
====================================================
EXEMPLO 2 — CLOSURE COM PARÂMETROS
====================================================
*/

// Função externa recebe um parâmetro
const retornaFuncao2 = (nome) => {

    /*
    ⚠️ ATENÇÃO IMPORTANTE

    Aqui você declarou UMA NOVA variável "nome",
    que SOBRESCREVE o parâmetro recebido.

    Ou seja:
    O valor passado ('luiz', 'João')
    é IGNORADO.
    */
    const nome = 'Adriano';

    /*
    Função interna usa a variável "nome"
    do escopo externo (closure)
    */
    return function () {
        return nome;
    }
}

/*
Cada vez que você chama retornaFuncao2,
o JavaScript cria:
→ Um NOVO escopo
→ Uma NOVA variável nome
→ Uma NOVA função com seu próprio closure
*/
const funcao2 = retornaFuncao2('luiz');
const funcao3 = retornaFuncao2('João');

/*
Mesmo passando valores diferentes,
o retorno será SEMPRE 'Adriano',
porque o parâmetro foi sobrescrito.
*/
console.log(funcao2()); // Adriano
console.log(funcao3()); // Adriano

/*
console.dir mostra que cada função
tem seu próprio [[Closure]],
mesmo que o valor seja igual
*/
console.dir(funcao2);
console.dir(funcao3);



/*
====================================================
COMO ISSO FUNCIONA POR BAIXO DOS PANOS?
====================================================

1️⃣ A função externa é chamada
2️⃣ O JS cria um escopo na memória
3️⃣ A função interna usa variáveis desse escopo
4️⃣ O JS NÃO apaga esse escopo
5️⃣ O escopo fica "preso" à função interna

Isso é o CLOSURE
====================================================
*/

/*
====================================================
PSEUDOCÓDIGO (MENTAL)
====================================================

criar função externa
    criar variáveis
    criar função interna que usa essas variáveis
    retornar função interna

guardar função retornada
executar função retornada
acessar variáveis do passado

====================================================
*/

/*
====================================================
PARA QUE SERVE CLOSURE NA VIDA REAL?
====================================================

• Factory Functions
• Encapsulamento (dados privados)
• Evitar variáveis globais
• Criar funções configuráveis
• Contadores, caches, validações
• Base de React, hooks, callbacks

====================================================
*/

/*
====================================================
RESUMO FINAL (GUARDE ISSO)
====================================================

• Closure NÃO é algo que você cria
• É algo que ACONTECE
• Se uma função usa algo de fora dela
• E esse algo continua existindo
• Então você tem um closure

👉 Closure = Função + Memória do escopo
====================================================
*/
