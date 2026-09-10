/*
====================================================

GETTERS E SETTERS

====================================================

• Getters e setters permitem controlar o acesso
  e a alteração de propriedades

• get

  → É executado quando tentamos ACESSAR
    uma propriedade

• set

  → É executado quando tentamos ALTERAR
    uma propriedade

• São muito utilizados para criar regras de
  validação e controle dos valores

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION
// → Cria objetos através do operador new
// ==================================================

const Produto = function(nome, preco, estoque) {

    this.nome = nome;

    this.preco = preco;

    this.estoquePrivado = estoque;


    // ==================================================
    // Object.defineProperty()
    // → Criando a propriedade estoque
    // → Utilizando getter e setter
    // ==================================================

    Object.defineProperty(this, 'estoque', {

        enumerable: true,

        configurable: true,


        // ==================================================
        // GET
        // → Executado quando acessamos p1.estoque
        // ==================================================

        get: function() {

            return estoque;

        },


        // ==================================================
        // SET
        // → Executado quando tentamos alterar p1.estoque
        // ==================================================

        set: function(valor) {

            // → Validando se o valor recebido é um número

            if(typeof valor !== 'number') {

                console.log('bad value');

                return;

            }

            estoque = valor;

        }

    });

};


// ==================================================
// FACTORY FUNCTION
// → Retorna um objeto
// → Utiliza getter e setter
// ==================================================

const criaProduto = function(nome) {

    return {

        // ==================================================
        // GET nome
        // → Executado quando acessamos p2.nome
        // ==================================================

        get nome() {

            return nome;

        },


        // ==================================================
        // SET nome
        // → Executado quando alteramos p2.nome
        // ==================================================

        set nome(valor) {

            valor = valor.replace('coisa', '');

            nome = valor;

        }

    };

};


// ==================================================
// TESTANDO CONSTRUCTOR FUNCTION
// ==================================================

const p1 = new Produto('camiseta', 20, 3);

console.log(p1);


// ==================================================
// TESTANDO O SETTER
// → O setter será executado
// → Como o valor é string, a validação impede
//   a alteração
// ==================================================

p1.estoque = 'O valor que eu quero';


// ==================================================
// TESTANDO O GETTER
// → O getter será executado ao acessar estoque
// ==================================================

console.log(p1.estoque);


// ==================================================
// TESTANDO FACTORY FUNCTION
// ==================================================

const p2 = criaProduto('camiseta');

p2.nome = 'O valor que eu quero';

console.log(p2.nome);


/*
====================================================

ATENÇÃO

====================================================

• No setter de estoque, a variável correta para
  alterar é:

      estoque = valor;

• Não:

      estoquePrivado = valor;

  Porque o getter está retornando a variável
  `estoque`.

• `estoquePrivado` é uma propriedade do objeto:

      this.estoquePrivado = estoque;

  Enquanto `estoque` é uma variável fechada
  dentro da Constructor Function.

====================================================


CLOSURE

====================================================

• A variável `estoque` pertence ao escopo da
  Constructor Function.

• Mesmo depois que a Constructor Function termina,
  o getter e o setter continuam conseguindo acessar
  essa variável.

• Isso acontece por causa do CLOSURE.

Exemplo:

    get: function() {
        return estoque;
    }

    set: function(valor) {
        estoque = valor;
    }

→ Ambos continuam tendo acesso à variável `estoque`.

====================================================


GETTER

====================================================

• É acessado como uma propriedade:

    p1.estoque

• NÃO utilizamos:

    p1.estoque()

→ Getter não é chamado como método.

====================================================


SETTER

====================================================

• É acionado através de uma atribuição:

    p1.estoque = 10;

• O valor atribuído é recebido pelo parâmetro:

    set: function(valor) {

        estoque = valor;

    }

====================================================


RESUMO IMPORTANTE

====================================================

• get

  → Controla a LEITURA de uma propriedade


• set

  → Controla a ALTERAÇÃO de uma propriedade


• Getter

    p1.estoque

  → Executa automaticamente o get


• Setter

    p1.estoque = 10

  → Executa automaticamente o set


• Getters e setters podem ser utilizados
  para validar e controlar valores.


⚠️ Getter e setter não precisam utilizar
   Object.defineProperty().

   Eles também podem ser utilizados diretamente
   na criação de objetos:

    const pessoa = {

        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }

    };

====================================================
*/