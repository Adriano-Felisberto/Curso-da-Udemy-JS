/*
====================================================
CRONÔMETRO COM JAVASCRIPT
====================================================

OBJETIVO:
Criar um cronômetro simples com:
• Iniciar
• Pausar
• Zerar

Usando:
• setInterval / clearInterval
• Manipulação do DOM
• Delegação de eventos
• Date para formatar tempo

====================================================
*/

// Seleciona o elemento que exibe o tempo do cronômetro
const relogio = document.querySelector('.relogio');
// Elemento onde o tempo formatado será exibido

// Botão de iniciar
const iniciar = document.querySelector('.iniciar');
// Usado para começar o cronômetro

// Botão de pausar
const pausar = document.querySelector('.pausar');
// Usado para parar temporariamente o cronômetro

// Botão de zerar
const zerar = document.querySelector('.zerar');
// Usado para resetar o cronômetro

// Variável que irá armazenar o ID do setInterval
let timer;
// Necessária para podermos parar o intervalo depois

// Contador de segundos
let segundos = 0;
// Esse valor será incrementado a cada segundo

/*
====================================================
FUNÇÃO PARA FORMATAR OS SEGUNDOS EM HH:MM:SS
====================================================

• Recebe segundos
• Converte para milissegundos
• Usa o objeto Date apenas para formatação
• timeZone: 'UTC' evita diferença de fuso horário

====================================================
*/
const criaHora = (segundos) => {
    const data = new Date(segundos * 1000);
    // Multiplica por 1000 pois Date trabalha com milissegundos

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        // Força formato 24 horas

        timeZone: 'UTC'
        // Impede que o fuso horário interfira no cálculo
    });
};

/*
====================================================
EVENTO DE INICIAR
====================================================

• Limpa qualquer intervalo anterior
• Cria um novo setInterval
• Incrementa os segundos
• Atualiza o HTML do relógio

====================================================
*/
iniciar.addEventListener('click', () => {
    clearInterval(timer);
    // Evita criar múltiplos intervalos ao clicar várias vezes

    timer = setInterval(() => {
        segundos++;
        // Incrementa 1 segundo

        relogio.innerHTML = criaHora(segundos);
        // Atualiza o relógio com o tempo formatado
    }, 1000);
});

/*
====================================================
EVENTO DE PAUSAR
====================================================

• Para o cronômetro
• Mantém o valor atual
• Altera a cor para indicar pausa

====================================================
*/
pausar.addEventListener('click', () => {
    clearInterval(timer);
    // Para o setInterval

    relogio.style.color = 'red';
    // Feedback visual de que está pausado
});

/*
====================================================
EVENTO DE ZERAR
====================================================

• Para o cronômetro
• Reseta os segundos
• Mostra 00:00:00 no relógio

====================================================
*/
zerar.addEventListener('click', () => {
    clearInterval(timer);
    // Garante que o intervalo foi encerrado

    segundos = 0;
    // Reseta o contador

    relogio.innerHTML = '00:00:00';
    // Atualiza visualmente o relógio
});


/*
document.addEventListener('click', function (e) {
    const el = e.target;
    // Elemento exato que foi clicado

    console.log(el);

    if (el.classList.contains('zerar')) {
        console.log('você clicou em zerar');
        // Detecta clique no botão zerar
    } 
    else if (el.classList.contains('iniciar')) {
        console.log('você clicou em iniciar');
        // Detecta clique no botão iniciar
    } 
    else if (el.classList.contains('pausar')) {
        console.log('você clicou em pausar');
        // Detecta clique no botão pausar
    }
});

*/