# Respostas --- Flexbox (Parte 2)

1.  O contêiner organiza os elementos, enquanto os itens ficam dentro
    dele. `display: flex` é colocado no contêiner.

2.  O eixo principal é horizontal, e os itens ficam organizados da
    esquerda para a direita.

3.  É o espaço livre depois que os itens ocupam seus tamanhos iniciais.
    Se todos têm `flex-grow: 0`, nenhum item cresce para ocupar essa
    sobra.

4.  O valor padrão é `0`, o que significa que o item não cresce para
    ocupar o espaço livre.

5.  A mesa representa o contêiner; cada prato representa um item; a
    sobra representa o espaço livre; e o peso de `flex-grow` representa
    a parte da sobra que cada item pode receber.

6.  `flex-grow: 1` no elemento da marca faz com que ela ocupe o espaço
    livre, deixando os links do tamanho do texto.

7.  Soma dos pesos: 2 + 3 + 1 = 6. Uma parte vale 600 ÷ 6 = 100 px. As
    larguras são: 2 × 100 = 200 px; 3 × 100 = 300 px; e 1 × 100 = 100
    px.

8.  Espaço inicial ocupado: 100 + 100 + 100 = 300 px. Sobra: 600 − 300 =
    300 px. O primeiro item fica com 100 px, o segundo com 200 px e o
    terceiro com 300 px.

9.  O `flex-shrink` entra em ação quando falta espaço. Seu valor padrão
    é `1`.

10. O total inicial é 400 + 400 = 800 px, então faltam 200 px. Cada item
    perde 100 px e fica com 300 px.

11. O primeiro item fica com 400 px, pois tem `flex-shrink: 0`. O
    segundo fica com 200 px. Assim, o conjunto ocupa os 600 px
    disponíveis.

12. Uma barra lateral de menu pode usar `flex-shrink: 0` para manter sua
    largura e não ficar estreita quando faltar espaço na página.

4. Tamanho de partida e atalho flex
Questão 13

O flex-basis define o tamanho de partida do item no eixo principal, antes de o Flexbox repartir a sobra (flex-grow) ou a falta (flex-shrink) de espaço.

Quando o flex-basis é diferente de auto, ele tem prioridade sobre width (em linha). Então, com width: 200px e flex-basis: 10rem, vale o flex-basis:

10rem = 10 × 16px = 160px

O tamanho de partida é 160px (considerando a fonte-raiz padrão de 16px).

Questão 14

Com flex-basis: 0, todos os itens partem com tamanho zero. Assim, a "sobra" é a faixa inteira:

sobra = largura da faixa - soma das bases = 600 - 0 = 600px

O flex-grow reparte a sobra, e, como ela é a faixa toda, a faixa inteira é repartida pelos pesos. Com flex-basis: auto, cada item parte do tamanho do conteúdo e só o que sobra além dele é repartido.

Questão 15
Atalho	grow	shrink	basis
flex: initial	0	1	auto
flex: 1	1	1	0
flex: auto	1	1	auto
flex: none	0	0	auto
Questão 16

Faixa de 600px, itens com tamanho de conteúdo de 100px e 300px.

Com flex: 1 (grow 1, basis 0):

soma das bases = 0 + 0 = 0
sobra          = 600 - 0 = 600px
soma dos pesos = 1 + 1 = 2
uma parte      = 600 / 2 = 300px
item 1 = 0 + 1 × 300 = 300px
item 2 = 0 + 1 × 300 = 300px

Com flex: auto (grow 1, basis auto):

soma das bases = 100 + 300 = 400px
sobra          = 600 - 400 = 200px
soma dos pesos = 1 + 1 = 2
uma parte      = 200 / 2 = 100px
item 1 = 100 + 1 × 100 = 200px
item 2 = 300 + 1 × 100 = 400px

Os resultados diferem porque a base é diferente. No flex: 1 a base é 0, então a faixa toda é repartida e os itens ficam iguais. No flex: auto a base é o tamanho do conteúdo, então só a sobra é repartida e a diferença original entre os itens (200px) é mantida.

Questão 17

Verdadeiro, desde que os itens tenham a mesma base (mesmo conteúdo e mesmos tamanhos declarados).

Justificativa: com bases iguais, flex: auto reparte a sobra em partes iguais e soma essa parte à base de cada item, resultando em larguras iguais. O flex: 1 também resulta em larguras iguais. Exemplo com dois itens de 200px em 600px:

flex: auto -> sobra = 600 - 400 = 200; parte = 100; itens = 300px e 300px
flex: 1    -> sobra = 600; parte = 300; itens = 300px e 300px

A ressalva é que, se os itens tiverem bases diferentes (por exemplo, um com padding ou width maior), o flex: auto mantém a diferença e o flex: 1 não, e os resultados deixam de coincidir.

5. O mínimo que trava o encolhimento
Questão 18

A propriedade que segura o item é o min-width: auto (valor padrão em itens flex), que impede o item de ficar menor que o seu conteúdo mínimo (no caso, a palavra mais longa). Por isso o flex-shrink: 1 não consegue encolhê-lo.

O ajuste que solta o item é min-width: 0, em geral junto de overflow-wrap: break-word para a palavra longa poder quebrar:

css
.texto {
  min-width: 0;
  overflow-wrap: break-word;
}
Questão 19

Em um miolo com menu e texto, o problema aparece quando o main (com flex: 1) recebe conteúdo que não quebra: URLs longas, palavras longas, blocos <pre>/<code>, tabelas largas ou imagens grandes. Como o main não encolhe abaixo do conteúdo, ele estoura a faixa, empurra o menu e cria rolagem horizontal na página.

6. order e align-self
Questão 20

(a) A ordem na tela é C, A, B, porque order: -1 coloca o item C antes dos demais (o padrão dos outros é 0).

(b) A ordem de foco com a tecla Tab segue a ordem do HTML: A, B, C. Isso vale para elementos focáveis (links, botões). Os <span> do enunciado não recebem foco por padrão; na demonstração foram usados <button> para isso ficar visível.

(c) Leitores de tela leem e navegam pela ordem do HTML, não pela ordem visual. Quando as duas ordens divergem, a pessoa ouve e percorre o conteúdo em uma sequência diferente da que enxerga quem usa a tela, o que confunde e prejudica a compreensão (relacionado aos critérios 1.3.2 e 2.4.3 da WCAG). Por isso order não deve ser usado para reorganizar conteúdo com significado.

Questão 21

O valor padrão de order é 0. Entre order: -1 e order: 2, aparece primeiro o de order: -1, pois os itens são exibidos do menor valor para o maior.

Questão 22

Com o pai em align-items: stretch:

align-self: flex-end: o item ignora o stretch e vai para o fim do eixo transversal (a base da faixa, em linha), com a altura do próprio conteúdo, sem esticar.
align-self: auto: o item herda o align-items do pai, ou seja, continua em stretch e é esticado até ocupar toda a altura da faixa.
Questão 23

Use align-items no contêiner para definir o alinhamento transversal de todos os itens de uma vez. Use align-self em um item para abrir uma exceção, alterando o alinhamento só dele.

7. A página com miolo
Questão 24
Itens de .pagina: header, div.miolo e footer (filhos diretos).
Itens de .miolo: aside e main (filhos diretos).
Questão 25

Porque display: flex só afeta os filhos diretos do elemento e não é herdado. Ser item de .pagina não faz .miolo organizar os próprios filhos. Para aside e main ficarem lado a lado e se distribuírem pelo espaço, .miolo também precisa ser um contêiner flex.

Questão 26
css
.pagina {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.miolo {
  display: flex;
  flex: 1;
}

aside {
  flex: 0 0 10rem;
}

main {
  flex: 1;
  min-width: 0;
}
.pagina { display: flex; }: torna .pagina um contêiner flex.
.pagina { flex-direction: column; }: o eixo principal passa a ser vertical, empilhando header, .miolo e footer.
.pagina { min-height: 100vh; }: a página tem, no mínimo, a altura da janela, o que permite o rodapé ficar no fim mesmo com pouco conteúdo.
.miolo { display: flex; }: torna .miolo contêiner de aside e main, que ficam lado a lado.
.miolo { flex: 1; }: como .miolo é item de uma coluna, ele cresce na vertical e ocupa toda a sobra de altura entre o topo e o rodapé.
aside { flex: 0 0 10rem; }: não cresce, não encolhe e parte de 10rem: a largura do menu fica fixa.
main { flex: 1; }: ocupa toda a largura restante ao lado do menu.
main { min-width: 0; }: permite que o texto encolha abaixo do tamanho do conteúdo, evitando que uma palavra ou bloco largo estoure o layout.
8. Erros comuns e síntese
Questão 27

O erro é aplicar flex-grow: 1 no contêiner. O flex-grow é propriedade de item: ele só tem efeito em elementos que são filhos diretos de um contêiner flex. A correção é deixar o display: flex no pai e colocar o flex-grow nos filhos:

css
.conteiner {
  display: flex;
}

.conteiner > .item {
  flex-grow: 1;
}
Questão 28
min-width: 0 (com overflow-wrap: break-word ou overflow: auto): indicado quando o item deve continuar na mesma linha e o conteúdo pode quebrar ou rolar, como o main de texto ao lado de um menu.
flex-wrap: wrap no contêiner: indicado quando os itens têm tamanho mínimo desejado e podem ir para a linha seguinte, como cartões ou itens de menu que não cabem na faixa.
css
.texto {
  min-width: 0;
  overflow-wrap: break-word;
}

.cartoes {
  display: flex;
  flex-wrap: wrap;
}
Questão 29
flex-basis: define o tamanho de partida do item no eixo principal, antes da distribuição de espaço.
flex-grow: define o peso com que o item recebe uma parte da sobra de espaço da faixa.
flex-shrink: define o peso com que o item encolhe quando falta espaço na faixa.
order: muda a posição visual do item na faixa (do menor para o maior valor), sem mudar a ordem do HTML.
align-self: altera o alinhamento no eixo transversal de um único item, sobrepondo o align-items do contêiner.