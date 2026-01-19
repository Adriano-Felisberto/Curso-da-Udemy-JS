let meuEscopo = () => {
  // Função principal criada para isolar o código
  // Tudo que está aqui dentro não fica disponível no escopo global

  const form = document.querySelector('.form');
  // Seleciona o elemento HTML do formulário usando a classe ".form"
  // Esse elemento será usado para capturar os dados digitados

  const Resultado = document.querySelector('.resultado');
  // Seleciona o elemento HTML onde os dados serão exibidos na tela
  // Usado para mostrar os resultados sem recarregar a página

  const pessoas = [];
  // Array responsável por armazenar todas as pessoas cadastradas
  // Array é um tipo de dado por referência (mutável)

  let contador = 1;
  // Variável usada para contar quantas vezes o formulário foi enviado
  // Esse valor é mantido entre as execuções da função (closure)

  const recebeEventoForm = (evento) => {
    // Função que será executada quando o formulário for submetido
    // Ela recebe o evento automaticamente

    evento.preventDefault();
    // Cancela o comportamento padrão do formulário
    // Evita que a página seja recarregada

    const nome = form.querySelector('.nome');
    // Seleciona o campo de nome dentro do formulário

    const sobrenome = form.querySelector('.sobrenome');
    // Seleciona o campo de sobrenome dentro do formulário

    const peso = form.querySelector('.peso');
    // Seleciona o campo de peso dentro do formulário

    const altura = form.querySelector('.altura');
    // Seleciona o campo de altura dentro do formulário

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    // Adiciona um novo objeto ao array pessoas
    // Cada envio cria um novo registro com os dados do formulário

    console.log(pessoas);
    // Mostra no console o array completo de pessoas cadastradas
    // Útil para acompanhar o estado do array durante os estudos

    Resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    // Insere os dados digitados no HTML
    // O operador += evita apagar os resultados anteriores

    console.log(`Formulário não foi enviado (${contador})`);
    // Exibe no console quantas vezes o envio foi interceptado

    contador++;
    // Incrementa o contador a cada envio do formulário
  };

  form.addEventListener('submit', recebeEventoForm);
  // Adiciona um escutador de eventos ao formulário
  // Quando o evento "submit" ocorre, a função recebeEventoForm é chamada
};

meuEscopo();
// Executa a função principal
// Inicia todo o código
