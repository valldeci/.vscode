// Definir um array de objetos, cujas chaves serão
// id, titulo, autor, quantidade. Cada item representa um livro disponível na livraria
const estoque = [
  { id: 2035, titulo: 'Harry Potter', autor: 'Maria Silva', quantidade: 12 },
  { id: 3547, titulo: 'Senhor dos Anéis', autor: 'José Souza', quantidade: 8 },
  { id: 4426, titulo: 'O Livro das Fadas', autor: 'Mario Santos', quantidade: 15 },
  { id: 9139, titulo: 'O Programador Pragmático', autor: 'João Lima', quantidade: 20 }
];

// Criar função para adicionar um livro ao estoque
const adicionaLivro = (id, titulo, autor, quantidade) => {
  estoque.push({
    id,
    titulo,
    autor,
    quantidade
  });
};

// Função para remover um item do estoque pelo id
const removeLivro = (idDoLivro) => {
  const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);

  if (existeIdNoEstoque) {
    for (let indice = 0; indice < estoque.length; indice++) {
      if (estoque[indice].id === idDoLivro) {
        console.log(O livro de id ${idDoLivro} foi removido);
        estoque.splice(indice, 1);
        break;
      }
    }
  } else {
    console.log(O livro de id ${idDoLivro} não foi encontrado);
  }
};

// Função para atualizar a quantidade de um livro do estoque
const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
  const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);

  if (existeIdNoEstoque) {
    for (let livro of estoque) {
      if (livro.id === idDoLivro) {
        livro.quantidade = novaQuantidade;
        console.log(A quantidade do livro ${livro.titulo} foi atualizada);
        break;
      }
    }
  } else {
    console.log(O id ${idDoLivro} não foi localizado no estoque);
  }
};

// Função que lista os livros que estão no array
const listarLivros = () => {
  if (estoque.length === 0) {
    console.log('O estoque está vazio');
  } else {
    console.log(O estoque possui ${estoque.length} títulos.);
    for (let livro of estoque) {
      console.log(`
        ID: ${livro.id}
        Livro: ${livro.titulo}
        Autor: ${livro.autor}
        Quantidade: ${livro.quantidade}
      `);
    }
  }
};

// =============== TESTES DAS FUNÇÕES ===============

// Adicionando alguns livros
adicionaLivro(3437, 'Código Limpo', 'Tio Bob', 18);
adicionaLivro(1072, 'Marketing Digital', 'Mauro Pereira', 4600);
adicionaLivro(8537, 'Refatoração', 'Erick Oliveira', 8135);
adicionaLivro(7225, 'A Bíblia do Java', 'Zé da Silva', 2000);

listarLivros();

// Atualizando quantidade
atualizaQuantidade(2035, 1200);
console.log(estoque);

// Removendo um livro
removeLivro(4426);
console.log(estoque);

// Exemplo de função com callback (adicionando vários livros de uma vez)
const listaNovosLivros = [
  { id: 5589, titulo: '1984', autor: 'Aline Vieira', quantidade: 1500 },
  { id: 8537, titulo: 'Marketing Digital', autor: 'Mauro Pereira', quantidade: 300 },
  { id: 1972, titulo: 'Refatoração', autor: 'Erick Oliveira', quantidade: 500 },
  { id: 7225, titulo: 'A Bíblia do JavaScript', autor: 'Zé da Silva', quantidade: 800 },
  { id: 7224, titulo: 'A Bíblia do JavaScript', autor: 'Zé da Silva', quantidade: 1200 }
];

const adicionaDaLista = (listaNovos) => {
  for (let livro of listaNovos) {
    const { id, titulo, autor, quantidade } = livro;
    adicionaLivro(id, titulo, autor, quantidade);
  }
  console.log(${listaNovos.length} livros adicionados);
};

adicionaDaLista(listaNovosLivros);
console.log(estoque);

listarLivros();