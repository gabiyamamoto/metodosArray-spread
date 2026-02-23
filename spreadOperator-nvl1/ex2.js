function adicionarItem (array, novoItem) {
    return [...array, novoItem];
}

// Teste:
console.log(adicionarItem(["🍎 Maçã", "🍌 Banana"], "🍇 Uva"));
// Resultado:
// [ '🍎 Maçã', '🍌 Banana', '🍇 Uva' ]