// Etapa 8 — Mini-projeto: calculadora de média

const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 10;
const MEDIA_APROVACAO = 6;

const campoNota1 = document.getElementById("nota1");
const campoNota2 = document.getElementById("nota2");
const botaoCalcular = document.getElementById("botaoCalcular");
const resultado = document.getElementById("resultado");

// Calcula a média de duas notas
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Verifica se a nota é um número válido entre 0 e 10
function notaValida(nota) {
    return !Number.isNaN(nota) &&
        nota >= NOTA_MINIMA &&
        nota <= NOTA_MAXIMA;
}

botaoCalcular.addEventListener("click", function () {
    // Impede o cálculo se algum campo estiver vazio
    if (campoNota1.value.trim() === "" || campoNota2.value.trim() === "") {
        resultado.textContent = "Erro: preencha as duas notas.";
        return;
    }

    const nota1 = Number(campoNota1.value);
    const nota2 = Number(campoNota2.value);

    if (!notaValida(nota1) || !notaValida(nota2)) {
        resultado.textContent = "Erro: informe notas entre 0 e 10.";
        return;
    }

    const media = calcularMedia(nota1, nota2);

    if (media >= MEDIA_APROVACAO) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Aprovado`;
    } else {
        resultado.textContent = `Média: ${media.toFixed(1)} - Abaixo da média`;
    }
});
