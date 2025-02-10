# 4.5.1 Transition

### Links

- https://animista.net/
- https://cubic-bezier.com/#.17,.67,.83,.67
- [CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)

---

- HTML
    
    ```html
    <link rel="stylesheet" href="style.css">
    
    <style>
        body {
            background-color: mediumpurple;
        }
    
        div {
            background-color: white;
            width: 10rem;
            height: 10rem;
        }
    </style>
    
    <div></div>
    ```
    

---

### **CSS Transition 01**

Neste trecho da aula, expliquei sobre a utilização de transitions em CSS para suavizar mudanças de propriedades. Demonstrei como aplicar transições em propriedades como opacidade e transform, utilizando o `transition property` e `transition duration`. Também abordei o uso do `transition delay` para adicionar um atraso na transição e a importância de ser específico nas propriedades a serem modificadas. Mostrei como configurar transições separadamente e o uso da propriedade `all` para aplicar a transição em todas as propriedades.

- CSS: transition-property {duration; delay}
    
    ```css
    div {
        opacity: .3;
    
        transition-property: opacity, transform;
        /* transition-property: all; */
        transition-duration: 1s, 100ms;
        transition-delay: 1s, 3s;
    }
    
    div:hover {
        opacity: 1;
        transform: translateX(5rem);
    }
    ```
    

### **CSS Transition 02**

Neste vídeo, exploro o `cubic-bezier` e o `transition-timing-function` para criar transições suaves em CSS.

Demonstrando como diferentes funções, como Linear, Easy In, Easy Out e Easy In Out, afetam a aceleração da transição.

Também abordo o uso de `steps` para criar animações em etapas.

A ferramenta Cubic Bezier é essencial para ajustar as curvas de aceleração. Recomendo explorar essas técnicas para criar transições mais dinâmicas em seus projetos.

- CSS: transition-timing-function & cubic-bezier() & steps()
    
    ```css
    div {
        opacity: .3;
        
        transition-property: opacity, transform;
        transition-duration: 2s;
        
        /* transition-timing-function: linear; */
        /* transition-timing-function: ease; */
        /* transition-timing-function: ease-in; */
        /* transition-timing-function: ease-out; */
        /* transition-timing-function: ease-in-out; */
        /* transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); */
        /* transition-timing-function: steps(5); */
        /* transition-timing-function: step-start; */
    }
    
    div:hover {
        opacity: 1;
        transform: translateX(30rem);
    }
    ```
    

### **CSS Transition 03**

Neste vídeo, abordo detalhes sobre a propriedade transition em CSS. Explico como usar o `shorthand transition`, definir duração, delay e timing function.

Também destaco a importância de considerar o `Prefers Reduced Motion` para usuários com preferência por menos animações.

Além disso, alerto sobre a necessidade de aplicar a transição no elemento correto e não apenas no disparo.

A transição é uma propriedade do CSS que requer atenção às propriedades suportadas. É uma ferramenta poderosa para melhorar a experiência do usuário.

- CSS: transition & @media (prefers-reduced-motion)
    
    ```css
    div {
        opacity: .3;
    
        /* transition: all 400ms 2s ease; */
        transition: opacity 1s 100ms ease, transform 100ms 2s linear;
    }
    
    div:hover {
        opacity: 1;
        transform: translateX(5rem);
    }
    
    @media (prefers-reduced-motion) {
        div {
            transition: none;
        }
    }
    ```
    
- CSS: Local do transition
    
    ```css
    div {
        opacity: .3;
    
        transition: all 3s;
    }
    
    div:hover {
        opacity: 1;
        transform: translateX(5rem);
        transition: all 1s;
    }
    ```