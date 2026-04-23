const modal = document.querySelector('.modal');
const cardsContainer = document.querySelector('.cards');
const totalCarrinho = document.querySelector('.totalCarrinho');

const itens = [
  { id: 1, nome: "Camisa", preco: 50.00, quantidade: 0 },
  { id: 2, nome: "Calça", preco: 100.00, quantidade: 0 },
  { id: 3, nome: "Tênis", preco: 150.00, quantidade: 0 }
];

const createCard = (card) => {
  return `
    <div class="card">
      <img src="img/${card.id}.png" alt="${card.nome}">
      <div class="card-body">
        <h5>${card.nome}</h5>
        <p>R$ ${card.preco.toFixed(2)}</p>
        <button 
          class="adicionarCarrinho" 
          data-id="${card.id}">
          Adicionar
        </button>
      </div>
    </div>
  `;
};

itens.forEach(item => {
  cardsContainer.innerHTML += createCard(item);
});

const valorPagar = () => {
  let total = 0;

  itens.forEach(item => {
    total += item.preco * item.quantidade;
  });
  
  return total;
};

const atualizarTotal = () => {
  totalCarrinho.innerText = `Total: R$ ${valorPagar().toFixed(2)}`;
};

const btnFuncoes = () => {
  document.addEventListener('click', (evento) => {
    const el = evento.target;

    if (el.classList.contains('btn')) {
      modal.showModal();
    }

    if (el.classList.contains('Fechar')) {
      modal.close();
    }


    if (el.classList.contains('adicionarCarrinho')) {
      const id = Number(el.dataset.id);

      const item = itens.find(item => item.id === id);
      if (item) item.quantidade++;

      atualizarTotal();
    }

    if (el.classList.contains('finalizarCompra')) {
      if (valorPagar() > 0) {
        totalCarrinho.innerHTML = `<strong>Compra Finalizada!!!</strong>`;

        itens.forEach(item => item.quantidade = 0);
      } else {
        totalCarrinho.innerHTML = `<strong>Adicione itens ao carrinho para finalizar a compra</strong>`;
      }
    }
    if(el.classList.contains('removerItem')) {
      atualizarTotal(0)
    }
  });
};

btnFuncoes();


