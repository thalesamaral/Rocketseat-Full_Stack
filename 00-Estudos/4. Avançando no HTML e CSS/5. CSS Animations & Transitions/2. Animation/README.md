# 4.5.2 Animation

### Links

- [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)

---

- HTML
    
    ```html
    <link rel="stylesheet" href="style.css">
    
    <style>
        button {
            background-color: deeppink;
            color: white;
            width: 10rem;
            height: 10rem;
            border: none;
            border-radius: 50%;
        }
    </style>
    
    <button>
        Botão!
    </button>
    ```
    

---

## **CSS Animation 01**

Abordo o conceito de animações em CSS, explicando a importância de uma linha do tempo para definir o início e o fim de uma animação.

Utilizo o `@keyframes` para criar a linha do tempo e defino propriedades de saída e chegada.

Demonstro como controlar a animação com `animation-name` e `animation-duration`, e como adicionar atrasos com `animation-delay`.

Exploro também o `animation-fill-mode` para definir como as propriedades devem ser aplicadas antes e depois da animação.

- CSS: @keyframes {from & to) | animation-name | animation-duration
    
    ```css
    button {
        animation-name: mover;
        animation-duration: 4s;
    }
    
    /* 1# */
    @keyframes mover {
        from {
            transform: translateY(0);
        }
    
        to {
            transform: translateY(30rem);
        }
        
        /* OR */
    
        0% {
            transform: translateY(0);
        }
    
        100% {
            transform: translateY(30rem);
        }
    }
    
    /* 2# */
    @keyframes mover {
        to {
            transform: translateY(30rem);
        }
    
        /* OR */
    
        100% {
            transform: translateY(30rem);
        }
    }
    
    /* 3# */
    @keyframes mover {
        10%, 70% {
            transform: translateY(30rem);
        }
    
        20%, 80% {
            transform: translateY(0);
        }
    }
    ```
    
- CSS: animation-fill-mode | animation-delay
    
    ```css
    button {
        animation-name: mover;
        animation-duration: 4s;
        /* animation-fill-mode: forwards; */
        
        animation-delay: 2s;
        /* animation-fill-mode: backwards; */
        animation-fill-mode: both;
    }
    
    @keyframes mover {
        0% {
            background-color: blue;
        }
    
        100% {
            transform: translateY(30rem);
        }
    }
    ```
    

## **CSS Animation 02**

Neste trecho, expliquei como manipular a direção da animação e a linha do tempo no CSS.

Abordei conceitos como `animation-direction`, `animation-fill-mode`, `animation-iteration-count`, `animation-play-state` e `transition-timing-function`.

Uso do `animation` Shorthand para simplificar a aplicação de animações. Além disso, a possibilidade de utilizar múltiplas animações em um mesmo elemento.

Ao longo da explicação, enfatizei a importância de compreender esses conceitos para controlar e personalizar as animações de forma eficiente.

- CSS: animation-direction {reverse} | animation-fill-mode
    
    ```css
    button {
        animation-name: mover;
        animation-duration: 4s;
        
        animation-delay: 2s;
        
        animation-direction: reverse;
        /* animation-fill-mode: backwards; */
        animation-fill-mode: forwards;
    }
    
    @keyframes mover {
        100% {
            transform: translateY(30rem);
        }
    }
    ```
    
- CSS: animation-direction {alternate} | animation-iteration-count | animation-play-state {paused}
    
    ```css
    button {
        animation-name: mover;
        animation-duration: 1s;
        
        animation-delay: 1s;
        
        animation-fill-mode: both;
        animation-direction: alternate;
        /* animation-iteration-count: 3; */
        animation-iteration-count: infinite;
        /* transition-timing-function: linear; */
    }
    
    button:focus {
        animation-play-state: paused;
    }
    
    @keyframes mover {
        100% {
            transform: translateY(30rem);
        }
    }
    ```
    
- CSS: Shorthand animation | Múltiplos animation-name
    
    ```css
    button {
        animation:
        mover 1s 1s both infinite alternate linear
        ,
        sumir 500ms both infinite alternate;
    }
    
    button:focus {
        animation-play-state: paused;
    }
    
    @keyframes mover {
        100% {
            transform: translateY(30rem);
        }
    }
    
    @keyframes sumir {
        50% {
            opacity: 0;
        }
    }
    ```