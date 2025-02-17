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