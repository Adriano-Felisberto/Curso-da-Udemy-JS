// função contrutora -> objetos
// função fabrica -> objetos
// construtora -> primeira letra maiúscula 
/*
Pessoa(new)

*/


const Pessoa = function(nome, sobrenome) {
    // variaveis privadas
    const ID =123456;
    
    const metodoInterno = function() {

    }
    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome + ': sou um método');
        
    };
}

const p1 = new Pessoa('Adriano', 'Felisberto');

console.log(p1.nome);
console.log(p1.sobrenome);

p1.metodo();