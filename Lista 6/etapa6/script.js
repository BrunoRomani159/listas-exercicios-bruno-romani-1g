// Etapa 6 — Funções

// Função que retorna o dobro de um número
function dobro(numero) {
    return numero * 2;
}

// Função que calcula a média de duas notas
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função que soma dois números
function soma(a, b) {
    return a + b;
}

// Função que verifica se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log("Dobro:", dobro(5));
console.log("Média:", calcularMedia(8, 6));
console.log("Soma:", soma(4, 6));
console.log("É par?", ehPar(10));
