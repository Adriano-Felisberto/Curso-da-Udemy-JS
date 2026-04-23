// Data atual
const data = new Date();
const diaSemana = data.getDay();

/*
====================================================
FUNÇÃO PARA OBTER O DIA DA SEMANA (SWITCH CASE)
====================================================

AVISO IMPORTANTE:
• Todo `case` dentro do `switch` PRECISA terminar com
  `break` OU `return`
• Caso contrário, o código continuará executando
  os próximos `case` (fall-through)
• Neste exemplo usamos `return`, pois além de encerrar
  o `switch`, já retornamos o valor da função

====================================================
*/
const getDiaSemanaTexto = (diaSemana) => {
    let diaSemanaTexto; // variável declarada uma única vez

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = 'terça';
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;

        default:
            return '';
    }
};

/*
====================================================
EXEMPLO COM IF / ELSE (MESMA LÓGICA)
====================================================

• Funciona da mesma forma que o switch
• Não existe fall-through no if/else
• Geralmente fica mais verboso quando há
  muitas condições

====================================================
*/
// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// }
// else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// }
// else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// }
// else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// }
// else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// }
// else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// }
// else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// }
// else {
//     diaSemanaTexto = '';
// }

// Teste manual
let diaSemanaTexto = getDiaSemanaTexto(2);
console.log(diaSemana, diaSemanaTexto);
