// factory function (função fabrica)
// constructor function (função construtora)
const criaPessoa = (nome, sobrenome, p, a) => {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ') 
            this.nome = valor.shift();
            this.sobrenome = valor.join('  ')
                       

        },
        fala: function (assunto) {
            return `${this.nome} está ${assunto}`;
        },

        peso: p, 
        altura: a,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Adriano', 'Felisberto dos Santos', 65, 1.70);

console.log(p1);
console.log(p1.fala('falando sobre JS'));
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.peso);
console.log(p1.imc());
// console.log(p1.nomeCompleto());
p1.nomeCompleto = 'Adriano Felisberto dos Santos';




const criaPessoa2 = (nome, sobrenome, p, a) => {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${this.nome} está ${assunto}`;
        },
        peso: p,
        altura: a,

        //getter
        get imc() { // com get o imc vai fingir ser uma classe/variavel ao inves de uma funçãp
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p2 = criaPessoa2('luiz', 'otavio', 65, 1.80);
console.log(p2.imc);
