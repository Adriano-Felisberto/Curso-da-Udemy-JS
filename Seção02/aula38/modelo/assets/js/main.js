/*
====================================================
NODELIST, querySelector E getComputedStyle
====================================================

• querySelectorAll()
  → Retorna uma NodeList
  → Pode conter VÁRIOS elementos
  → Usado quando queremos trabalhar com vários nós

• querySelector()
  → Retorna APENAS UM elemento
  → Sempre o PRIMEIRO que encontrar
  → NÃO retorna NodeList

====================================================

O QUE É UMA NODELIST?
----------------------------------------------------
• NodeList é uma coleção de nós do DOM
• Parece um array, mas NÃO é um array
• Pode ser percorrida com:
  → for
  → for...of
  → forEach (na maioria dos casos)

====================================================

O QUE É getComputedStyle?
----------------------------------------------------
• Função do JavaScript que retorna
  os ESTILOS FINAIS de um elemento

• "Estilos finais" = estilos já calculados pelo navegador
  levando em conta:
  → CSS externo
  → CSS interno
  → CSS inline
  → regras de herança
  → regras do navegador (user agent)

====================================================

PEGANDO UM ESTILO ESPECÍFICO
----------------------------------------------------
const estilosBody = getComputedStyle(document.body);

• estilosBody é um OBJETO
• Contém TODOS os estilos aplicados ao body
• Mesmo estilos que NÃO foram definidos por você

====================================================

AVISO IMPORTANTE ⚠
====================================================

• NÃO confunda:
  element.style.backgroundColor
  getComputedStyle(element).backgroundColor

Diferença:
----------------------------------------------------
element.style → só lê estilos INLINE
getComputedStyle → lê TODOS os estilos finais

====================================================
*/

// Seleciona o elemento com a classe "paragrafos"
const paragrafos = document.querySelector('.paragrafos');

// Seleciona TODOS os <p> dentro de .paragrafos (NodeList)
const ps = paragrafos.querySelectorAll('p');

// Pega os estilos finais calculados do body
const estilosBody = getComputedStyle(document.body);

// Obtém a cor de fundo REAL do body
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

// Percorre a NodeList e aplica os estilos
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
