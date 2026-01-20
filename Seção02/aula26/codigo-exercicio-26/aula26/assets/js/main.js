/*
MANIPULAÇÃO DO DOM + FUNÇÕES (PADRÃO PROFISSIONAL)

Neste código usamos:
- Eventos (addEventListener)
- Funções separadas com responsabilidades únicas
- Manipulação do DOM (document, createElement, appendChild)
- Validação de dados
- Retorno antecipado com return

POR QUE USAMOS ESSE PADRÃO PROFISSIONALMENTE?

- Código organizado e legível
- Cada função faz APENAS UMA COISA
- Facilita manutenção e correção de erros
- Permite reutilizar funções em outros projetos
- Evita código repetido
- Facilita testes e trabalho em equipe

EXEMPLO DE ORGANIZAÇÃO ERRADA (NÃO PROFISSIONAL):
- Tudo dentro de um único bloco
- Sem funções separadas
- Difícil de entender e manter

EXEMPLO DE ORGANIZAÇÃO CORRETA (PROFISSIONAL):
- Uma função para calcular
- Uma função para validar
- Uma função para exibir resultados
- Uma função para criar elementos HTML
====================================================
*/


/*
EVENTOS DO FORMULÁRIO

- submit: dispara quando o formulário é enviado
- preventDefault(): impede o recarregamento da página
- addEventListener é o padrão moderno (melhor que onclick)

EXEMPLO:
form.addEventListener('submit', funcao)
*/

const form = document.querySelector('#formulario');
// Seleciona o formulário pelo id usando querySelector


form.addEventListener('submit', function (e) {
// Escuta o evento de envio do formulário

  e.preventDefault();
  // Impede o comportamento padrão do navegador


  const inputPeso = e.target.querySelector('#peso');
  // Captura o input de peso a partir do próprio formulário

  const inputAltura = e.target.querySelector('#altura');
  // Captura o input de altura a partir do próprio formulário


  const peso = Number(inputPeso.value);
  // Converte o valor do input para Number
  // Evita erro de comparação com string

  const altura = Number(inputAltura.value);
  // Converte o valor da altura para Number


  /*
  VALIDAÇÃO DE DADOS

  - !peso pega valores falsy (0, NaN, null, '')
  - return interrompe a execução da função
  */

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }


  const imc = getImc(peso, altura);
  // Chama a função responsável apenas pelo cálculo

  const nivelImc = getNivelImc(imc);
  // Chama a função responsável por classificar o IMC


  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  // Monta a mensagem final usando template string


  setResultado(msg, true);
  // Exibe o resultado final no DOM
});


/*
FUNÇÃO DE CLASSIFICAÇÃO DO IMC

- Recebe o valor do IMC
- Retorna uma string com a classificação
- Usa array para evitar textos soltos no código
*/

function getNivelImc (imc) {

  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];
  // Array com os níveis de IMC


  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}


/*
FUNÇÃO DE CÁLCULO DO IMC

- Recebe peso e altura
- Aplica a fórmula matemática
- Retorna o valor formatado
*/

function getImc (peso, altura) {

  const imc = peso / (altura ** 2);
  // Fórmula do IMC

  return imc.toFixed(2);
  // Limita o número a 2 casas decimais
}


/*
CRIAÇÃO DE ELEMENTOS HTML (DOM)

createElement:
- Cria um elemento HTML via JavaScript
- Mais seguro que usar innerHTML direto
- Evita riscos de injeção de código

EXEMPLO:
const div = document.createElement('div');
*/

function criaP () {

  const p = document.createElement('p');
  // Cria um elemento <p>

  return p;
  // Retorna o elemento criado
}


/*
EXIBIÇÃO DE RESULTADOS NO DOM

- Limpa o conteúdo anterior
- Cria um novo elemento
- Aplica classes CSS dinamicamente
- Insere o elemento no HTML

appendChild:
- Insere um elemento dentro de outro
*/

function setResultado (msg, isValid) {

  const resultado = document.querySelector('#resultado');
  // Seleciona a div onde o resultado será exibido


  resultado.innerHTML = '';
  // Limpa resultados anteriores


  const p = criaP();
  // Cria um parágrafo dinamicamente


  if (isValid) {
    p.classList.add('paragrafo-resultado');
    // Classe de sucesso
  } else {
    p.classList.add('bad');
    // Classe de erro
  }


  p.innerHTML = msg;
  // Insere o texto no parágrafo


  resultado.appendChild(p);
  // Adiciona o parágrafo dentro da div
}
