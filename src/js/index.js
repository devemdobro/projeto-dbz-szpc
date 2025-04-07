// Seleciona todos os botões de personagem
const botoes = document.querySelectorAll(".botao");
// Seleciona todos os personagens
const personagens = document.querySelectorAll(".personagem");

// Adiciona o evento de clique em cada botão
botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		removerSelecaoBotao();
		selecionarBotao(botao);

		removerSelecaoPersonagem();
		selecionarPersonagem(indice);
	});
});

/**
 * Remove a classe "selecionado" do botão que está atualmente selecionado
 */
function removerSelecaoBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	if (botaoSelecionado) {
		botaoSelecionado.classList.remove("selecionado");
	}
}

/**
 * Adiciona a classe "selecionado" ao botão clicado
 * @param {Element} botao - Botão que foi clicado
 */
function selecionarBotao(botao) {
	botao.classList.add("selecionado");
}

/**
 * Remove a classe "selecionado" do personagem atualmente exibido
 */
function removerSelecaoPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	if (personagemSelecionado) {
		personagemSelecionado.classList.remove("selecionado");
	}
}

/**
 * Adiciona a classe "selecionado" ao personagem correspondente ao botão clicado
 * @param {number} indice - Índice do botão clicado, que corresponde ao personagem
 */
function selecionarPersonagem(indice) {
	personagens[indice].classList.add("selecionado");
}