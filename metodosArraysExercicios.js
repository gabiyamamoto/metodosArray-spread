// 1️⃣forEach — Exibição simples

const nomes = ["Ana", "Carlos", "Bruna", "Diego"];
nomes.forEach((nome) => {
  console.log(`Nome: ${nome}`);
});

// 2️⃣forEach — Cálculo com efeito colateral

const numeros = [2, 4, 6, 8];
numeros.forEach((numero) => {
  console.log(numero * 2);
});

// 3️⃣map — Transformação de dados

const numbers = [1, 2, 3, 4, 5];
const dobroNumbers = numbers.map((number) => number ** 2);
console.log(dobroNumbers);

// 4️⃣map — Preparando dados para React

const alunos = ["João", "Maria", "Pedro"];
const novosAlunos = alunos.map((aluno) => {
  return `nome: ${aluno}, ativo: true`;
});
console.log(novosAlunos);

// 5️⃣filter — Filtrando números

const nums = [10, 15, 20, 25, 30];
const novosNums = nums.filter((num) => num > 20);
console.log(novosNums);

// 6️⃣filter — Caso real de React

const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: true },
  { id: 2, titulo: "Praticar React", concluida: false },
  { id: 3, titulo: "Fazer exercícios", concluida: true },
];
const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true);
console.log(tarefasConcluidas);

// 7️⃣reduce — Soma simples

const valores = [10, 20, 30, 40];
const totalSoma = valores.reduce((total, valor) => {
  return total + valor;
}, 0);
console.log(totalSoma);

// 8️⃣reduce — Contador

const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];

const contagemFrutas = frutas.reduce((contador, fruta) => {
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
}, {});
console.log(contagemFrutas);

// 9️⃣Desafio — filter + map

const produtos = [
{ nome: "Notebook", preco: 3500 },
{ nome: "Mouse", preco: 80 },
{ nome: "Teclado", preco: 150 }
];

const produtosCaros = produtos.filter((produto) => produto.preco > 100).map((produto) => produto.nome);
console.log(produtosCaros);

/* 🔟 Desafio React Mentality — Qual usar?
    a) O método ideal seria o .map, porque ele cria uma outra array transformando cada item da array antiga em outra coisa.
    b) O .filter é o melhor, pois você quer reduzir vários valores a um único valor total.
    c) .filter é bom nessa situacao, porque serve para filtrar o array e manter aqueles que cumprem as condições
    d) Nesse caso, é melhor usar o forEach, pois ele não retorna nada, só executa algo para cada item.
*/