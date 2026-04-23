const mostraHora = () => {
    const data = new Date();
    return data.toLocaleTimeString('pt-BR', { hour12: false });
};

const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer)
}, 2000)

setTimeout(function() {
    console.log('olá mundo');
    
}, 5000)