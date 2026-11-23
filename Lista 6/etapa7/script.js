// Etapa 7 — DOM e eventos

const mensagem = document.getElementById("mensagem");
const botaoTexto = document.getElementById("botaoTexto");
const botaoCor = document.getElementById("botaoCor");
const contador = document.getElementById("contador");
const botaoContar = document.getElementById("botaoContar");

let cliques = 0;

botaoTexto.addEventListener("click", function () {
    mensagem.textContent = "O texto foi alterado com JavaScript!";
});

botaoCor.addEventListener("click", function () {
    mensagem.style.color = "blue";
});

botaoContar.addEventListener("click", function () {
    cliques++;
    contador.textContent = cliques;
});
