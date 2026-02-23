function copiarArray(array) {
    return [...array];
}

// Teste:
const num = [1, 2, 3];
const copia = copiarArray(num);
console.log(copia);

// Resultado:
// [ 1, 2, 3 ]