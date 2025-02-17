# **Objetos { }**

## **Aprendendo sobre objetos**

Utilizamos objetos para abstrair e representar entidades concretas ou abstratas. Os objetos têm propriedades (características) e métodos (comportamentos). Por exemplo, ao criar um objeto "carro", definimos suas propriedades como modelo, número de portas, ano de fabricação, entre outros, e seus métodos como ligar, desligar, acelerar. Na prática, no Javascript, as propriedades são valores e os métodos são funções associadas ao objeto.

## **Criando um objeto**

Nesta aula, abordaremos na prática os conceitos de objetos em programação, destacando propriedades e métodos. Criaremos um objeto vazio e um objeto com propriedades aninhadas. Também veremos como adicionar métodos a um objeto.

```jsx
// Criar objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Criar objeto com propriedades e métodos
const user = {
    email: "thales@email.com",
    age: 22,
    name: {
        firstName: "Thales",
        lastName: "Lima"
    },

    // método
    msg01: function() {
        console.log('Mensagem 1')
    },

    // método simplificado
    msg02() {
        console.log('Mensagem 2')
    },
    
    // método Arrow
    msg03: () => {
        console.log('Mensagem 3')
    }
}
```

## **Acessando um objeto**

Utilizamos a notação de ponto e a notação de colchetes para acessar as propriedades e métodos dos objetos. A notação de ponto é mais comum, mas a de colchetes também é uma alternativa válida. Com a notação de ponto, acessamos as propriedades diretamente, enquanto com a notação de colchetes, usamos strings para acessar as propriedades. Ambas as formas nos permitem acessar e manipular objetos de forma eficiente.

```jsx
// Acessando propriedades e métodos usando a notação de ponto
console.log(user.name.firstName)
user.msg01()
user.msg02()
user.msg03()

// notação de colchetes
console.log(user["name"]["firstName"])
user["msg01"]()
```

## **Acessando propriedades no contexto do objeto**

Exploraremos duas formas de acessar a propriedade além de aprender um pouco sobre o que é o `this` e como ele funciona.

```jsx
// Acessando propriedades no contexto do objeto
const user = {
    name: "Thales",

    msg01: function() {
        console.log(`Mensagem 1 para ${user.name}`)
    },

    msg02() {
        console.log(`Mensagem 2 para ${this.name}`)
    },

    msg03: () => {
        console.log(`Mensagem 3 para ${this.name}`)
    }
}

// Acessando
console.log(user.name.firstName)
user.msg01()
user.msg02()
user.msg03()
```

## **Atualizando um objeto**

Vamos modificar propriedades de um objeto, como nome e quantidade, utilizando a notação de ponto e colchetes. Alteraremos os valores das propriedades além de exibir as atualizações feitas.

```jsx
const Product = {
    name: "Teclado",
    qtd: 100,
}

// Atualizando o valor de uma propriedade
console.log(Product.qtd)
Product.qtd = 90
console.log(Product.qtd)
```

## **Encadeamento opcional (Optional chaining)**

Nesta aula, aprenderemos o conceito de Optional Chaining no JavaScript, um recurso útil para acessar propriedades de objetos de forma segura, evitando erros caso a propriedade não exista. Veremos na prática como utilizar o Optional Chaining para acessar propriedades e métodos de objetos de forma condicional, garantindo que não ocorram exceções caso a propriedade não exista. Este recurso é especialmente útil ao lidar com objetos que possuem propriedades opcionais.

```jsx
const user = {
    name: "Thales",

    // address: {
    //     street: "Rua x",
    //     city: "Brasília"
    // },

    msg01() {
        console.log(`Mensagem 1 para ${this.name}`)
    },

    // msg02: function() {
    //     console.log(`Mensagem 2 para ${this.name}`)
    // },
}

// Teste de erro
console.log(user?.name)
console.log(user.address?.street)
// console.log(user.address.city)

// Teste de erro
user.msg01?.()
// user.msg02()
```

## **Operador de coalescência nula**

Vamos entender como retorna o operando do lado direito quando o do lado esquerdo é nulo ou `undefined`. Veremos na prática como usar para verificar se uma variável tem conteúdo ou não. Esse operador é útil para fazer verificações em diferentes cenários de programação.

```jsx
let content01 = "message"
let content02 = undefined
let content03 = null

console.log(content01 ?? "DEFAULT") // message
console.log(content02 ?? "DEFAULT") // DEFAULT
console.log(content03 ?? "DEFAULT") // DEFAULT
```

## **O que é uma função construtora?**

Vamos criar uma função construtora para instanciar objetos, explicando o uso do operador `new`. Também vamos criar objetos com propriedades e métodos, além de exemplificar a instância de objetos com a função construtora. Também veremos a possibilidade de usar funções construtoras disponíveis no JavaScript, como `String` e `Date`. Além disso, vamos aprender uma abordagem alternativa para criar objetos usando funções construtoras.

```jsx
// EXPLÍCITO *****************************************************
function createProduct(name) {
    const product = {}

    product.name = name

    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product01 = new createProduct("Teclado")
console.log(product01.name)
product01.details()

const product02 = new createProduct("Mouse")
console.log(product02.name)
product02.details()

console.log(product01 === product02) // test: false

// Exemplos de funções construtoras disponíveis no próprio Javascript.
let myName = new String("Rodrigo")
console.log(myName)

let price = "1.5".replace(".", "")
console.log(price)

let date = new Date("2025-1-1")
console.log(date)

// IMPLÍCITO *****************************************************
function Person(name) {
    this.name = name

    this.message = function () {
        console.log(`Bom dia, ${this.name}`)
    }
}

const person01 = new Person("Thales")
console.log(person01)
person01.message()
```