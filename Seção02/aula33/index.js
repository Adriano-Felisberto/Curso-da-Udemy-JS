/*
====================================================
DESESTRUTURAÇÃO DE OBJETOS
====================================================

• Desestruturação
  → Permite extrair valores de objetos de forma simples
  → Evita acessar propriedades manualmente (objeto.propriedade)

• Podemos:
  → Extrair valores
  → Renomear variáveis
  → Definir valores padrão
  → Desestruturar objetos aninhados
  → Usar REST para pegar o restante das propriedades

====================================================
*/

const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Felisberto',
    idade: 19,
    endereco: {
        rua: 'cicero cardoso',
        numero: 183
    }
};
// Objeto com propriedades simples e um objeto aninhado (endereco)

// ==================================================

// Forma tradicional (sem desestruturação)
// const nome = pessoa.nome;
// console.log(pessoa.nome);
// Acessamos a propriedade diretamente pelo objeto

// ==================================================

// Desestruturação simples
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);
// As variáveis criadas TÊM o mesmo nome das propriedades

// ==================================================

// Desestruturação com RENOMEAÇÃO
const { nome: teste, sobrenome, idade } = pessoa;
// AVISO:
// "nome" NÃO vira uma variável
// Ele é apenas um IDENTIFICADOR da propriedade no objeto
// A variável criada de verdade aqui é "teste"

console.log(teste);
// Exibe "Adriano"

// ==================================================

// Valor PADRÃO na desestruturação
const { nome2 = 'não existe' } = pessoa;
// Se a propriedade NÃO existir no objeto,
// o valor padrão será usado automaticamente

console.log(nome2);

// ==================================================

// Desestruturação de OBJETO ANINHADO
const { endereco: { rua, numero } } = pessoa;
// AVISO IMPORTANTE:
// "endereco" NÃO é uma variável nesse caso
// Ele serve apenas para indicar ONDE estão "rua" e "numero"
// As únicas variáveis criadas são "rua" e "numero"

console.log(rua, numero);

// ==================================================

// Desestruturação aninhada com RENOMEAÇÃO
const { endereco: { rua: r, numero: n } } = pessoa;
// "rua" e "numero" são apenas identificadores
// As variáveis criadas de verdade são "r" e "n"

console.log(r, n);

// ==================================================

// Extraindo o objeto inteiro
const { endereco } = pessoa;
// AQUI SIM "endereco" vira uma variável
// Ela recebe o objeto completo { rua, numero }

console.log(endereco);

// ==================================================

// REST em objetos
const { nome, ...resto } = pessoa;
// AVISO MUITO IMPORTANTE:
// "resto" SEMPRE vira um OBJETO
// Ele contém TODAS as propriedades que NÃO foram extraídas

console.log(nome, resto);
// nome  → 'Adriano'
// resto → { sobrenome, idade, endereco }
