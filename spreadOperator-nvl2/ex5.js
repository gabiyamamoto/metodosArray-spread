function atualizarIdade(usuario, novaIdade) {
    return {
        ...usuario,
        idade: novaIdade
    };
}

// Teste:
const usuario = { nome: "Ju", idade: 17 };
console.log(atualizarIdade(usuario, 18));

// Resultado:
// { nome: 'Ju', idade: 18 }