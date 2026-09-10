/*
====================================================

EXEMPLO 1 — VALIDADOR DE CPF

====================================================

• Neste exemplo, toda a lógica da validação está
  dentro da Constructor Function.

• O CPF é:

  → Limpo utilizando replace()

  → Separado utilizando slice()

  → Transformado em Array utilizando Array.from()

  → Calculado utilizando map() e reduce()

  → Comparado com o CPF original

====================================================
*/


const ValidaCpf = function(cpf) {

    this.cpf = cpf;

    let multiplicador1 = 10;

    let multiplicador2 = 11;

    let cpfLimpo = this.cpf.replace(/\D/g, '');


    // ==================================================
    // CPF ORIGINAL
    // → Guarda o CPF completo para comparar depois
    // ==================================================

    let cpfOriginal = cpfLimpo;


    // ==================================================
    // CPF PARCIAL
    // → Remove os dois últimos dígitos
    // ==================================================

    cpfLimpo = cpfLimpo.slice(0, -2);

    let cpfArray = Array.from(cpfLimpo);


    // ==================================================
    // PRIMEIRO DÍGITO
    // ==================================================

    let primeiroDigito = cpfArray.map((valor, indice) => {

        return valor * (multiplicador1 - indice);

    });


    const totalPrimeiroDigito = primeiroDigito.reduce(
        (acumulador, valor) => {

            return acumulador += valor;

        }, 0
    );


    let resto = totalPrimeiroDigito % 11;

    let digito1 = resto < 2 ? 0 : 11 - resto;


    console.log('Soma:', totalPrimeiroDigito);

    console.log('Resto:', resto);

    console.log('Primeiro dígito:', digito1);


    // ==================================================
    // SEGUNDO DÍGITO
    // ==================================================

    cpfArray.push(digito1);


    let segundoDigito = cpfArray.map((valor, indice) => {

        return valor * (multiplicador2 - indice);

    });


    let totalSegundoDigito = segundoDigito.reduce(
        (ac, valor) => {

            return ac += valor;

        }, 0
    );


    let resto2 = totalSegundoDigito % 11;

    let digito2 = resto2 < 2 ? 0 : 11 - resto2;


    console.log('Soma segundo:', totalSegundoDigito);

    console.log('Resto segundo:', resto2);

    console.log('Segundo dígito:', digito2);


    // ==================================================
    // ADICIONA O SEGUNDO DÍGITO
    // ==================================================

    cpfArray.push(digito2);


    // ==================================================
    // TRANSFORMA O ARRAY EM STRING
    // ==================================================

    let cpfGerado = cpfArray.join('');


    // ==================================================
    // VALIDAÇÃO
    // ==================================================

    if (cpfGerado === cpfOriginal) {

        console.log('CPF válido');

    } else {

        console.log('CPF inválido');

    }

};


let cpf = new ValidaCpf('155.915.794-18');



/*
====================================================

EXEMPLO 2 — VALIDADOR DE CPF COM PROTOTYPE

====================================================

• Neste exemplo, a lógica foi separada em métodos.

• Utilizamos:

  → Constructor Function

  → Object.defineProperty()

  → Getter

  → Prototype

  → reduce()

  → Métodos

• A validação fica dividida em partes menores.

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION
// ==================================================

const ValidaCPF = function(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {

        enumerable: true,

        get: function() {

            return cpfEnviado.replace(/\D/g, '');

        }

    });

};


// ==================================================
// MÉTODO valida()
// → Responsável por realizar a validação do CPF
// ==================================================

ValidaCPF.prototype.valida = function() {


    // ==================================================
    // VERIFICAÇÃO DO CPF
    // ==================================================

    if (typeof this.cpfLimpo === 'undefined') return false;


    // ==================================================
    // VERIFICAÇÃO DO TAMANHO
    // → CPF deve possuir 11 dígitos
    // ==================================================

    if (this.cpfLimpo.length !== 11) return false;


    // ==================================================
    // VERIFICAÇÃO DE SEQUÊNCIA
    // → Impede CPFs como 00000000000
    // ==================================================

    if (this.isSequencia()) return false;


    // ==================================================
    // CPF PARCIAL
    // → Remove os dois últimos dígitos
    // ==================================================

    const cpfParcial = this.cpfLimpo.slice(0, -2);


    // ==================================================
    // PRIMEIRO DÍGITO
    // ==================================================

    const digito1 = this.criaDigito(cpfParcial);


    // ==================================================
    // SEGUNDO DÍGITO
    // → Utiliza o CPF parcial + primeiro dígito
    // ==================================================

    const digito2 = this.criaDigito(
        cpfParcial + digito1
    );


    // ==================================================
    // NOVO CPF
    // ==================================================

    const novoCpf =
        cpfParcial + digito1 + digito2;


    console.log(novoCpf);


    // ==================================================
    // COMPARAÇÃO
    // ==================================================

    return novoCpf === this.cpfLimpo;


    // ⚠️ Este return não seria executado,
    //    pois o return anterior já encerra a função.

};


// ==================================================
// MÉTODO criaDigito()
// → Calcula um dos dígitos verificadores
// ==================================================

ValidaCPF.prototype.criaDigito = function(cpfParcial) {

    const cpfArray = Array.from(cpfParcial);


    // ==================================================
    // REGRESSIVO
    // → Define o multiplicador inicial
    // → 9 dígitos  → começa em 10
    // → 10 dígitos → começa em 11
    // ==================================================

    let regressivo = cpfArray.length + 1;


    // ==================================================
    // REDUCE
    // → Multiplica cada valor pelo multiplicador
    // → Soma os resultados
    // ==================================================

    const total = cpfArray.reduce((ac, valor) => {

        ac += regressivo * Number(valor);

        regressivo--;

        return ac;

    }, 0);


    // ==================================================
    // CÁLCULO DO DÍGITO
    // ==================================================

    const digito = 11 - (total % 11);


    // ==================================================
    // REGRA DO CPF
    // → Se o resultado for maior que 9,
    //   o dígito será 0
    // ==================================================

    return digito > 9 ? '0' : String(digito);

};


// ==================================================
// MÉTODO isSequencia()
// → Verifica se todos os dígitos são iguais
// ==================================================

ValidaCPF.prototype.isSequencia = function() {

    const sequencia =
        this.cpfLimpo[0].repeat(
            this.cpfLimpo.length
        );

    return sequencia === this.cpfLimpo;

};


// ==================================================
// INSTÂNCIA
// ==================================================

const cpf2 = new ValidaCPF(''); // coloque seu CPF aqui


// ==================================================
// GETTER
// ==================================================

console.log(cpf2.cpfLimpo);


// ==================================================
// VALIDAÇÃO
// ==================================================

if (cpf2.valida()) {

    console.log('valido');

} else {

    console.log('invalido');

}


/*
====================================================

DIFERENÇA ENTRE OS EXEMPLOS

====================================================

• EXEMPLO 1

  → Toda a lógica está dentro da
    Constructor Function.

  → O cálculo é feito diretamente durante
    a criação da instância.


• EXEMPLO 2

  → A lógica foi dividida em métodos.

  → Os métodos ficam no Prototype.

  → O Getter controla o acesso ao CPF limpo.

  → A validação é realizada através do método
    valida().


====================================================

MÉTODOS DO EXEMPLO 2

====================================================

• valida()

  → Realiza a validação completa.


• criaDigito()

  → Calcula um dígito verificador.


• isSequencia()

  → Verifica se o CPF possui todos os
    dígitos iguais.


====================================================

RESUMO IMPORTANTE

====================================================

• Exemplo 1

  → Mostra a lógica de forma direta.


• Exemplo 2

  → Mostra como organizar a lógica utilizando
    Constructor Function e Prototype.


• Prototype

  → Permite colocar métodos que podem ser
    compartilhados pelas instâncias.


• Getter

  → Permite acessar:

      cpf2.cpfLimpo

  → Como se fosse uma propriedade.


• reduce()

  → Utilizado para acumular os resultados
    das multiplicações.


• map()

  → Utilizado no primeiro exemplo para
    transformar os valores.


⚠️ Os dois exemplos possuem a mesma finalidade,
   mas utilizam organizações diferentes.

====================================================
*/