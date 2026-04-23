/*funções 
não é permitido criar funções com palavras reservadas
e não podemos criar com o mesmo nome de uma que  já existe
temos que criar com nomes significativos
não pode começar com numeros
não pd ter espaçoes
utilizamos camelCase para nomear funções
Case-sensitive
podemos deixar sem nenhum valor na declaração

Criamos funções para reutilizar códigos
Com o intuito de facilitar a manutenção e agilizar o desenvolvimento

IMPORTANTE: podemos criar variáveis dentro de funções, mas não podemos acessar variáveis criadas dentro de funções fora delas
exemplo:

function minhaFuncao() {
    const nome = 'Adriano';
    console.log(nome);
}

minhaFuncao();
// e além disso é possivel repetir o nome da variavel fora da função sem problemas lembrando isso só vale para variaveis criadas dentro de funções

const nome = 'Maria';
console.log(nome); // aqui o valor será Maria
// se adicionamos mais uma variavel fora vai ocorrer um erro

AVISO: devemos prestar bastante atenção na hora de passar os parametros
ex: se não fizemos isso na função soma vai ocorrer um NaN devido que ele vai tentar fazer uma soma sem nenhum valor disponivel
// A gente pode não passar os parametros porém a grande maioria dos codigos usam paramentos

casos que não precisamos passar:

function saudação() {
    return `Bom dia!`;
    
}
// como é possivel ver geralmente é coisa bem simples que fazemos isso

// podemos atribuir valor direto nos parametros 
exemplo:
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return `Resultado da soma: ${resultado}`;
}

*/


function saudação(nome) {
    return `Bom dia ${nome}!`;
    // podemos usar o return para retornar um valor 
    // é importante lembrar que o return finaliza a função
    // geralmente usamos o return nas funções ao invés de console.log
    
}

saudação('Adriano'); // devemos chamar a função para ela ser executada
//saudação(); // se não passar o parâmetro, o valor será undefined

// outro metodo de passar os parametros para a função
const variavel = 'Maria'; // podemos passar uma variável como argumento
saudação(variavel);

// Se fizemos isso

const variavel2 = saudação('joão');
console.log(variavel2); // o valor retornado será undefined, pois a função não retorna nada
// deixando mais facil de entender o que acontece nesse caso
// toda função que não retorna um valor, retorna undefined por padrão

const retorno = saudação('Ana');
console.log(retorno); 

function soma(x, y) { // função com criação de variavel
    const resultado = x + y;
    return `Resultado da soma: ${resultado}`;
}

console.log(soma(2, 2));
console.log(soma());
console.log(soma('luiz', 'otavio')); // nesse caso vai cocatenar

// tipos de funções

// função de valores
const raiz = function(numero) {
    return numero ** 0.5
};

console.log(raiz(25));

// arroz function forma moderna de usar função e principal

const raiz2 = (numero) => {
    return numero ** 0.5
};

console.log(raiz2(25));

// função de declaração
function raiz3(numero) {
    return  numero ** 0.5
}

console.log(raiz3(25));
