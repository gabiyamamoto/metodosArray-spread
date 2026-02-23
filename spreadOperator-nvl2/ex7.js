function adicionarAoCarrinho(array, produto) {
  return [...array, produto];
}

// Teste:
const carrinho = ["Cadeira", "Armário"];
console.log(
  adicionarAoCarrinho(carrinho, {
    nome: "Mouse",
    preco: 150,
  }),
);
