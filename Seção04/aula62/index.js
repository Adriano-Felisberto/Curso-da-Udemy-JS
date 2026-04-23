const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes2 = new Array('Adriano', 'Ester', 'Ricky');

// referência (mesmo array)
const novo = nomes;

// remove último
novo.pop();

// adiciona na posição 2
nomes[2] = 'João';

// remove corretamente (em vez de delete)
nomes.splice(2, 1);

// adiciona no final
nomes.push('arthur');

// adiciona no começo
nomes.unshift('wallace');

// remove do começo
nomes.shift();

// exibe resultados
console.log('nomes:', nomes);
console.log('nomes2:', nomes2);

// cópia real do array
const novo2 = [...nomes];
console.log('novo2:', novo2);

// tamanho do array
console.log('length:', nomes.length);