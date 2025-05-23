// loops
// Eles servem para repetir uma operação várias vezes, e são essenciais no dia a dia da programação — seja para percorrer arrays, repetir uma tarefa assíncrona, ou processar dados de uma API ou banco de dados.

// for => é clássico e muito usado para percorrer arrays com controle total sobre o índice. Quando usar: quando você precisa de controle total sobre o índice ou quer interromper o loop com break.
const nomes = ['Ana', 'Lucas', 'Pedro'];

for (let i = 0; i < nomes.length; i++) {
	console.log(nomes[i]); // Acessa cada nome
}

// for...of => Percorre valores de forma mais limpa que o for.  Quando usar: quando você só quer acessar os valores de um array.

for (const nome of nomes) {
	console.log(nome);
}

// for...in => Percorre chaves (índices ou propriedades) de objetos ou arrays. Evite em arrays — for...in é mais para objetos. Pode causar confusão se usado com arrays.

const user = { nome: 'Ana', idade: 25 };

for (const chave in user) {
	console.log(chave, user[chave]); // nome Ana / idade 25
}

// while => Executa enquanto uma condição for verdadeira. Quando usar: quando não sabe exatamente quantas vezes vai repetir, mas sabe a condição de parada.

let i = 0;

while (i < 3) {
	console.log(i);
	i++;
}

// do...while => Igual ao while, mas executa pelo menos uma vez, mesmo que a condição seja falsa na primeira vez.

let e = 5;

do {
	console.log(e); // Executa pelo menos uma vez
	e++;
} while (e < 3);

// forEach => Percorre um array, executando uma função para cada item. Não funciona com async / await do jeito esperado(não espera Promises). Útil para tarefas simples, leitura ou logging.

nomes.forEach((nome, index) => {
	console.log(index, nome);
});

// map => Cria um novo array transformado com base no original. Quando usar: quando precisa transformar os dados.

const numerosMap = [1, 2, 3];
const dobrados = numerosMap.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]

// filter => Filtra os elementos com base em uma condição.

const numerosFilter = [1, 2, 3, 4];
const pares = numerosFilter.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

// reduce => Reduz o array a um único valor(acumula resultado).

const numerosReduce = [1, 2, 3, 4];
const soma = numerosReduce.reduce((acc, curr) => acc + curr, 0);
console.log(soma); // 10


// Loop com async / await(evite forEach para isso) 
// Se você precisa fazer chamadas assíncronas dentro de um loop, use for, for...of, ou map com Promise.all.

// Exemplo com for...of e await:

const fetch = require('node-fetch'); // ou axios

const urls = ['https://api1.com', 'https://api2.com'];

async function fetchAll() {
	for (const url of urls) {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	}
}

fetchAll();

// break: encerra totalmente o loop
// Sai do loop imediatamente, mesmo que a condição ainda seja verdadeira.

for (let i = 0; i < 10; i++) {
	if (i === 5) break; // para quando i for 5
	console.log(i);
}
// Saída: 0 1 2 3 4

// continue: pula a iteração atual
// Ignora o restante do código naquela iteração e vai para a próxima.

for (let i = 0; i < 5; i++) {
	if (i === 2) continue; // pula o 2
	console.log(i);
}
// Saída: 0 1 3 4

// Use com for...of, while, etc.
// Exemplo com for...of:

const nomes2 = ['Ana', 'Lucas', 'Pedro', 'Admin'];

for (const nome of nomes2) {
	if (nome === 'Admin') break;
	console.log(nome);
}
// Saída: Ana, Lucas, Pedro

// Exemplo com continue em for...of:

for (const nome of nomes) {
	if (nome === 'Admin') continue;
	console.log(nome);
}
// Saída: Ana, Lucas, Pedro (pula o Admin)

// break e continue não funcionam em: forEach, map, filter, reduce

// Exemplo com erro lógico:

const nomes3 = ['Ana', 'Lucas', 'Admin'];

nomes3.forEach(nome => {
	if (nome === 'Admin') return; // NÃO funciona como `continue`
	console.log(nome);
});

// O return aqui só sai da função callback, mas o loop continua normalmente.
// Para usar break ou continue, prefira loops tradicionais.

