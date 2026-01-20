/*
=========================================================
OPERADORES LÓGICOS EM JAVASCRIPT

&&  AND (E)
→ Todas as expressões precisam ser verdadeiras
→ Se UMA for false, o resultado será false

||  OR (OU)
→ Basta UMA expressão ser verdadeira
→ Só retorna false se TODAS forem false

!   NOT (NÃO)
→ Inverte o valor boolean
→ true vira false
→ false vira true

IMPORTANTE:
• Operadores lógicos SEMPRE retornam boolean (true ou false)
• Podemos combinar várias comparações
• Podemos armazenar expressões em variáveis
• Não precisamos usar apenas true ou false, podemos comparar valores

EXEMPLOS BÁSICOS:
true && true   → true
true && false  → false
false || true  → true
!true          → false
=========================================================
*/

const expressaoAnd = true && true && true && true;
// Todas as expressões são true
// Resultado final será true

console.log(true && true);
// Retorna true, pois todas as expressões são verdadeiras

console.log(true && false);
// Retorna false, pois uma das expressões é falsa

console.log(expressaoAnd);
// Exibe true, pois todas as condições da variável são verdadeiras

let expressaoOr = true || false;
// Expressão OR: basta UMA condição ser verdadeira
// A variável precisa ser let para poder reatribuir depois

console.log(expressaoOr);
// Retorna true, pois pelo menos uma expressão é verdadeira

expressaoOr = false || false;
// Agora nenhuma condição é verdadeira
// A variável já existia, por isso podemos reatribuir

console.log(expressaoOr);
// Retorna false, pois todas as expressões são falsas

// ========================================================
// EXEMPLO COM VARIÁVEIS (não apenas true/false)
const usuario = 'Adriano';
// Armazena o nome do usuário

const senha = '12345';
// Armazena a senha do usuário

const vaiLogar = usuario === 'Adriano' && senha === '12345';
// Verifica se o usuário e a senha estão corretos
// Usa AND (&&), ambas condições precisam ser verdadeiras

console.log(vaiLogar);
// Retorna true, pois o usuário e a senha estão corretos

// ========================================================
// EXEMPLO DO OPERADOR NOT (!)
const estaLogado = false;
// Variável que indica se o usuário está logado

console.log(!estaLogado);
// Retorna true, pois o NOT (!) inverte o valor de false para true

console.log(!!estaLogado);
// Duplo NOT (!!) converte o valor para boolean (false → false, true → true)

// ========================================================
// AVISO SOBRE CONDICIONAIS
/*
Mais à frente iremos aprender a usar essas expressões dentro de estruturas condicionais (if, else, else if)
• Os operadores lógicos são fundamentais para decidir o que será executado dentro das condicionais
• Praticamente todas as decisões no código JavaScript usam essas expressões
*/
