// IIFE -> immediately invoked function expression

const qualquerCoisa =() => {
    console.log(123);
    
} 

qualquerCoisa();

(function () {
    const sobrenome = 'Felisberto'
    console.log(123456);
    const nome = 'Adriano';
    console.log(nome);
    
    
    const criaNome = (nome) => {
        return nome + ' ' + sobrenome;
    } 
    const falaNome = () => {
        console.log(criaNome('luiz'));
        
    }
    falaNome();
})();

const nome = 'Qualquer coisa';


(function (idade, peso, Altura) {
    console.log(idade, peso, Altura);
    
})(30, 80, 1.80);

