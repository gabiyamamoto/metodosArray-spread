function somarTresNumeros(a, b, c) {
    return a + b + c;
}

const numeros = [10, 20, 30];
const resultado = somarTresNumeros(...numeros);

console.log(resultado);