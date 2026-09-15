/*
====================================================

MÉTODOS DE INSTÂNCIA E MÉTODOS ESTÁTICOS

====================================================

• Método de instância

  → Pertence às instâncias criadas pela classe.

  → Pode acessar as propriedades da instância
    através do this.

• Método estático

  → Pertence à própria classe.

  → É chamado diretamente pela classe.

  → Não pertence às instâncias criadas com new.

====================================================
*/


// ==================================================
// FUNÇÃO TESTE
// → CUIDADO: o this depende de como a função
//   é chamada
// ==================================================

function teste() {

    console.log(this);

}


// ==================================================
// CLASSE CONTROLE REMOTO
// ==================================================

class ControleRemoto {

    constructor(tv) {

        this.tv = tv;

        this.volume = 0;

        teste(); // CUIDADO

    }


    // ==================================================
    // MÉTODO DE INSTÂNCIA
    // → Pertence aos objetos criados com new
    // → Pode acessar as propriedades da instância
    // ==================================================

    aumentarVolume() {

        this.volume += 2;

    }


    // ==================================================
    // MÉTODO DE INSTÂNCIA
    // → Também pode receber argumentos
    // ==================================================

    diminuirVolume() {

        this.volume -= 2;

    }


    // ==================================================
    // MÉTODO ESTÁTICO
    // → Pertence à própria classe
    // → Não pertence às instâncias
    // ==================================================

    static trocaPilha() {

        console.log(this.volume);

    }

}


// ==================================================
// INSTÂNCIA DA CLASSE
// ==================================================

const controle1 = new ControleRemoto('LG');


// ==================================================
// UTILIZANDO MÉTODOS DE INSTÂNCIA
// ==================================================

controle1.aumentarVolume();

controle1.aumentarVolume();

controle1.aumentarVolume();


// ==================================================
// MÉTODO ESTÁTICO
// → Não pode ser chamado através da instância
// ==================================================

// controle1.trocaPilha(); // ERRO


// ==================================================
// CHAMANDO MÉTODO ESTÁTICO
// → Deve ser chamado diretamente pela classe
// ==================================================

ControleRemoto.trocaPilha();


// ==================================================
// EXIBINDO A INSTÂNCIA
// ==================================================

console.log(controle1);