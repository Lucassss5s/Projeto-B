const botoes = document.querySelectorAll(".botao");

const jogos = document.querySelectorAll(".jogo");


botoes.forEach((botao, i )=>{
  botao.addEventListener("click", () => {

    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    const jogoSelecinado = document.querySelector(".jogo.selecionado");
    jogoSelecinado.classList.remove("selecionado");

    jogos[i].classList.add("selecionado");
  });
});

