/*
====================================================

FACTORY FUNCTION x CONSTRUCTOR FUNCTION

====================================================

• Factory Function (função fábrica)

  → Função responsável por fabricar e retornar objetos

  → Não necessita do operador new

• Constructor Function (função construtora)

  → Utiliza o operador new para criar novas instâncias

  → Utiliza this para definir atributos e métodos

====================================================
*/


// ==================================================
// FACTORY FUNCTION
// → Cria e retorna um novo objeto Pessoa
// → Recebe nome, sobrenome, peso e altura
// ==================================================

const criaPessoa = (nome, sobrenome, p, a) => {

    return {

        nome,

        sobrenome,


        // ==================================================
        // MÉTODO nomeCompleto
        // → Retorna o nome e sobrenome completos
        // ==================================================

        nomeCompleto() {

            return `${this.nome} ${this.sobrenome}`;

        },


        // ==================================================
        // SETTER nomeCompleto
        // → Permite alterar nome e sobrenome através
        //   de uma única atribuição
        // → O valor recebido é separado utilizando espaços
        // ==================================================

        set nomeCompleto(valor) {

            valor = valor.split(' ');

            this.nome = valor.shift();

            this.sobrenome = valor.join('  ');

        },


        // ==================================================
        // MÉTODO fala
        // → Recebe um assunto como parâmetro
        // → Retorna uma frase utilizando o nome da pessoa
        // ==================================================

        fala: function (assunto) {

            return `${this.nome} está ${assunto}`;

        },


        // ==================================================
        // ATRIBUTOS
        // → Armazenam o peso e a altura da pessoa
        // ==================================================

        peso: p,

        altura: a,


        // ==================================================
        // MÉTODO imc
        // → Calcula o Índice de Massa Corporal
        // → Utiliza peso e altura como base para o cálculo
        // → Retorna o resultado com duas casas decimais
        // ==================================================

        imc() {

            const indice = this.peso / (this.altura ** 2);

            return indice.toFixed(2);

        }

    };

};


// ==================================================
// CRIAÇÃO DO OBJETO
// → A Factory Function retorna um novo objeto
// ==================================================

const p1 = criaPessoa(
    'Adriano',
    'Felisberto dos Santos',
    65,
    1.70
);


// ==================================================
// ACESSANDO O OBJETO
// ==================================================

console.log(p1);

console.log(p1.fala('falando sobre JS'));

console.log(p1.nome);

console.log(p1.sobrenome);

console.log(p1.peso);

console.log(p1.imc());


// ==================================================
// UTILIZAÇÃO DO SETTER
// → Permite alterar nome e sobrenome através
//   da propriedade nomeCompleto
// ==================================================

// console.log(p1.nomeCompleto());

p1.nomeCompleto = 'Adriano Felisberto dos Santos';


/*
====================================================

GETTER

====================================================

• Getter permite acessar um método como se fosse
  uma propriedade

• É declarado utilizando a palavra-chave get

• Não é necessário utilizar () ao acessá-lo

• O getter é executado quando a propriedade é acessada

====================================================
*/


// ==================================================
// FACTORY FUNCTION COM GETTER
// ==================================================

const criaPessoa2 = (nome, sobrenome, p, a) => {

    return {

        nome,

        sobrenome,


        // ==================================================
        // MÉTODO fala
        // ==================================================

        fala: function (assunto) {

            return `${this.nome} está ${assunto}`;

        },


        // ==================================================
        // ATRIBUTOS
        // ==================================================

        peso: p,

        altura: a,


        // ==================================================
        // GETTER imc
        // → Permite acessar imc como uma propriedade
        // → Não necessita da utilização de ()
        // ==================================================

        get imc() {

            const indice = this.peso / (this.altura ** 2);

            return indice.toFixed(2);

        }

    };

};


// ==================================================
// CRIAÇÃO DO SEGUNDO OBJETO
// ==================================================

const p2 = criaPessoa2(
    'Luiz',
    'Otávio',
    65,
    1.80
);


// ==================================================
// ACESSANDO O GETTER
// → imc é acessado como uma propriedade
// → O método é executado automaticamente
// ==================================================

console.log(p2.imc);


/*
====================================================

RESUMO IMPORTANTE

====================================================

• Factory Function

  → Retorna objetos

  → Não utiliza new

  → Pode ser utilizada para criar várias instâncias

• Setter

  → Utiliza a palavra-chave set

  → Permite alterar uma propriedade através
    de uma atribuição

  → Exemplo:

    p1.nomeCompleto = 'Novo Nome';

• Getter

  → Utiliza a palavra-chave get

  → Permite acessar um método como propriedade

  → Não utiliza ()

  → Exemplo:

    p2.imc

• Método comum

  → Precisa ser chamado utilizando ()

  → Exemplo:

    p1.imc()

• Getter

  → É acessado sem ()

  → Exemplo:

    p2.imc

====================================================

⚠️ GETTER NÃO TRANSFORMA O MÉTODO EM UMA CLASSE.

O getter apenas modifica a forma como a propriedade
é acessada, permitindo que um método seja utilizado
como se fosse uma propriedade.

====================================================
*/