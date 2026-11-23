// Etapa 5 — Repetição e listas

// 1. Percorrendo um array e calculando a média
const notas = [7, 8, 6, 6.5];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

const media = somaNotas / notas.length;
console.log("Média:", media);

// 2. Primeiro e último elemento de um array
const frutas = ["maçã", "banana", "uva", "laranja"];
console.log("Primeiro elemento:", frutas[0]);
console.log("Último elemento:", frutas[frutas.length - 1]);

// 3. Números pares de 2 até 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 4. Soma dos valores do array
const valores = [1, 2, 3, 4];
let total = 0;

for (let i = 0; i < valores.length; i++) {
    total += valores[i];
}

console.log("Soma dos valores:", total);
