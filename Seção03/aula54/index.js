const rand= (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
console.log(rand());


const f1 = (callback) => {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback();
    }, rand());    
}

const f2 = (callback) => { // callback é uma função que é passada como argumento para outra função, e é executada depois que a função principal é concluída.
    // call back só pode ser usado em uma função, ou seja, não pode ser usado em uma função de flecha, por exemplo, porque ela não tem o seu próprio "this" e "arguments".
    //callback faz com que a função seja executada depois que a função principal é concluída
    // no caso toda função deve ter callback, porque se não tiver, a função não vai ser executada depois que a função principal for concluída, e isso pode causar problemas de sincronização.
    // então só se usa callback quando for para essa função que vai ter como paramentro o callback como secundaria e a função principal é a função que tem o callback como paramentro, ou seja, a função que tem o callback como paramentro é a função principal, e a função que tem o callback como paramentro é a função secundária, ou seja, a função que tem o callback como paramentro é a função que vai ser executada depois que a função principal for concluída.
    // então o callback é como se fosse uma corrente que liga a função principal com a função secundária, ou seja, a função principal é a função que tem o callback como paramentro, e a função secundária é a função que tem o callback como paramentro, ou seja, a função principal é a função que tem o callback como paramentro, e a função secundária é a função que tem o callback como paramentro, ou seja, a função principal é a função que tem o callback como paramentro, e a função secundária é a função que tem o callback como paramentro, ou seja, a função principal é a função que tem o callback como paramentro, e a função secundária é a função que tem o callback como paramentro, ou seja, a função principal é a função que tem o callback como paramentro, e a função secundária é a função que tem o callback como paramentro, ou seja, a função principal é a função que tem o callback como paramentro, e a функци secundária é the function that has the callback as an argument.
    setTimeout(function() {
        console.log('f2');
        if (callback) callback(); // aqui tá dizendo (callback) se existir, vc é executado
    }, rand());
    
}

const f3 = (callback) => {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
    
    
}

f1(function () {
    f2(function () {
        f3(function () {
            console.log('OLá mundo');

        });
    });
})
f1(f1Callback);
function f1Callback () {
    f2(f2Callback); 
}
function f2Callback () {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Olá mundo');
    
}