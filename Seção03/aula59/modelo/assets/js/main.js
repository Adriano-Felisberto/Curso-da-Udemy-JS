/*
====================================================

CALCULADORA

====================================================

• Utiliza CONSTRUCTOR FUNCTION para criar a calculadora

• Os métodos são responsáveis por:

  → Capturar cliques dos botões

  → Adicionar valores ao display

  → Limpar o display

  → Remover o último caractere

  → Realizar os cálculos

  → Capturar a tecla Enter

• A calculadora é inicializada através do método inicia()

====================================================
*/


// ==================================================
// CONSTRUCTOR FUNCTION
// → Cria uma nova instância da calculadora
// → Armazena o elemento responsável pelo display
// ==================================================

function Calculadora() {

    this.display = document.querySelector('.display');


    // ==================================================
    // CAPTURA DE CLIQUES
    // → Adiciona um evento de clique ao documento
    // → Identifica qual elemento foi clicado
    // → Executa o método correspondente ao botão
    // ==================================================

    this.capturaCliques = () => {

        document.addEventListener('click', event => {

            const el = event.target;


            // → Adiciona números e operadores ao display
            if (el.classList.contains('btn-num')) {

                this.addNumDisplay(el);

            }


            // → Limpa completamente o display
            if (el.classList.contains('btn-clear')) {

                this.clear();

            }


            // → Remove o último caractere do display
            if (el.classList.contains('btn-del')) {

                this.del();

            }


            // → Realiza o cálculo
            if (el.classList.contains('btn-eq')) {

                this.realizaConta();

            }

        });

    };


    // ==================================================
    // ADICIONA VALORES AO DISPLAY
    // → Obtém o texto do botão clicado
    // → Adiciona o valor ao display
    // → Mantém o foco no display
    // ==================================================

    this.addNumDisplay = (el) => {

        this.display.value += el.innerText;

        this.display.focus();

    };


    // ==================================================
    // LIMPA O DISPLAY
    // → Remove todos os valores atualmente exibidos
    // ==================================================

    this.clear = () => {

        this.display.value = '';

    };


    // ==================================================
    // REMOVE O ÚLTIMO CARACTERE
    // → Remove o último caractere utilizando slice()
    // → Mantém os demais valores do display
    // ==================================================

    this.del = () => {

        this.display.value = this.display.value.slice(0, -1);

    };


    // ==================================================
    // REALIZA O CÁLCULO
    // → Obtém a expressão armazenada no display
    // → Executa a expressão utilizando eval()
    // → Exibe o resultado no display
    // → Trata expressões inválidas através de try...catch
    // ==================================================

    this.realizaConta = () => {

        try {

            const conta = eval(this.display.value);


            // → Verifica se o resultado é undefined
            if (conta === undefined) {

                alert('Conta inválida');

                return;

            }

            this.display.value = conta;

        } catch (e) {

            alert('Conta inválida');

        }

    };


    // ==================================================
    // CAPTURA A TECLA ENTER
    // → Adiciona um evento de teclado ao documento
    // → Verifica se a tecla pressionada é Enter
    // → Realiza o cálculo quando Enter é pressionado
    // ==================================================

    this.capturaEnter = () => {

        document.addEventListener('keypress', e => {

            if (e.key === "Enter") {

                this.realizaConta();

            }

        });

    };


    // ==================================================
    // INICIALIZA A CALCULADORA
    // → Inicia a captura dos cliques
    // → Inicia a captura da tecla Enter
    // ==================================================

    this.inicia = () => {

        this.capturaCliques();

        this.capturaEnter();

    };

}


// ==================================================
// INSTANCIA DA CALCULADORA
// → Cria uma nova instância de Calculadora
// → Inicia o funcionamento da aplicação
// ==================================================

const calculadora = new Calculadora();

calculadora.inicia();