/*
CONDICIONAIS (if / else if / else)

REGRAS IMPORTANTES:
- O if pode ser usado sozinho, sem else.
- Sempre que usamos "else" ou "else if", é obrigatório existir um "if" antes.
- Podemos ter vários "else if" em uma verificação.
- Só podemos ter UM "else" no final da checagem.
- Não coloque ";" após if, else if ou else (isso causa erro).
- Não é permitido criar variáveis ou alterar valores diretamente após o if,
  sem estar dentro de um bloco { }.
- As condições são verificadas de cima para baixo.
- Assim que uma condição for verdadeira, o JavaScript PARA a verificação.
- Podemos usar apenas IF e ELSE, sem necessidade de else if.
- Também podemos usar apenas UMA variável booleana como condição (ex: tenhoGrana).
*/

let hora = 24; // teste alterando esse valor

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}

else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}

else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}

else {
    console.log('Vai dormir');
}

/*
CONDICIONAL COM VARIÁVEL BOOLEANA

- Quando a variável já é true ou false, NÃO precisamos de comparação.
- Exemplo correto: if (tenhoGrana)
- Exemplo desnecessário: if (tenhoGrana === true)
*/

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
}

else {
    console.log('Não vou sair de casa');
}
