function adicionarPropriedade(obj, chave, valor) {
  return {
    ...obj,
    [chave]: valor,
  };
}

// Teste:
const pessoa = { nome: "Gabi" };
console.log(adicionarPropriedade(pessoa, "idade", 17));