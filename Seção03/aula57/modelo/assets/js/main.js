/*
====================================================
FACTORY FUNCTION + THIS + BIND
(EXPLICADO EM PROFUNDIDADE)
====================================================

O QUE É UMA FACTORY FUNCTION?
----------------------------------------------------
• Uma factory function é uma função que
  CRIA e RETORNA objetos.
• Diferente de classes, ela usa funções
  normais para "fabricar" objetos.
• Muito comum em JavaScript moderno.

Pseudocódigo mental:
----------------------------------------------------
criaCalculadora():
    cria um objeto
    define estado (display)
    define comportamentos (métodos)
    retorna esse objeto

resultado:
    cada chamada cria um NOVO objeto
    com seu próprio estado e métodos

====================================================
POR QUE USAR FACTORY AQUI?
----------------------------------------------------
• Encapsula toda a lógica da calculadora
• Evita variáveis globais
• Facilita manutenção e leitura
• Permite criar várias calculadoras

====================================================
O PROBLEMA DO THIS EM EVENTOS
----------------------------------------------------
Em JavaScript:
• O valor de `this` NÃO é fixo
• Ele depende de QUEM chamou a função

Exemplo crítico:
document.addEventListener('click', function () { ... })

👉 Dentro dessa function:
   `this` aponta para o DOCUMENT
   (ou para o elemento clicado)

MAS…
👉 A gente quer que `this` seja a CALCULADORA

====================================================
POR QUE O BIND FUNCIONA?
----------------------------------------------------
• bind cria uma NOVA função
• Essa nova função tem o `this` FIXO
• Não importa quem chame depois

Pseudocódigo do bind:
----------------------------------------------------
novaFuncao = funcaoOriginal.bind(objeto)

sempre que novaFuncao rodar:
    this === objeto

Ou seja:
bind(this) → força o this a ser a calculadora

====================================================
OBSERVAÇÃO IMPORTANTE SOBRE ARROW FUNCTION
----------------------------------------------------
• Arrow function NÃO cria seu próprio this
• Ela HERDA o this do contexto onde foi criada
• Por isso, em alguns casos, NÃO precisa de bind

====================================================
FLUXO REAL DO CÓDIGO
----------------------------------------------------
1️⃣ criaCalculadora() é chamada
2️⃣ Um objeto calculadora é criado
3️⃣ display guarda o input da tela
4️⃣ inicia() é chamado
5️⃣ Eventos de clique e teclado são registrados
6️⃣ O usuário interage
7️⃣ O this continua correto (bind / arrow)
8️⃣ A calculadora funciona corretamente

====================================================
RESUMO FINAL
----------------------------------------------------
• Factory cria objetos com estado + comportamento
• `this` muda dependendo do contexto
• Eventos alteram o this automaticamente
• bind fixa o this manualmente
• Arrow function herda o this
• Código fica previsível e profissional

====================================================
*/


const criaCalculadora = () => {
    return {

        // =============================
        // ATRIBUTOS (ESTADO DO OBJETO)
        // =============================
        display: document.querySelector('.display'),

        // =============================
        // MÉTODOS
        // =============================

        inicia() {
            // Ponto de entrada da calculadora
            // Aqui o this é a própria calculadora
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        /*
        ====================================================
        EVENTO DE TECLADO (ENTER)
        ====================================================
        • Arrow function herda o this do método
        • NÃO precisa de bind
        ====================================================
        */
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        /*
        ====================================================
        REALIZA A CONTA
        ====================================================
        • Usa eval (APENAS para estudo)
        • try/catch evita quebra do programa
        • Em produção, eval NÃO é recomendado
        ====================================================
        */
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta && conta !== 0) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        /*
        ====================================================
        EVENTOS DE CLICK (DELEGAÇÃO)
        ====================================================
        • Evento escutado no document
        • Elementos são identificados por classe
        • bind garante o this correto
        ====================================================
        */
        cliqueBotoes() {
            document.addEventListener(
                'click',
                function (evento) {
                    const el = evento.target;

                    if (el.classList.contains('btn-num')) {
                        this.btnParadisplay(el.innerText);
                    }

                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }

                    if (el.classList.contains('btn-del')) {
                        this.deleteUm();
                    }

                    if (el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    }
                }.bind(this) // ← FIXA o this como calculadora
            );

            /*
            IMPORTANTE:
            -----------------------------
            • Sem bind → this seria o document
            • Com bind → this é a calculadora
            */
        },

        btnParadisplay(valor) {
            this.display.value += valor;
        }
    };
};

// =============================
// CRIA E INICIA A CALCULADORA
// =============================
const calculadora = criaCalculadora();
calculadora.inicia();

/*
====================================================
AVISO FINAL
====================================================
• Arrow function NÃO permite alterar o this
• Ela herda o this do contexto onde foi criada
• Por isso funciona sem bind no pressionaEnter
• Já functions normais PRECISAM de bind em eventos

Esse código reúne:
• Factory Function
• Closure implícito
• This dinâmico
• Bind
• Arrow function
• Delegação de eventos

NÍVEL: intermediário → avançado em JS 🚀
====================================================
*/
