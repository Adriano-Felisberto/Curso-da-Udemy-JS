/*
CALCULADORA DE IMC — ORGANIZAÇÃO COM ESCOPO E FUNÇÕES

CONCEITOS USADOS NESTE CÓDIGO:
- Arrow functions
- Escopo de função (encapsulamento)
- Manipulação do DOM
- Eventos (submit)
- Validação de dados
- Condicionais (if / else if / else)
- Contador de execuções
- Template string
- Retorno antecipado (return)

POR QUE USAR ESSE PADRÃO PROFISSIONALMENTE?

- Evita poluir o escopo global
- Código mais seguro e organizado
- Facilita manutenção
- Facilita leitura por outras pessoas
- Permite reaproveitar o código
- Cada parte tem uma responsabilidade clara

Esse é um padrão MUITO usado em projetos reais.
====================================================
*/

const meuEscopo = () => {
    // Função principal que cria um escopo isolado
    // Tudo que está aqui dentro não vaza para fora


    const formulario = document.querySelector('.form');
    // Seleciona o formulário pelo seletor de classe

    const pesoInput = formulario.querySelector('#input-peso');
    // Seleciona o input de peso DENTRO do formulário

    const alturaInput = formulario.querySelector('#input-altura');
    // Seleciona o input de altura DENTRO do formulário

    const resultado = document.querySelector('.resultado');
    // Seleciona a div onde o resultado será exibido


    let contador = 0;
    // Contador para saber quantas vezes o formulário foi enviado
    // Usamos let pois o valor será alterado


    const eventoExecutor = (evento) => {
        // Função que será executada quando o formulário for enviado

        evento.preventDefault();
        // Impede o comportamento padrão do formulário (recarregar a página)


        const peso = Number(pesoInput.value);
        // Converte o valor do input peso para Number

        const altura = Number(alturaInput.value);
        // Converte o valor do input altura para Number


        const calculoIMC = peso / (altura * altura);
        // Fórmula do cálculo do IMC

        contador++;
        // Incrementa o contador a cada envio


        /*
        VALIDAÇÃO DOS DADOS

        - !peso ou !altura capturam valores falsy
        - Exemplo de falsy: 0, NaN, '', null, undefined
        - return interrompe a execução da função
        */

        if (!peso || !altura) {
            resultado.innerHTML = '<p>dados inválidos</p>';
            // Exibe mensagem de erro

            return resultado.style.backgroundColor = 'red';
            // Define cor de erro e encerra a função
        }


        let classificacao = '';
        // Variável que armazenará a classificação do IMC


        /*
        CLASSIFICAÇÃO DO IMC

        - As condições são avaliadas de cima para baixo
        - Assim que uma for verdadeira, o restante é ignorado
        */

        if (calculoIMC < 18.5) {
            classificacao = 'Abaixo do peso';
            resultado.style.backgroundColor = 'red';
        } 

        else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
            classificacao = 'Peso normal';
            resultado.style.backgroundColor = 'green';
        } 

        else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
            classificacao = 'Sobrepeso';
            resultado.style.backgroundColor = 'orange';
        } 

        else if (calculoIMC >= 30 && calculoIMC <= 34.9) {
            classificacao = 'Obesidade grau 1';
        }

        else if (calculoIMC >= 35 && calculoIMC <= 39.9) {
            classificacao = 'Obesidade grau 2';
        }
         
        else {
            classificacao = 'Obesidade grau 3';
        }


        /*
        EXIBIÇÃO DO RESULTADO FINAL

        - toFixed(2) limita o número a duas casas decimais
        - Template string facilita a leitura
        */

        resultado.innerHTML = `
            <p>
                Análise ${contador}: 
                IMC ${calculoIMC.toFixed(2)} — ${classificacao}
            </p>
        `;
    };


    formulario.addEventListener('submit', eventoExecutor);
    // Registra o evento de submit no formulário
    // Sempre que enviar, a função eventoExecutor será chamada
};

meuEscopo();
// Executa a função principal e ativa todo o código
