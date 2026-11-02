'use strict';

function relatarLarguras() {
  document.querySelectorAll('[data-relatar]').forEach((faixa) => {
    faixa.querySelectorAll('.item').forEach((item) => {
      const largura = Math.round(item.getBoundingClientRect().width);
      item.textContent = `${largura}px`;
    });
  });
}

function alternarClasse(botao) {
  const alvo = botao.closest('section').querySelector('[data-alvo]');
  const ativa = alvo.classList.toggle(botao.dataset.classe);
  botao.setAttribute('aria-pressed', String(ativa));
}

function iniciar() {
  relatarLarguras();
  document.querySelectorAll('button[data-classe]').forEach((botao) => {
    botao.addEventListener('click', () => alternarClasse(botao));
  });
  window.addEventListener('resize', relatarLarguras);
}

document.addEventListener('DOMContentLoaded', iniciar);