function fazerJogada(tabuleiro, posicao, simbolo) {
    // cria uma cópia do tabuleiro
    const novoTabuleiro = [...tabuleiro];

    // atualiza apenas a posição escolhida com o simbolo fornecido, por ex: O ou X
    novoTabuleiro[posicao] = simbolo;

    return novoTabuleiro;
}

// Teste
const tabuleiro = ["", "", "", "", "", "", "", "", ""];
console.log(fazerJogada(tabuleiro, 0, "X"));