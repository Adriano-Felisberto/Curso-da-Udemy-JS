/*
====================================================

VALIDAÇÃO DE CPF COM CLASSE

====================================================

• A classe VerificaCpf é responsável por receber
  e validar um CPF.

• O CPF pode ser informado com ou sem pontuação.

• O cálculo dos dois dígitos verificadores é realizado
  através do método calculoCpf().

====================================================
*/


// ==================================================
// CLASSE VERIFICA CPF
// ==================================================

class VerificaCpf {

    constructor(cpfOriginal) {

        this.cpfOriginal = cpfOriginal;

    }


    // ==================================================
    // MÉTODO VALIDA CPF
    // → Responsável por realizar a validação do CPF
    // ==================================================

    validaCPF() {

        const copiaCpf = this.cpfOriginal;


        // ==================================================
        // VALIDAÇÃO DO TIPO
        // → O CPF deve ser informado como string
        // ==================================================

        if (typeof copiaCpf !== 'string') return;


        // ==================================================
        // LIMPEZA DO CPF
        // → Remove todos os caracteres que não são números
        // ==================================================

        const limpaCpf = copiaCpf.replace(/\D/g, '');


        // ==================================================
        // VALIDAÇÃO DO TAMANHO
        // → Um CPF deve possuir 11 dígitos
        // ==================================================

        if (limpaCpf.length !== 11) return;


        // ==================================================
        // CPF PARCIAL
        // → Remove os dois últimos dígitos verificadores
        // ==================================================

        const removeUltimos = limpaCpf.slice(0, -2);


        // ==================================================
        // PRIMEIRO DÍGITO
        // → Calcula o primeiro dígito verificador
        // ==================================================

        const digito1 = this.calculoCpf(removeUltimos, 10);


        // ==================================================
        // ADICIONANDO O PRIMEIRO DÍGITO
        // ==================================================

        const cpfComDigito1 = removeUltimos + digito1;


        // ==================================================
        // SEGUNDO DÍGITO
        // → Calcula o segundo dígito verificador
        // ==================================================

        const digito2 = this.calculoCpf(cpfComDigito1, 11);


        // ==================================================
        // CPF CALCULADO
        // → Adiciona o segundo dígito ao CPF
        // ==================================================

        const cpfCalculado = cpfComDigito1 + digito2;


        // ==================================================
        // EXIBIÇÃO DOS RESULTADOS
        // ==================================================

        console.log('CPF informado:', limpaCpf);

        console.log('CPF calculado:', cpfCalculado);


        // ==================================================
        // VALIDAÇÃO FINAL
        // → Compara o CPF calculado com o CPF informado
        // ==================================================

        if (cpfCalculado === limpaCpf) {

            return 'CPF válido';

        }

        return 'CPF inválido';

    }


    // ==================================================
    // MÉTODO CALCULO CPF
    // → Realiza o cálculo de um dígito verificador
    // → Recebe o CPF parcial e o multiplicador inicial
    // ==================================================

    calculoCpf(digito, multiplicadorInicial) {

        const digitoPego = digito

            .split('')

            .map((valor, indice) => {

                const multiplicador = multiplicadorInicial - indice;

                return Number(valor) * multiplicador;

            })

            .reduce((acumulador, valor) => {

                return acumulador + valor;

            });


        // ==================================================
        // CÁLCULO DO RESTO
        // → Obtém o dígito verificador através do resto
        // ==================================================

        let resto = 11 - (digitoPego % 11);


        // ==================================================
        // AJUSTE DO DÍGITO
        // → Se o resultado for maior que 9, o dígito
        //   verificador será 0
        // ==================================================

        if (resto > 9) {

            resto = 0;

        }

        return resto;

    }

}


// ==================================================
// INSTÂNCIA DA CLASSE
// ==================================================

const c1 = new VerificaCpf('155.915794-18');

console.log(c1.validaCPF());