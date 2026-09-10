/*
====================================================

POLIMORFISMO

====================================================

• Polimorfismo permite que objetos diferentes respondam
  de maneiras diferentes ao mesmo método.

• As classes ContaCorrente e ContaPoupança herdam
  os métodos da Conta.

• Um método pode ser sobrescrito nas classes filhas,
  alterando seu comportamento.

====================================================
*/


// ==================================================
// CONSTRUTOR CONTA
// → Define as propriedades básicas de uma conta
// ==================================================

const Conta = function(agencia, conta, saldo) {

    this.agencia = agencia;

    this.conta = conta;

    this.saldo = saldo;

};


// ==================================================
// CONSTRUTOR CONTA CORRENTE
// → Herda as propriedades de Conta
// → Adiciona a propriedade limite
// ==================================================

const ContaCorrente = function(agencia, conta, saldo, limite) {

    Conta.call(this, agencia, conta, saldo);

    this.limite = limite;

};


// ==================================================
// HERANÇA DA CONTA CORRENTE
// → ContaCorrente herda os métodos de Conta
// ==================================================

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;


// ==================================================
// CONSTRUTOR CONTA POUPANÇA
// → Herda as propriedades de Conta
// ==================================================

const ContaPoupança = function(agencia, conta, saldo) {

    Conta.call(this, agencia, conta, saldo);

};


// ==================================================
// HERANÇA DA CONTA POUPANÇA
// → ContaPoupança herda os métodos de Conta
// ==================================================

ContaPoupança.prototype = Object.create(Conta.prototype);

ContaPoupança.prototype.constructor = ContaPoupança;


// ==================================================
// MÉTODO SACAR
// → Realiza a retirada de valores da conta
// ==================================================

Conta.prototype.sacar = function(valor) {

    if (this.saldo < valor) {

        console.log('Saldo insuficiente');

        return;

    }

    this.saldo -= valor;

    this.verSaldo();

};


// ==================================================
// MÉTODO DEPOSITAR
// → Adiciona um valor ao saldo da conta
// ==================================================

Conta.prototype.depositar = function(valor) {

    this.saldo += valor;

    this.verSaldo();

};


// ==================================================
// MÉTODO VER SALDO
// → Exibe os dados da conta e o saldo atual
// ==================================================

Conta.prototype.verSaldo = function() {

    console.log(

        `Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`

    );

};


// ==================================================
// POLIMORFISMO NA CONTA CORRENTE
// → Sobrescreve o método sacar()
// → Permite utilizar o limite da conta
// ==================================================

ContaCorrente.prototype.sacar = function(valor) {

    if (this.saldo + this.limite < valor) {

        console.log('Saldo + limite insuficiente');

        return;

    }

    this.saldo -= valor;

    this.verSaldo();

};


// ==================================================
// INSTÂNCIA DA CONTA
// ==================================================

const conta1 = new Conta(11, 22, 10);

conta1.depositar(11);

conta1.depositar(322);

conta1.sacar(30);


// ==================================================
// INSTÂNCIA DA CONTA CORRENTE
// ==================================================

console.log('===================================================================');

const cc = new ContaCorrente(10, 20, 100, 500);

cc.sacar(1000);


// ==================================================
// INSTÂNCIA DA CONTA POUPANÇA
// ==================================================

const cp = new ContaPoupança(12, 33, 0);

cp.depositar(10);

cp.sacar(10);

cp.sacar(1);