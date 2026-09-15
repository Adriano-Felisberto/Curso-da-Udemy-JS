
/*
====================================================
VALIDAÇÃO DE FORMULÁRIO
====================================================

• A classe Formulario é responsável por controlar
  os campos e as regras de validação do formulário

• Cada método possui uma responsabilidade específica

• As mensagens de erro são exibidas diretamente
  abaixo dos campos correspondentes

====================================================
*/

const meuEscopo = () => {

    /*
    ==================================================
    CLASSE FORMULARIO
    ==================================================

    → Responsável por armazenar os elementos do formulário
    → Centraliza as regras de validação

    ==================================================
    */

    class Formulario {

        constructor(formElement) {

            this.form = formElement;

            this.nome = this.form.querySelector('#nome');

            this.sobrenome = this.form.querySelector('#sobrenome');

            this.cpf = this.form.querySelector('#cpf');

            this.usuario = this.form.querySelector('#usuario');

            this.senha = this.form.querySelector('#senha');

            this.repetirSenha = this.form.querySelector('#repetir-senha');

        }


        /*
        ==================================================
        CRIAÇÃO DE MENSAGEM DE ERRO
        ==================================================

        → Localiza o elemento imediatamente após o campo
        → Verifica se ele possui a classe error-text
        → Altera o texto da mensagem de erro

        ==================================================
        */

        criaErro(campo, msg) {

            const nextElement = campo.nextElementSibling;

            if (nextElement && nextElement.classList.contains('error-text')) {

                nextElement.innerText = msg;

            }

        }


        /*
        ==================================================
        LIMPA MENSAGENS DE ERRO
        ==================================================

        → Localiza todas as mensagens de erro
        → Remove o texto antes de iniciar uma nova validação

        ==================================================
        */

        limpaErros() {

            const errors = this.form.querySelectorAll('.error-text');

            errors.forEach(erro => erro.innerText = '');

        }


        /*
        ==================================================
        VALIDAÇÃO DO USUÁRIO
        ==================================================

        → Verifica se possui entre 3 e 12 caracteres
        → Não permite caracteres especiais
        → Retorna true se for válido
        → Retorna false se for inválido

        ==================================================
        */

        validaUsuario() {

            let valido = true;

            const valorUsuario = this.usuario.value;

            if (valorUsuario.length < 3 || valorUsuario.length > 12) {

                this.criaErro(
                    this.usuario,
                    'Usuário deve ter entre 3 e 12 caracteres.'
                );

                valido = false;

            } else if (/[^a-zA-Z0-9]/.test(valorUsuario)) {

                this.criaErro(
                    this.usuario,
                    'Usuário não pode ter caracteres especiais.'
                );

                valido = false;

            }

            return valido;

        }


        /*
        ==================================================
        VALIDAÇÃO DA SENHA
        ==================================================

        → Verifica se a senha foi preenchida
        → Verifica se possui pelo menos 6 caracteres
        → Compara a senha com a confirmação
        → Retorna true se for válida

        ==================================================
        */

        validaSenha() {

            let valido = true;

            const valSenha = this.senha.value;

            const valRepetir = this.repetirSenha.value;

            if (!valSenha || valSenha.length < 6) {

                this.criaErro(
                    this.senha,
                    'A senha precisa ter pelo menos 6 caracteres.'
                );

                valido = false;

            }

            if (valSenha !== valRepetir) {

                this.criaErro(
                    this.repetirSenha,
                    'As senhas devem ser iguais.'
                );

                valido = false;

            }

            return valido;

        }


        /*
        ==================================================
        CÁLCULO DO DÍGITO DO CPF
        ==================================================

        → Recebe uma parte do CPF
        → Utiliza o multiplicador regressivo
        → Calcula o resto da divisão por 11
        → Retorna o dígito verificador

        ==================================================
        */

        calculoCpf(cpf, regressive) {

            let total = 0;

            for (let i = 0; i < cpf.length; i++) {

                total += Number(cpf[i]) * regressive--;

            }

            const resto = total % 11;

            return resto < 2 ? 0 : 11 - resto;

        }


        /*
        ==================================================
        VALIDAÇÃO DO CPF
        ==================================================

        → Remove caracteres que não sejam números
        → Verifica se possui exatamente 11 dígitos
        → Bloqueia CPFs formados por números repetidos
        → Calcula os dois dígitos verificadores
        → Compara o CPF calculado com o informado

        ==================================================
        */

        validaCPF() {

            const copiaCpf = this.cpf.value;

            if (!copiaCpf || typeof copiaCpf !== 'string') {

                this.criaErro(this.cpf, 'CPF inválido.');

                return false;

            }

            /*
            → Remove pontos, traços e outros caracteres
            → Mantém somente os números do CPF
            */

            const limpaCpf = copiaCpf.replace(/\D/g, '');

            /*
            → CPF deve possuir exatamente 11 dígitos
            → Também bloqueia sequências como 11111111111
            */

            if (
                limpaCpf.length !== 11 ||
                limpaCpf[0].repeat(11) === limpaCpf
            ) {

                this.criaErro(this.cpf, 'CPF inválido.');

                return false;

            }

            /*
            → Remove os dois últimos dígitos
            → Eles serão calculados novamente
            */

            const removeUltimos = limpaCpf.slice(0, -2);

            /*
            → Primeiro dígito verificador
            */

            const digito1 = this.calculoCpf(
                removeUltimos,
                10
            );

            /*
            → Adiciona o primeiro dígito ao CPF parcial
            */

            const cpfComDigito1 = removeUltimos + digito1;

            /*
            → Segundo dígito verificador
            */

            const digito2 = this.calculoCpf(
                cpfComDigito1,
                11
            );

            /*
            → Monta o CPF completo calculado
            */

            const cpfCalculado = cpfComDigito1 + digito2;

            /*
            → Compara o CPF calculado com o CPF informado
            */

            if (cpfCalculado !== limpaCpf) {

                this.criaErro(this.cpf, 'CPF inválido.');

                return false;

            }

            return true;

        }


        /*
        ==================================================
        VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
        ==================================================

        → Verifica se os campos obrigatórios foram preenchidos
        → Exibe uma mensagem caso estejam vazios

        ==================================================
        */

        validaCamposObrigatorios() {

            let valido = true;

            if (!this.nome.value) {

                this.criaErro(
                    this.nome,
                    'O campo nome não pode estar em branco.'
                );

                valido = false;

            }

            if (!this.sobrenome.value) {

                this.criaErro(
                    this.sobrenome,
                    'O campo sobrenome não pode estar em branco.'
                );

                valido = false;

            }

            return valido;

        }


        /*
        ==================================================
        VALIDAÇÃO GERAL
        ==================================================

        → Limpa as mensagens anteriores
        → Executa todas as validações
        → Envia o formulário somente se todas forem válidas

        ==================================================
        */

        fazValidacao() {

            this.limpaErros();

            const nomeValido = this.validaCamposObrigatorios();

            const usuarioValido = this.validaUsuario();

            const senhaValida = this.validaSenha();

            const cpfValido = this.validaCPF();

            if (
                nomeValido &&
                usuarioValido &&
                senhaValida &&
                cpfValido
            ) {

                alert('Formulário enviado com sucesso!');

                return true;

            }

            return false;

        }

    }


    /*
    ==================================================
    SELEÇÃO DO FORMULÁRIO
    ==================================================

    → Localiza o formulário através da classe addForm
    → Encerra a execução caso o formulário não exista

    ==================================================
    */

    const form = document.querySelector('.addForm');

    if (!form) return;


    /*
    ==================================================
    CRIAÇÃO DA INSTÂNCIA
    ==================================================

    → Cria um objeto da classe Formulario
    → Passa o elemento HTML do formulário para o construtor

    ==================================================
    */

    const formulario = new Formulario(form);


    /*
    ==================================================
    EVENTO SUBMIT
    ==================================================

    → Intercepta o envio padrão do formulário
    → Executa a validação
    → Impede o envio caso existam erros

    ==================================================
    */

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const eValido = formulario.fazValidacao();

        if (eValido) {

            /*
            → Aqui poderia ser realizado o envio dos dados
              através de AJAX, Fetch API ou submit real

            → Exemplo:
            → form.submit();
            */

        }

    });

};

meuEscopo();
