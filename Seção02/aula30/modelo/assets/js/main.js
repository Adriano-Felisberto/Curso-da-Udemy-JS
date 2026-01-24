/*
resolução mais facil
const meuEscopo = () => {
    const relogioCalendario = document.querySelector('#relogioCalendario');
    const relogioCalendario2 = document.querySelector('#relogioCalendario2');
    const dataAtual = () => new Date();
    const hoje = dataAtual();

    const getDiaSemanaTexto = (diaSemana) => {
        switch (diaSemana) {
            case 0: return 'Domingo';
            case 1: return 'Segunda-Feira';
            case 2: return 'Terça-Feira';
            case 3: return 'Quarta-Feira';
            case 4: return 'Quinta-Feira';
            case 5: return 'Sexta-Feira';
            case 6: return 'Sábado';
            default: return '';
        }
    };

    const diaDoMesTexto = (data) => data.getDate();

    const mesTexto = (data) => {
        const mes = data.getMonth();
        switch(mes) {
            case 0: return 'Janeiro';
            case 1: return 'Fevereiro';
            case 2: return 'Março';
            case 3: return 'Abril';
            case 4: return 'Maio';
            case 5: return 'Junho';
            case 6: return 'Julho';
            case 7: return 'Agosto';
            case 8: return 'Setembro';
            case 9: return 'Outubro';
            case 10: return 'Novembro';
            case 11: return 'Dezembro';
        }
    };

    const anoTexto = (data) => data.getFullYear();

    const horarioAtual = (data) => {
        const hora = ZeroPelaEsquerda(data.getHours());
        const minutos = ZeroPelaEsquerda(data.getMinutes());
        const segundos = ZeroPelaEsquerda(data.getSeconds());
        return `${hora}:${minutos}:${segundos}`;
    };

    const ZeroPelaEsquerda = (num) =>{
        return num >= 10 ? num : `0${num}`
    }

    const getResultado = (data) => {
        relogioCalendario.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ${diaDoMesTexto(data)} de ${mesTexto(data)} de ${anoTexto(data)}`;
        relogioCalendario2.innerHTML = `${horarioAtual(data)}`;

        return relogioCalendario.innerHTML, relogioCalendario2.innerHTML;
    };

    getResultado(hoje);
};

meuEscopo();
*/
/*
const relogioCalendario = document.querySelector('#relogioCalendario');

const dataAtual = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

relogioCalendario.innerHTML =
    dataAtual.toLocaleString('pt-BR', opcoes);

    */

const relogioCalendario = document.querySelector('#relogioCalendario');

const dataAtual = new Date();

relogioCalendario.innerHTML = dataAtual.toLocaleDateString('pt-BR', {dateStyle: 'full'});
