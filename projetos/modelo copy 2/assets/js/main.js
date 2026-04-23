const escoNumber = document.querySelector('.escoNumber');
const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');

let contador = 3;
let escoMaquina = randomNumber();
console.log(escoMaquina);


form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (contador <= 0) return;

    const numeroEscolhido = Number(escoNumber.value);

    if (numeroEscolhido === escoMaquina) {
        resultado.innerHTML = `
            <strong>
                Parabéns! Você acertou o número ${escoMaquina} 🎉<br>
                O jogo será reiniciado.
            </strong>
        `;
        resetarGame();
        return;
    }

    contador--;

    if (contador > 0) {
        resultado.innerHTML = `
            <strong>
                Você errou 😢<br>
                Tentativas restantes: ${contador}
            </strong>
        `;
    } else {
        resultado.innerHTML = `
            <strong>
                Game Over 💀<br>
                O número era ${escoMaquina}
            </strong>
        `;
    }
});

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function resetarGame() {
    contador = 3;
    escoMaquina = randomNumber();
    escoNumber.value = '';
}
