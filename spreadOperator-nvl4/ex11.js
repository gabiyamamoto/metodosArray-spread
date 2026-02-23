function atualizarPerfil(usuario, novosDados) {
    return {
        ...usuario,
        ...novosDados
    };
}

// Teste:
const usuario = { nome: 'Gabi', idade: 17, cidade: 'Campinas'};
console.log(atualizarPerfil(usuario, {idade: 18}));