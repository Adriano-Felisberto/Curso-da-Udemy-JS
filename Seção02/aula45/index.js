/*
====================================================
TRY / CATCH / FINALLY
====================================================

• try
  → Tenta executar um bloco de código
  → Se NÃO houver erro, o catch é ignorado

• catch
  → Executado SOMENTE se ocorrer um erro no try
  → Serve para tratar erros e evitar que o programa quebre

• finally
  → SEMPRE é executado
  → Com erro ou sem erro
  → Muito usado para limpeza de recursos (fechar arquivos, conexões etc.)

====================================================
EXEMPLO SIMULANDO UM PROCESSO REAL
====================================================
*/

try {
    // Remova o comentário abaixo para forçar um erro e testar o catch
    // console.log(a);
    // Se essa linha for executada, o código pula direto para o catch

    console.log('abri um arquivo');
    // Simula a abertura de um recurso (arquivo, conexão, etc.)

    console.log('manipulei o arquivo e ocorreu um erro');
    // Simula uma operação que pode falhar

    console.log('fechei o arquivo');
    // Só será executado se NÃO ocorrer erro acima

} catch (e) {
    console.log('tratando o erro');
    // Aqui tratamos o erro para evitar que a aplicação quebre
    // Em produção, normalmente NÃO exibimos o erro cru para o usuário

} finally {
    console.log('finally: eu sempre sou executado');
    // Sempre executa
    // Ideal para fechar arquivos, conexões ou liberar memória
}

/*
====================================================
FUNÇÃO COM VALIDAÇÃO DE TIPO + THROW
====================================================

• instanceof Date
  → Verifica se o valor é uma instância de Date
  → Muito mais seguro do que checar typeof

• throw
  → Lança um erro manualmente
  → Interrompe a execução da função imediatamente

Esse padrão é profissional porque:
• Garante dados corretos
• Evita bugs silenciosos
• Facilita manutenção e debug

====================================================
*/

const retornaHora = (data) => { 
    // Se data existir, mas NÃO for um objeto Date
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
        // TypeError é o erro correto quando o tipo está errado
    }

    // Se nenhum argumento for passado
    if (!data) {
        data = new Date();
        // Cria uma nova data com o horário atual
    }

    // Retorna a hora formatada no padrão brasileiro
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',    // Hora com dois dígitos
        minute: '2-digit',  // Minuto com dois dígitos
        second: '2-digit',  // Segundo com dois dígitos
        hour12: false       // Formato 24 horas
    });
};

/*
====================================================
USO DA FUNÇÃO COM TRATAMENTO DE ERRO
====================================================
*/

try {
    const data = new Date('01-01-1970 12:58:12');
    // Criamos uma data manualmente

    const hora = retornaHora();
    // Chamamos a função SEM passar argumento
    // Ela usa a data atual automaticamente

    console.log(hora);

} catch (e) {
    // Executado se ocorrer erro na função
    console.log(e);
    // Em projetos reais, aqui pode ser log, alerta amigável, etc.

} finally {
    console.log('tenha um bom dia');
    // Sempre executa, independente de erro
}

/*
====================================================
RESUMO IMPORTANTE
====================================================

• try/catch → trata erros inesperados
• throw → cria regras e validações explícitas
• finally → sempre executa
• instanceof → valida tipos complexos (Date, Array, Object)

Esse padrão é MUITO usado profissionalmente
porque torna o código:
• Mais seguro
• Mais legível
• Mais fácil de manter
====================================================
*/
