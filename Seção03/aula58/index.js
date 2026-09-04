/*
====================================================

CONSTRUCTOR FUNCTION

====================================================

• Constructor Function é utilizada para criar OBJETOS

• A criação de uma instância é realizada utilizando
  o operador new

• Por convenção, Constructor Functions começam com
  a PRIMEIRA LETRA MAIÚSCULA

• A palavra-chave this representa a instância que
  está sendo criada

====================================================


CONSTRUCTOR x FACTORY

====================================================

• Constructor Function

  → Utiliza o operador new

  → Utiliza this para definir atributos e métodos

  → Retorna uma nova instância do objeto

• Factory Function

  → É uma função responsável por fabricar objetos

  → Normalmente retorna um objeto utilizando return

  → Não necessita do operador new

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION
// → Define o modelo para criação dos objetos Pessoa
// → Recebe nome e sobrenome como parâmetros
// ==================================================

const Pessoa = function(nome, sobrenome) {


    // ==================================================
    // VARIÁVEIS PRIVADAS
    // → Podem ser acessadas somente dentro da função
    // → Não ficam disponíveis diretamente na instância
    // ==================================================

    const ID = 123456;

    const metodoInterno = function() {

    };


    // ==================================================
    // ATRIBUTOS PÚBLICOS
    // → São adicionados à instância através do this
    // → Podem ser acessados externamente
    // ==================================================

    this.nome = nome;

    this.sobrenome = sobrenome;


    // ==================================================
    // MÉTODO PÚBLICO
    // → Pode ser acessado através da instância
    // → Utiliza this para acessar os atributos públicos
    // ==================================================

    this.metodo = function() {

        console.log(
            this.nome + ' ' +
            this.sobrenome +
            ': sou um método'
        );

    };

};


// ==================================================
// CRIAÇÃO DA INSTÂNCIA
// → O operador new cria um novo objeto
// → Pessoa é executada como Constructor Function
// → Os parâmetros são atribuídos aos atributos públicos
// ==================================================

const p1 = new Pessoa('Adriano', 'Felisberto');


// ==================================================
// ACESSANDO ATRIBUTOS PÚBLICOS
// → Os atributos podem ser acessados diretamente
//   através da instância
// ==================================================

console.log(p1.nome);

console.log(p1.sobrenome);


// ==================================================
// EXECUTANDO MÉTODO PÚBLICO
// → O método pode ser chamado através da instância
// ==================================================

p1.metodo();


/*
====================================================

RESUMO IMPORTANTE

====================================================

• Constructor Function

  → Cria objetos utilizando new

  → Normalmente começa com letra maiúscula

  → Utiliza this para definir propriedades da instância

• new

  → Cria uma nova instância

  → Vincula o this à nova instância

• this

  → Representa a instância atual

• Atributos públicos

  → São definidos através de this

  → Podem ser acessados externamente

• Variáveis privadas

  → São declaradas dentro da função sem utilizar this

  → Não podem ser acessadas diretamente pela instância

⚠️ ID e metodoInterno são privados neste exemplo,
   pois não foram atribuídos ao this.

====================================================
*/