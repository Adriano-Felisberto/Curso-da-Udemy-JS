// ========================================
// return
// retorna um valor
// termina a função
// ========================================

// Função simples que SOMA e RETORNA o valor
const soma = (a, b) => {
    return a + b; // return devolve o resultado e encerra a função
}

console.log(soma(5, 2)); // 7

// Função que NÃO retorna valor, apenas executa algo (console.log)
const soma2 = (a, b) => {
    console.log(a + b); // aqui não existe return
}

soma2(5, 2); // 7 (mas não pode ser usado depois)

// ========================================
// FACTORY FUNCTION (cria objetos)
// ========================================

// Factory function é uma função que "fabrica" e retorna um objeto
// Ela é usada para criar vários objetos com a mesma estrutura
const criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome
    }
}

// Cada chamada cria um NOVO objeto
const p1 = criaPessoa('Adriano', 'Felisberto');

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1);
console.log(p2);
console.log(typeof p1); // object
console.log(typeof p2); // object

// ========================================
// CLOSURE + FACTORY (parte mais importante)
// ========================================

// Aqui começa algo MUITO importante:
// Uma função retornando outra função
const falaFrase = (comeco) => {

    // Essa função interna "lembra" do comeco
    const falaResto = (resto) => {  
        return comeco + ' ' + resto;
    }

    // Retornamos a função, NÃO o resultado
    return falaResto;
}

// Quando chamamos falaFrase:
const olaMundo = falaFrase('Olá');

// Neste momento:
// comeco = 'Olá'
// falaResto ficou "presa" a esse valor
console.log(olaMundo('mundo!')); // Olá mundo!

const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);

// ========================================
// EXPLICAÇÃO DO PORQUE ISSO FUNCIONA
// ========================================

// ➜ O JavaScript cria um "escopo"
// ➜ A função interna guarda acesso às variáveis da função externa
// ➜ Isso se chama CLOSURE

// Mesmo depois da função externa terminar,
// o JS NÃO apaga as variáveis usadas pela função interna

// ========================================
// FUNÇÕES DE MULTIPLICAÇÃO (forma simples)
// ========================================

const duplica = (n) => {
    return n * 2;
}

const triplica = (n) => {
    return n * 3;
}

const quadriplica = (n) => {
    return n * 4;
}

// Funciona, MAS tem repetição de código
// ========================================
// FACTORY DE FUNÇÕES (A PARTE MAIS DIFÍCIL)
// ========================================

// Essa função NÃO multiplica nada ainda
// Ela cria OUTRA função configurada
const criaMultiplicador = (multiplicador) => {

    // Essa função interna "lembra" do multiplicador
    const multiplicação = (n) => {
        return n * multiplicador;
    }

    // outra forma (comentada, como você pediu manter):
    // return const multiplicação = (n) => {
    //     return n * multiplicador
    // }

    // Retornamos a função pronta
    return multiplicação;
}

// ========================================
// USO DA FACTORY
// ========================================

// Aqui estamos criando funções DIFERENTES
const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

// Agora usamos normalmente
console.log(duplica1(10));      // 20
console.log(triplica1(10));     // 30
console.log(quadriplica1(10));  // 40

// ========================================
// PSEUDOCÓDIGO (bem didático)
// ========================================

// criaMultiplicador(multiplicador):
//     criar função multiplicação(n)
//         retornar n * multiplicador
//     retornar multiplicação

// duplica1 = criaMultiplicador(2)
// triplica1 = criaMultiplicador(3)

// duplica1(5)
// → JS lembra que multiplicador = 2
// → retorna 5 * 2

// ========================================
// POR QUE A FACTORY FUNCIONA ASSIM?
// ========================================

// 1️⃣ Cada chamada cria um NOVO escopo
// 2️⃣ O valor do multiplicador fica "guardado"
// 3️⃣ A função interna acessa esse valor mesmo depois
// 4️⃣ Isso evita repetir código
// 5️⃣ Deixa o código mais flexível e reutilizável
