function configurarSistema(padrao, usuario) {
    return {
        ...padrao,
        ...usuario
    };
}

// Teste:
const configPadrao = { idioma: 'Português', local: 'Brasil'};
console.log(configurarSistema(configPadrao, {idioma: 'Inglês'}));