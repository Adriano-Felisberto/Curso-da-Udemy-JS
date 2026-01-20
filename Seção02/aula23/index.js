/*
=========================================================
AVALIAÇÃO DE CURTO-CIRCUITO (SHORT-CIRCUIT) – JAVASCRIPT

&&  AND
→ O JavaScript avalia da esquerda para a direita
→ Retorna o PRIMEIRO valor falsy encontrado
→ Se todos forem truthy, retorna o ÚLTIMO valor

||  OR
→ O JavaScript avalia da esquerda para a direita
→ PARA de avaliar assim que encontra um valor truthy
→ Retorna o PRIMEIRO valor verdadeiro encontrado
→ Se todos forem falsy, retorna o ÚLTIMO valor

⚠️ AVISO MUITO IMPORTANTE:
• O JavaScript usa avaliação de curto-circuito
• Isso significa que ele PARA de procurar resultados
  quando já encontra um valor que define o resultado final
• Nem todas as expressões são avaliadas

VALORES FALSY (avaliados como false):
false
0
""  ''  ``  (strings vazias)
null
undefined
NaN

Qualquer outro valor é considerado TRUTHY
=========================================================
*/

console.log('Adriano' && 0 && 'Luiz');
// Retorna 0
// O operador && para no primeiro valor falsy encontrado

const falaOi = () => {
    return 'oi';
};
// Função simples que retorna uma string
// Será usada para demonstrar curto-circuito

let vaiExecutar;
// Variável declarada sem valor
// Por padrão, seu valor é undefined (falsy)

console.log(vaiExecutar && falaOi());
// Retorna undefined
// A função NÃO é executada
// O JS para a avaliação ao encontrar um valor falsy

vaiExecutar = 'Adriano';
// Agora a variável possui um valor truthy

console.log(vaiExecutar && falaOi());
// Retorna 'oi'
// Como vaiExecutar é truthy, o JS continua a avaliação
// A função é executada

console.log(0 || false || null || 'Adriano' || true);
// Retorna 'Adriano'
// O operador || para no PRIMEIRO valor truthy encontrado

const corUsuario = null;
// Valor definido pelo usuário
// null é considerado falsy

const corPadrao = corUsuario || 'preto';
// Se corUsuario for falsy, o valor padrão será usado
// Exemplo comum de curto-circuito com OR

console.log(corPadrao);
// Retorna 'preto'

const a = 0;
// Valor falsy

const b = null;
// Valor falsy

const c = 'false';
// String NÃO vazia é truthy
// Mesmo contendo a palavra "false"

const d = false;
// Valor falsy

const e = NaN;
// Valor falsy

console.log(a || b || c || d || e);
// Retorna 'false'
// O JS para no primeiro valor truthy encontrado

/*
=========================================================
RECADO SOBRE CONDICIONAIS (IMPORTANTE PARA OS PRÓXIMOS PASSOS)

• Esse comportamento é a base do if / else
• if (variavel) funciona por causa de truthy e falsy
• O curto-circuito decide se um bloco de código será executado
• Muito usado para validações e valores padrão
=========================================================
*/
