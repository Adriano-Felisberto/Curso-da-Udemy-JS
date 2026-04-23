const form = document.querySelector('.addForm');
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

let relogioAtual = new Date();
relogioAtual.setHours(0, 0, 0, 0); // começa 00:00

const criaRelogio = () => {
    return relogioAtual.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
};

const criacaoTag = () => {
    let localRelogio = document.querySelector('h1');

    if (!localRelogio) {
        localRelogio = document.createElement('h1');
        form.appendChild(localRelogio);
    }

    localRelogio.innerText = criaRelogio();
};

btn.addEventListener('click', function (e) {
    e.preventDefault(); // evita reload se for form

    const minutos = Number(input.value);
    if (isNaN(minutos)) return;

    relogioAtual.setMinutes(relogioAtual.getMinutes() + minutos);
    criacaoTag();
    input.value = '';
});

criacaoTag(); // mostra 00:00 ao carregar

const tempo = [];
