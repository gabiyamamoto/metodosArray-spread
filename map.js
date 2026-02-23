// Converter reais em dolares e rublos

const precosEmReais = [10, 20, 30];

const precosEmDolar = precosEmReais.map(preco => preco * 5);
console.log(precosEmDolar);

const precosEmRublos = precosEmReais.map(preco => preco / 0.067);
console.log(precosEmRublos);

// ----------------------------------------------------------------//
// Converter Celcius em Fahrenheit

const temperaturasCelcius = [40, 5, 7];

const temperaturasFahrenheit = temperaturasCelcius.map(temperatura => (temperatura * 1.8) + 32);
console.log(temperaturasFahrenheit);

// ----------------------------------------------------------------//
// Deixar o texto em maiúsculo

const textos = ['julia', 'gabi', 'melmel'];
const textosGrandes = textos.map(texto => texto.toUpperCase());
console.log(textosGrandes);

// ----------------------------------------------------------------//

