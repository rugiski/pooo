const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "Você sabia? Em Monstros S.A., Sulley e Mike trabalham juntos para coletar energia através dos gritos das crianças!";
}

botao.addEventListener("click", mostrarMensagem);
