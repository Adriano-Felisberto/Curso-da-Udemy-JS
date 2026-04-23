// atividida
const funcaoPrincipal = (numero) => {
    if (!Number.isInteger(numero)) {
        return false;
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'fizzbuzz';
    }

    if (numero % 3 === 0) {
        return 'fizz';
    }

    if (numero % 5 === 0) {
        return 'buzz';
    }

    return numero;
};

for (let i = 0; i <= 100; i++) {
    console.log(i, funcaoPrincipal(i));
}
