/*
OBJETO DATE (DATA E HORA NO JAVASCRIPT)

O objeto Date é usado para:
- Trabalhar com datas
- Trabalhar com horas
- Calcular tempo
- Formatar datas para exibição

FORMAS DE CRIAR UMA DATA:
- new Date() → data atual
- new Date(timestamp)
- new Date(ano, mes, dia, hora, minuto, segundo, milissegundo)
- new Date('YYYY-MM-DD HH:mm:ss')

OBSERVAÇÕES IMPORTANTES:
- O mês começa do ZERO
  Janeiro = 0
  Dezembro = 11
- Datas internas são baseadas em milissegundos
- O JavaScript usa o padrão UNIX timestamp

POR QUE ISSO É USADO PROFISSIONALMENTE?
- Sistemas usam data/hora para logs
- Controle de usuários
- Validações
- Relatórios
- Exibição de datas formatadas
====================================================
*/


// FORMATO DE TEMPO EM MILISSEGUNDOS
// 1 segundo = 1000 milissegundos
// 1 minuto = 60 segundos
// 1 hora = 60 minutos

const tresHoras = 60 * 60 * 3 * 1000;
// Representa 3 horas em milissegundos

const umDia = 60 * 60 * 24 * 1000;
// Representa 1 dia em milissegundos


const data = new Date(0 + tresHoras + umDia);
// Cria uma data baseada no timestamp 0 (01/01/1970)
// Soma 3 horas + 1 dia

console.log(data.toString());
// Exibe a data em formato legível


const date2 = new Date(2006, 11, 30, 15, 14, 27);
// Ano: 2006
// Mês: 11 (dezembro)
// Dia: 30
// Hora: 15
// Minuto: 14
// Segundo: 27

console.log(date2.toString());
// Exibe a data criada manualmente


const data3 = new Date('2006-12-30 20:20:59');
// Criação de data usando string no padrão ISO

console.log(data3.toString());
// Exibe a data convertida


/*
MÉTODOS GET DO OBJETO DATE

Usados para extrair partes específicas da data
*/

console.log('dia', data3.getDate());
// Retorna o dia do mês (1–31)

console.log('mês', data3.getMonth() + 1);
// Retorna o mês (0–11)
// Soma +1 para exibição correta

console.log('ano', data3.getFullYear());
// Retorna o ano completo

console.log('hora', data3.getHours());
// Retorna a hora

console.log('minuto', data3.getMinutes());
// Retorna os minutos

console.log('segundos', data3.getSeconds());
// Retorna os segundos

console.log('milissegundo', data3.getMilliseconds());
// Retorna os milissegundos

console.log('dia semana', data3.getDay());
// Retorna o dia da semana (0–6)
// 0 = domingo

console.log('timestamp agora', Date.now());
// Retorna o timestamp atual em milissegundos


/*
FUNÇÃO PARA ADICIONAR ZERO À ESQUERDA

- Muito usada para formatação de datas
- Exemplo: 9 → 09
- Usa operador ternário
*/

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
};


/*
FUNÇÃO DE FORMATAÇÃO DE DATA

- Recebe um objeto Date
- Formata no padrão brasileiro
- Reutilizável em qualquer parte do código

PADRÃO FINAL:
DD/MM/AAAA HH:MM:SS:MS
*/

const formataData = (data) => {

    const dia = zeroAEsquerda(data.getDate());
    // Dia formatado

    const mes = zeroAEsquerda(data.getMonth() + 1);
    // Mês formatado (+1 pois começa do zero)

    const ano = zeroAEsquerda(data.getFullYear());
    // Ano completo

    const hora = zeroAEsquerda(data.getHours());
    // Hora formatada

    const minuto = zeroAEsquerda(data.getMinutes());
    // Minuto formatado

    const segundo = zeroAEsquerda(data.getSeconds());
    // Segundo formatado

    const milesegundo = zeroAEsquerda(data.getMilliseconds());
    // Milissegundo formatado


    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}:${milesegundo}`;
    // Retorna a data formatada
};


const data4 = new Date();
// Cria um objeto Date com a data e hora atual

const dataBrasil = formataData(data4);
// Aplica a formatação brasileira

console.log(dataBrasil);
// Exibe a data formatada
