/*
====================================================
CRIAÇÃO DE ELEMENTOS COM FOR E DOM
====================================================

• Aqui usamos:
  → Funções para organizar o código
  → Arrays de objetos para definir elementos
  → for para percorrer os dados
  → createElement / appendChild para manipular o DOM

Esse padrão é muito usado profissionalmente
para evitar código repetido e facilitar manutenção.

====================================================
*/

const meuEscopo = () => {
    const container = document.querySelector('.addComFor');
    // Seleciona o elemento do HTML onde os novos elementos serão inseridos

    const criacaoTag = (tag, texto) => {
        const elemento = document.createElement(tag);
        // Cria uma nova tag HTML dinamicamente (p, div, section, etc)

        elemento.innerHTML = texto;
        // Define o conteúdo do elemento
        // Poderíamos usar createTextNode (ver explicação abaixo)

        return elemento;
        // Retorna o elemento já criado e preenchido
    };

    const getTagFrase = () => {
        const elementos = [
            { tag: 'p', texto: 'frase 1' },
            { tag: 'div', texto: 'frase 2' },
            { tag: 'footer', texto: 'frase 3' },
            { tag: 'section', texto: 'frase 4' }
        ];
        // Array de objetos
        // Cada objeto define QUAL tag criar e QUAL texto inserir

        for (let i = 0; i < elementos.length; i++) {
            const { tag, texto } = elementos[i];
            // Desestruturação do objeto
            // tag → tipo da tag HTML
            // texto → conteúdo da tag

            const elementoCriado = criacaoTag(tag, texto);
            // Cria o elemento dinamicamente

            container.appendChild(elementoCriado);
            // Insere o elemento criado dentro do container
        }
    };

    getTagFrase();
    // Executa a função que cria e adiciona os elementos
};

meuEscopo();

/*
====================================================
EXPLICAÇÃO BÁSICA: createTextNode
====================================================

• createTextNode(texto)
  → Cria um NÓ DE TEXTO puro
  → Não interpreta HTML
  → É mais seguro contra injeção de código

EXEMPLO:

const p = document.createElement('p');
const texto = document.createTextNode('Olá mundo');
p.appendChild(texto);

• No seu código, usamos:
  elemento.innerHTML = texto;

• Isso é comum em estudos e projetos simples.
• Em projetos maiores, createTextNode é preferido
  quando o texto vem do usuário.

====================================================
RESUMO IMPORTANTE
====================================================

• createElement → cria a TAG
• innerHTML / createTextNode → define o TEXTO
• appendChild → insere no HTML
• for → evita repetição de código
• Funções → deixam o código organizado e reutilizável

Esse padrão é muito usado em código profissional.
====================================================
*/
