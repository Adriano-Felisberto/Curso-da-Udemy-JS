//
// positivo        0          1         1          3
// negativo       -4         -3        -2          -1
const nomes = ['Adriano', 'Baiano', 'Daniel', 'Denilson'];

// nome.splce(indice, quantidade, elem, elem); o splice tbm aceita valores negativos

const remover = nomes.splice(3, 1)

console.log(remover);


console.log(nomes);

const removerNegativo = nomes.splice(-2, 1);

console.log(removerNegativo);

removerAteOFinal = nomes.splice(-2, Number.MAX_VALUE);

console.log(Number.MAX_VALUE);
console.log(removerAteOFinal);

removerVazio = nomes.splice(-2, 0);
console.log(removerVazio);


const removerAdicionar = nomes.splice(3, 1, 'sla')
console.log(removerAdicionar);

const simularPop = nomes.splice(-1, 1);
console.log(simularPop);

simularShift = nomes.splice(0, 1);
console.log(simularShift);

simularPush = nomes.splice(nomes.length, 0, 'novo nome');

simularUnshift = nomes.splice(0, 0, 'novo nome 2'); 