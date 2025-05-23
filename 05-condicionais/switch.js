// Switch
/**
 * é uma estrutura de controle (como o if, mas mais organizada para várias opções).
 * ele compara o valor com os casos definidos.
 * break serve para parar a execução do switch após encontrar o caso certo. Sem isso, o programa continuaria executando os outros case abaixo. Funciona como um "else".
 * 
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const meu_telefone_call_back_o_que_farei_com_a_pizza = (pizza) => {

	switch (pizza) {
		case "calabreza":
			console.log("A pizza de calabreza estava uma delícia")
			break;
		case "mussarela":
			console.log(`Hummm esta pizza tomando vinho é excelente`);
			break;
		case "toscana":
			console.log(`Ebaaaa pizza de toscana`);
			break;
		default:
			console.log(`Você escolheu a pizza sabor: ${pizza}`);
			break;
	}

	rl.close(); // Fechando a porta depois de pegar a pizza
}

rl.question('Digite sua pizza: ', meu_telefone_call_back_o_que_farei_com_a_pizza);
