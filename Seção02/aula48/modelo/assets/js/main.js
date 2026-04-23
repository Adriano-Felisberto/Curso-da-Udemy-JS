/*
====================================================
LISTA DE TAREFAS COM LOCALSTORAGE
====================================================

OBJETIVO:
Criar uma lista de tarefas que:
• Adiciona tarefas
• Remove tarefas
• Salva tarefas no navegador
• Recupera tarefas ao recarregar a página

CONCEITOS IMPORTANTES USADOS:
• Manipulação do DOM
• Eventos (click, keypress)
• Delegação de eventos
• localStorage
• JSON.stringify / JSON.parse

Esse padrão é MUITO comum em projetos reais
====================================================
*/

// Campo de input onde o usuário digita a tarefa
const inputTarefa = document.querySelector('.input-tarefa');
// Usado para capturar o texto da tarefa

// Botão para adicionar tarefa
const btnTarefa = document.querySelector('.btn-add-tarefa');
// Executa a criação da tarefa ao clicar

// UL onde as tarefas (li) serão inseridas
const tarefas = document.querySelector('.tarefas');
// Container das tarefas

/*
====================================================
FUNÇÃO QUE CRIA UM <li>
====================================================

• Centraliza a criação do elemento
• Facilita manutenção e reaproveitamento

====================================================
*/
const criaLi = () => {
    return document.createElement('li');
    // createElement cria um elemento HTML dinamicamente
};

/*
====================================================
BOTÃO DE APAGAR DENTRO DO <li>
====================================================

• Cria um botão
• Adiciona uma classe para identificação
• Anexa o botão ao <li>

====================================================
*/
const criaBotaoApagar = (li) => {
    li.innerText += ' ';
    // Espaço para separar o texto do botão

    const botaoApagar = document.createElement('button');
    // Cria o botão dinamicamente

    botaoApagar.innerText = 'Apagar';
    // Texto exibido no botão

    botaoApagar.classList.add('apagar');
    // Classe usada para identificar o botão depois

    // botaoApagar.setAttribute('class', 'apagar')
    // Forma alternativa (menos usada hoje)

    li.appendChild(botaoApagar);
    // Insere o botão dentro do <li>
};

/*
====================================================
LIMPA E FOCA O INPUT
====================================================

• Melhora a experiência do usuário
• Evita apagar manualmente o campo

====================================================
*/
const limpaInput = () => {
    inputTarefa.value = '';
    // Limpa o campo

    inputTarefa.focus();
    // Coloca o cursor de volta no input
};

/*
====================================================
CRIA UMA NOVA TAREFA
====================================================

• Cria o <li>
• Insere o texto
• Adiciona botão apagar
• Limpa input
• Salva no localStorage

====================================================
*/
const criaTarefa = (textoInput) => {
    const li = criaLi();
    // Cria o elemento li

    li.innerText = textoInput;
    // Define o texto da tarefa

    tarefas.appendChild(li);
    // Adiciona o li na lista

    criaBotaoApagar(li);
    // Adiciona o botão apagar

    limpaInput();
    // Limpa o input

    salvarTarefa();
    // Atualiza o localStorage
};

/*
====================================================
EVENTO: ENTER PARA CRIAR TAREFA
====================================================

• Captura tecla pressionada
• Se for Enter, cria a tarefa

====================================================
*/
inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return;
        // Evita tarefas vazias

        criaTarefa(inputTarefa.value);
    }
});

/*
====================================================
EVENTO: BOTÃO ADICIONAR
====================================================
*/
btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    // Evita tarefas vazias

    criaTarefa(inputTarefa.value);
});

/*
====================================================
DELEGAÇÃO DE EVENTOS (APAGAR)
====================================================

• O evento é escutado no document
• Identifica o botão pelo nome da classe
• Muito usado quando elementos são dinâmicos

====================================================
*/
document.addEventListener('click', function (e) {
    const el = e.target;
    // Elemento clicado

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        // Remove o <li> pai do botão

        salvarTarefa();
        // Atualiza o localStorage
    }
});

/*
====================================================
SALVAR TAREFAS NO LOCALSTORAGE
====================================================

• localStorage só aceita strings
• JSON é usado para converter arrays/objetos

JSON.stringify → converte JS para string
JSON.parse      → converte string para JS

====================================================
*/
const salvarTarefa = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    // NodeList com todos os <li>

    const listaDeTarefas = [];
    // Array que será salvo

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        // Texto do <li>

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        // Remove o texto do botão

        listaDeTarefas.push(tarefaTexto);
        // Adiciona no array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // Converte o array em string JSON

    localStorage.setItem('tarefas', tarefasJSON);
    // Salva no navegador
};

/*
====================================================
RECUPERAR TAREFAS SALVAS
====================================================

• Lê o localStorage
• Converte JSON para array
• Recria as tarefas na tela

====================================================
*/
const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    // Recupera a string salva

    const listaDeTarefas = JSON.parse(tarefas);
    // Converte para array novamente

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
        // Recria cada tarefa
    }
};

// Executa automaticamente ao carregar a página
adicionaTarefasSalvas();

/*
====================================================
RESUMO IMPORTANTE
====================================================

• localStorage → persiste dados no navegador
• JSON.stringify → JS → string
• JSON.parse → string → JS
• Delegação de eventos → ideal para elementos dinâmicos
• Código modular → padrão profissional

Esse projeto é um ÓTIMO exemplo para repositório de estudos
====================================================
*/
