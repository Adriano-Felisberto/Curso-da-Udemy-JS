/* =========================================================
OBJETOS, MÉTODOS E USO DO `this` EM JAVASCRIPT

• Objetos armazenam dados (propriedades) e ações (métodos)
• Métodos são funções criadas dentro de objetos
• Usamos `this` para acessar as propriedades do próprio objeto

========================================================= */


/* =========================================================
USO DO `this` DENTRO DE OBJETOS

• Fora do objeto, acessamos propriedades assim:
  objeto.propriedade
  exemplo:
  pessoa.nome
  pessoa.idade

• Dentro de um método do objeto, usamos:
  this.propriedade

• `this` funciona como um "apelido" para o objeto que
  está executando o método naquele momento

REGRA DE OURO:
Fora do objeto   → objeto.propriedade
Dentro do objeto → this.propriedade
========================================================= */


/* ============================
FACTORY FUNCTION
Cria e retorna um objeto pessoa
============================ */

const criaPessoa = (nome, sobrenome, idade) => {
  return {
    nome,
    sobrenome,
    idade,

    fala() {
      // `this.nome` equivale a: pessoa.nome (fora do objeto)
      // `this.sobrenome` equivale a: pessoa.sobrenome
      console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
  };
};


/* ============================
OBJETO LITERAL
Criado manualmente
============================ */

const pessoa = {
  nome: "Adriano",
  sobrenome: "Felisberto",
  idade: 19,

  fala() {
    /*
    Dentro do objeto usamos `this` para acessar as propriedades.
    É como se fosse:
    pessoa.nome
    pessoa.sobrenome
    pessoa.idade
    */

    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    /*
    • `this.idade` acessa a idade do próprio objeto
    • O operador ++ soma 1 ao valor atual
    • Isso altera diretamente a propriedade idade
    */

    this.idade++;

    // Forma equivalente:
    // this.idade = this.idade + 1;
  }
};


/* ============================
ACESSANDO PROPRIEDADES
FORA DO OBJETO
============================ */

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);


/* ============================
CRIANDO OBJETO COM FACTORY
============================ */

const umaPessoa = criaPessoa("Adriano", "Felisberto", 19);

console.log(umaPessoa);
console.log(umaPessoa.nome);
console.log(umaPessoa.nome, umaPessoa.sobrenome);


/* ============================
EXECUTANDO MÉTODOS
============================ */

pessoa.fala();            // mostra nome, sobrenome e idade
pessoa.incrementaIdade(); // incrementa idade em +1
pessoa.fala();            // mostra idade atualizada
