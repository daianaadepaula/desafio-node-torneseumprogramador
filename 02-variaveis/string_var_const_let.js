nome = "Desafio de node" // variável global
console.log(nome)
console.log(typeof nome)

// objeto no escopo global
const global = { 
	nome: "Desafio de node"
}

// ou posso usar do node
// global.nome = "Desafio de node"

let nome2 = "Desafio de node" // variável local eu posso não redeclarar dentro do escopo mas posso alterar seu conteúdo
const nome3 = "Desafio de node" // constante não pode ser redeclarada dentro do escopo e também não pode ser alterado seu conteúdo
var nome4 = "Desafio de node" // variável global eu posso redeclarar a variável

const test = () => {
	console.log("Dentro da função: " + global.nome) 
	let nome = "Desafio de node 2" // variável local
	nome = "Desafio de node 3" // conteúdo alterado
	console.log("Dentro da função depois da alteração: " + nome)
}

test()
console.log("Fora da função: " + nome)

let sobrenome = "Torne-se um Programador"
console.log(nome + "" + sobrenome) // concatenar as variáveis