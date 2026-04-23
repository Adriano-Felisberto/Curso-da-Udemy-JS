// array é uma lista 
/*
os arrays são indexados por valores exemplo:

luiz = 0
maria = 1
joão = 2

em todos os casos podemos criar variaveis para adicionar, remover e etc 
exemplo:
const removerUltimo = alunos.pop();
const adicionarInicio = alunos.unshift('ana');
const adicionarFinal = alunos.push('carlos');
const tamanhoArray = alunos.length;

o js vai aceitar de toda forma mesmo se for dentro de uma variavel para determinada função

IMPORTANTE: no caso das variaveis que guardam o valor de remoção, adição e etc, elas só vão guardar o valor que a função for responsável por fazer
se eu colocar um indicie que não existe vai retornar um undefined
*/

const alunos = ['luiz', 'maria', 'joão'];

// podemos colocar qualquer tipo não se restrige a apenas um tipo de dado

const valores = [1, 'luiz', true, 2, 3.5];

console.log(alunos);
console.log(valores);

// para acessar alguma coisa da lista usamos o indice
console.log(alunos[2]); // puxamos a variavel da lista e dizemos qual o indice queremos puxar

// podemos aditar os valores do array
alunos[1] = 'pedro'; // trocamos maria por pedro
console.log(alunos);

alunos[3] = 'ana'; // adicionamos ana na posição 3
console.log(alunos);
// ou podemos usar o .push para adicionar um novo valor no final da lista

alunos.push('carlos'); // melhor forma de adicionar um valor no array
console.log(alunos);

// podemos ver o tamanho do array com o length
console.log(alunos.length);

// podemos adicionar no começo tambem com o unshift

alunos.unshift('ana'); // adicionamos ana no começo do array
console.log(alunos);

// podemos remover o ultimo valor usando o pop

alunos.pop(); // removemos o ultimo valor do array
console.log(alunos);

const remover = alunos.pop(); // podemos guardar o valor removido em uma variavel para qualquer função
console.log(remover); // PORÉM só vai guardar o valor que a função ficou responsavel por remover ou qualquer outra função

delete alunos[1]; // podemos usar o delete para remover um array porém deixa um espaço sem nd

console.log(alunos);

// maneira correta de remover um valor do array é usando o splice

alunos.splice(1, 1); // no splice o primeiro valor é o indice que queremos remover e o segundo é a quantidade de valores que queremos remover a partir daquele indice
console.log(alunos);

// podemos usar o slice para remover mais de um valor

alunos.splice(0, 2); // removemos dois valores do array o ultimo valor não será removido
console.log(alunos);

// para ter certeza que estamos trabalhando com um array podemos usar o instanceof array

console.log(`Estou estudando com array: ${alunos instanceof Array}`);
// ou podemos usar o typeof

console.log(typeof(alunos));

// podemos mudar o tipo do array
// alunos = 123; // agora alunos e number


// Const com valores mutaveis e imutaveis
/*
quando criamos uma variavel com const, não podemos mudar o valor dela
porém se for um valor mutavel como array ou objeto, podemos mudar os valores internos 

mutavel: array, objeto
imutavel: number, string, boolean
exemplo:

const nomes = ['luiz', 'maria', 'joão'];
nomes.push('carlos');
console.log(nomes); // vai funcionar normalmente

nomes = 'teste'; // não podemos mudar o valor da variavel const

nesse caso acima vai dar erro pois estamos tentando mudar o valor da variavel const

imutavel exemplo:
const nome = 'luiz';
nome.push('a'); // vai dar erro pois string é imutavel se fosse let iria funcionar
console.log(nome);

exemplo certo:

const nome = 'luiz';
const nome2 = nome + 'a'; // aqui estamos criando uma nova variavel
console.log(nome2); // vai funcionar normalmente
*/
