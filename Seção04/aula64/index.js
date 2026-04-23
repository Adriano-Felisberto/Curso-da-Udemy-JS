const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
let a3 = a1 + a2;

// como cocatenar arrrays

a3 = a1.concat(a2);

console.log(a3);

cocatenar = a1.concat(a2, [7, 8, 9], 'sla');
console.log(cocatenar);


// outro metodo de concatenar arrays

// rest operator ... -> ... spread operato

a4 = [...a1, ...a2];

console.log(a4);

a5 = [...a1, 'Adriano', ...a2, ...[7, 8, 9]] // [7, 8, 9] sem os ... seria um array dentro do array, ou seja, um array literal então
// então para mostrar o conteúdo do array literal, ou seja, os números 7, 8 e 9, é necessário usar o spread operator ... para espalhar os elementos do array literal dentro do array a5

console.log(a5);




