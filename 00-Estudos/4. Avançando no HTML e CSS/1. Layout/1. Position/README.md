# 4.1.1 Position

Abordamos o conceito de Position no CSS, explicando como posicionar elementos no layout. Discutimos as propriedades do Position, como Relative, Absolute, Fixed e Sticky, destacando suas características e aplicações. Exploramos o conceito de Stacking Context e a importância do Containing Block. Demonstramos exemplos práticos de cada tipo de Position, enfatizando a relevância desses conhecimentos no desenvolvimento web.

### São cinco valores da propriedade `position`:

- `static`
    - Default
- `relative`
    - Offset (deslocamento): relativo a si mesmo
    - Normal flow: respeitado
    - Stacking context: z-index importa
- `absolute`
    - Fica em um determinado local da tela, relativo ao containing block ancestral mais próximo ou Initial (body).
        - Se um elemento absolute não tiver ancestrais com valor em `position`, ele será relativo ao body
    - Normal flow: não respeitado
    - Stacking context: z-index importa
- `fixed`
    - Fixo na tela: relativo ao viewport, o que significa que ele sempre permanece no mesmo lugar, mesmo que a página seja rolada
    - Normal flow: não respeitado
    - Stacking context: z-index importa
- `sticky`
    - Alterna entre relativo e fixo dependendo do elemento pai que tenha mecanismo de scroll `overflow: scroll;`
        - Observação: você deve especificar pelo menos uma opção entre top, right, bottom ou left para que o posicionamento `sticky` funcione.
    - Normal flow: respeitado
    - Stacking context: z-index importa

### Fora o valor `static`, todos os outros destravam as propriedades:

- top, bottom, left, e right
- inset
- z-index