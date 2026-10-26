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
