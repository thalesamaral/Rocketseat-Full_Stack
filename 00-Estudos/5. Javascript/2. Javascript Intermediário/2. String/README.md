# **String**

## **Texto maiúsculo e minúsculo**

Vamos usar o método `toUpperCase` para transformar o texto em maiúsculo e o método `toLowerCase` para transformar em minúsculo. Esses métodos não modificam o conteúdo da variável, apenas exibem o texto de acordo com a formatação desejada. Essas são opções úteis para manipular strings no JavaScript.

```jsx
let message = "Texto de Teste"

// Métodos para maiúsculo e minúsculo. Não altera o conteúdo da variável
console.log(message.toLocaleLowerCase())
console.log(message.toLocaleUpperCase())
console.log(message)
```

## **Obtendo o comprimento de uma string**

Usa-se a propriedade `.length` para retornar a quantidade de caracteres de uma string, incluindo espaços. A propriedade é útil para validar senhas com um número mínimo de caracteres. Também veremos como verificar o comprimento de um número, convertendo-o em string para utilizar a propriedade `.length`. Alternativamente, também é possível usar o método `toString()` para obter o mesmo resultado.

```jsx
let message = "Texto de Teste"

// Propriedade que retorna comprimento de uma string
console.log(message.length)

// Se não for String deve-se converter
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)
```

## **Substituindo e fatiando um texto**

Neste vídeo, vamos aprender a "fatiar" e substituir partes de uma string em JavaScript usando o método `replace`. Também exploraremos o método `slice` para extrair partes específicas da string, tanto do início para o fim quanto de trás para frente. Além disso, vamos ver um pouquinho sobre o método `trim` para remover espaços em branco no início e no final de uma string, sem afetar os espaços no meio.

```jsx
let message = "Texto de Teste"

// Substituir parte de texto
console.log(message)
console.log(message.replace("Texto", "String"))

// Buscando uma parte (start, end)
console.log(message.slice(3,13)) // = to de Test
console.log(message.slice(-3)) // = ste

// Remove espaços do início e fim
let textWithSpace = "   Texto com espaço    "
console.log(textWithSpace)
console.log(textWithSpace.trim())
```

## **Completando uma string**

Nesta aula, vamos aprender a manipular strings em JavaScript. Veremos um exemplo prático de ocultar os primeiros dígitos de um número de cartão de crédito e exibir apenas os últimos quatro dígitos. Utilizaremos métodos como `slice` para pegar os últimos dígitos e `padStart()` para preencher a string com caracteres específicos. Também veremos o método `padEnd()` para preencher strings no final. Esses métodos são úteis para manipular e formatar strings de forma dinâmica.

```jsx
let creditCard = "123456781234"

// Substituir parte de texto
console.log(creditCard.length)

const lastDigits = creditCard.slice(-4)
// console.log(lastDigits)

// O padstart preenche a String no início
const maskedNumber = lastDigits.padStart(creditCard.length, "*")
console.log(maskedNumber) // = ********1234

// O padstart preenche a String no final
const number = "123"
console.log(number.padEnd(6, "*")) // = 123***
```

## **Separando e unindo strings**

Nesta aula, vamos aprender a dividir e unir textos utilizando os métodos disponíveis. Vamos usar o método `split()` para quebrar um texto com base em um caractere específico, gerando um array com as partes separadas. Também exploraremos o método `join` para unir as partes do texto separadas anteriormente, podendo definir um novo caractere como separador. Essas técnicas são úteis para manipular textos de forma eficiente, seja para separar palavras-chave ou para unir informações.

```jsx
let text = "Estudar, aprender, praticar"

// Separar a String utlizando um parâmetro
let textSplited = text.split(",")
console.log(textSplited)

// Unir a String de forma padrão ou com parâmetro
let textJoined = textSplited.join("")
textJoined = textSplited.join("---")
console.log(textJoined)
```

## **Encontrando um conteúdo no texto**

Utilizaremos o método `indexOf()` para encontrar a posição de uma palavra e o método `includes` para verificar se uma palavra ou conteúdo existe na string. É importante lembrar que o JavaScript é "case sensitive", ou seja, faz diferença entre maiúsculas e minúsculas. Podemos combinar esses métodos com `toLowerCase` e `toUpperCase` para facilitar as comparações. Esses métodos são úteis para diversas aplicações.

> Encontrar a posição da primeira ocorrência de um determinado valor em uma string ou array:
> 

```jsx
let text = "Encontrando um conteúdo no texto"

// Obtém a posição do texto
// Não encontrado = -1
console.log(text.indexOf("conteúdo"))

// Verificar se existe ou não o texto
// Não encontrado = false
console.log(text.includes("conteúdo"))
```