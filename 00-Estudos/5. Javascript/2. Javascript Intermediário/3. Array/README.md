# Array [ ]

## **Aprendendo sobre arrays**

Nesta aula, vamos aprender o conceito de array, que é uma coleção ordenada de valores, onde cada item possui uma posição específica chamada de índice. Vamos fazer uma analogia com uma caixa de correio com compartimentos numerados, representando os índices do array. Vamos aprender também que os índices começam do zero e vão até um número determinado, sendo o total de índices igual ao número final menos um.

## **Criando um array com um construtor**

Veremos a diferença entre colchetes para arrays e chaves para objetos. Vamos criar um array vazio e como especificar o tamanho do array ao criá-lo. Também veremos sobre a propriedade `length` para medir o comprimento de um array.

```jsx
// Criando Array com construtor
const newArray = new Array(3)

console.log(newArray) // = [undefined, undefined, undefined]
console.log(typeof newArray) // = object
console.log(newArray.length) // = 3 empty spaces
```

## **Criando e acessando um array**

Nesta aula, vamos entender como criar e acessar itens de um array em JavaScript. Também abordaremos como acessar dinamicamente o último item do array, evitando erros ao tentar acessar índices que não existem.

```jsx
let fruits = ["Apple", "Banana", "Orange"]

console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length - 1])
```

## **Convertendo uma string para array**

Nesta aula, vamos aprender como converter uma string em um array utilizando o método `split`. Essa técnica pode ser útil para separar letras ou palavras em um array.

```jsx
let fullName = "Thales Amaral Lima"
console.log(fullName)

// cria Array dos nomes, separados pelo espaço
console.log(fullName.split(" ")) // ["Thales", "Amaral", "Lima"]

// cria Array de letras
console.log(Array.from(fullName)) // ["T", "h", "a", "l", "e", "s", " ", "A", "m", "a", …]
```

## **Adicionando e removendo um item do array**

Utilizamos os métodos `push` para adicionar no final, `unshift` para adicionar no início, `shift` para remover do início e `pop` para remover do final do array. Esses métodos são úteis para manipular arrays de forma eficiente em aplicações JavaScript.

```jsx
let colors = []

// Adciona um item no final do Array
colors.push("red")
colors.push("blue")
colors.push("green")

// Adciona um item no início do Array
colors.unshift("pink")

// Remove um item do início do Array
colors.shift()

// Remove um item do final do Array
colors.pop()

console.log(colors)
```

## **Usando o índice**

Nesta aula, vamos aprender como obter a posição de um item em um array, utilizando o método `indexOf`. Também iremos aprender a deletar um item específico pelo índice, utilizando o método `splice`. O método `splice` permite remover elementos a partir de uma posição específica no array.

```jsx
let colors = ["red", "blue", "green"]

// Retorna o índice do elemento
let position = colors.indexOf("blue")
console.log(position) // = 1

// Removendo o item pela posição
colors.splice(position, 1) // ["red", X, "green"]
// colors.splice(1, 2) // ["red", X, X]
console.log(colors)

const array = [1, 2, 3, 4, 5];
array.splice(1, 1, 'x', 'y', 'z');

console.log(array) // = [1, 'x', 'y', 'z', 3, 4, 5];
```

## **Quais elementos o array aceita?**

Nesta aula, vamos ver que um array pode conter elementos de diferentes tipos de dados, como texto, números, booleanos, funções e objetos.

```jsx
let myArray = [
    "Texto",
    10,
    true,
    
    function () {
        console.log("Menssagem")
    },

    {
        ID: 1,
        valor: "valor 1"
    }
]

// String
console.log(myArray[0])
// Number
console.log(myArray[1])
// Boolean
console.log(myArray[2])
// Function
myArray[3]()
//Object
console.log(myArray[4].ID, myArray[4].valor)
```

## **Verificando se existe um conteúdo no array**

Nesta aula, vamos aprender como verificar se um item existe em um array utilizando o método `includes` retornando verdadeiro ou falso. O método `includes` é uma ferramenta muito útil para essa finalidade.

```jsx
let colors = ["red", "blue", "green"]

// Verifica se um item existe no Array
console.log(colors.includes("blue")) // = true
```