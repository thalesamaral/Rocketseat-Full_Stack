# **Repetição e Iteração**

## **Aprendendo sobre repetições**

Nesta aula, vamos entender mais sobre estruturas de repetição, que são utilizadas para executar um bloco de código várias vezes de acordo com uma condição específica. Teremos o exemplo do jogo do Mário para ilustrar como uma repetição funciona na prática. Ao entender esse conceito, podemos aplicá-lo na prática para otimizar nosso código.

## **Loop `while`**

Nesta aula, abordaremos a estrutura de repetição `while`, que executa um bloco de código enquanto uma condição é verdadeira. Vamos aprender como declarar e utilizar o `while`, com exemplos de verificação de condições e controle de execução. Também vamos utilizar a variável de controle ”execute” para decidir se a repetição deve ou não continuar. Além disso vamos ver como utilizar o método `prompt` para interagir com o usuário e controlar a execução do `while`.

## **Loop infinito**

Nesta aula, vamos aprender o conceito de loop infinito, uma estrutura de repetição que não tem fim. Veremos na prática como isso pode sobrecarregar a memória do computador, tornando o navegador lento e travando. É essencial compreender esse conceito para evitar problemas de desempenho.

## **Loop `do while`**

Nesta aula, vamos abordar a estrutura de repetição `do while`. Essa estrutura executa pelo menos uma vez, verificando a condição no final. Foi destacado que a verificação da condição ocorre no final, garantindo a execução do bloco pelo menos uma vez. A diferença do do while é que ele executa antes de verificar a condição.

## **Loop `for`**

Nesta aula, vamos aprender sobre a estrutura de repetição `for`, destacando a variável de controle, a condição e o incremento.  O `for` é uma ferramenta poderosa para automatizar tarefas repetitivas de forma eficiente e concisa.

```jsx
for (i = 0; i < 10; i++) {
    console.log(i)
}
```

## **Loop `for in`**

Nesta aula, vamos aprender sobre a estrutura de repetição `for in`, que permite iterar sobre as propriedades de um objeto. Também foi mostrado como utilizar o `for in` com arrays, percorrendo seus índices ou elementos. O `for in` é uma ferramenta útil para percorrer objetos e arrays de forma eficiente.

```jsx
// OBJECT
let person = {
    name: "Jose",
    surname: "Lima",
    age: 30,
}

for (let chave in person) {
    // Exibe o nome das chaves
    console.log(chave) // = name
    // ...
    
    // Exibe o valor das chaves
    console.log(person[chave]) // = Jose
    // ...
}

// ARRAY
let colors = ["red", "blue", "green"]

for (let index in colors) {
    console.log(index) // = 0
    
    console.log(colors[index]) // = red
}

// Mesmo funcionamento que o FOR IN acima
for (index = 0; index < colors.length; index++) {
    console.log(index) // = 0
    // ...
    
    console.log(colors[index]) // = red
    // ...
}
```

## **Loop `for of`**

Nesta aula, iremos aprender sobre a estrutura de repetição `for of`, que itera sobre os valores de um objeto iterável. Diferente do `for in`, o `for of` itera sobre os valores, não sobre as propriedades. É importante que o objeto seja iterável, como um array.

```jsx
let colors = ["red", "blue", "green"]

for (let index of colors) {
    console.log(index) // = red
    
    console.log(colors[index]) // = undefined
}
```

## **`Break`**

Nesta aula, vamos aprender um pouco mais sobre o uso da palavra reservada `break` para encerrar a execução de repetições, como no caso do `switch case` e em estruturas de repetição como o `for`. No exemplo do `switch case`, o `break` é utilizado para encerrar a execução de um caso e evitar a continuação para os próximos casos. Já no `for`, o `break` é usado para interromper a repetição em um determinado momento. O `break` é útil para controlar o fluxo de execução do código.

## **`Continue`**

Agora vamos aprender sobre a palavra reservada `continue` que pode ser utilizada em estruturas de repetição para pular uma iteração e ir para a próxima, sem encerrar o loop inteiro como o `break` faz. Quando a condição definida é atendida, o `continue` é acionado, pulando a execução da iteração atual. Isso é útil para evitar a execução de determinadas partes do código em loops.