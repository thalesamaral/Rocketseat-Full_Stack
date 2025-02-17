# **Data e Hora**

## **Obtendo a data e a hora**

```jsx
console.log(new Date()) // data atual
console.log(new Date().getTime()) // ms atual
console.log(new Date(1739658238500)) // referência em ms
```

## **Definindo uma data e uma hora específica**

Utilizaremos o `new Date` para definir a data desejada, lembrando que os meses são contados de 0 a 11. Também exploraremos como definir a hora juntamente com a data. Além disso, veremos que é possível definir a data e hora utilizando uma string no formato específico. Essas diferentes abordagens nos dão várias possibilidades para trabalhar com datas e horas em JavaScript.

```jsx
// Ano, Mês(0-11), Dia, h, m, s
console.log(new Date(2025, 0, 31, 12, 30, 59))

// Ano, Mês(1-12), Dia, h, m, s
console.log(new Date("2025-01-31T12:30:59"))
console.log(new Date("January 31, 2025 12:30:59"))
```

## **Métodos pra trabalhar com data e hora**

Existem vários métodos para manipular datas e horas. É possível criar uma data, obter o dia da semana, o dia do mês, o mês, o ano, a hora, os minutos e os segundos e muito mais.

```jsx
let date = new Date("January 31, 2025 12:30:59")

// Dias da semana(0 - 6)
console.log(date.getDay()) // 5
// Outros métodos
console.log(date.getDate()) // 31
console.log(date.getMonth()) // 0
console.log(date.getFullYear()) // 2025
console.log(date.getHours()) // 12
```

## **Modificando uma data e uma hora**

Utilizaremos métodos como `setFullYear`, `setMonth`, `setDate` para alterar o ano, mês e dia. Para modificar a hora, usaremos `setHours`, `setMinutes` e `setSeconds`.

```jsx
let date = new Date("January 31, 2025 12:30:59")

date.setFullYear(2030)
date.setHours(10)

console.log(date)
```

## **Formatando uma data e uma hora**

Utilizamos métodos como `getDate`, `getMonth` e `padStart` para garantir que os valores tenham sempre dois dígitos. Também veremos como montar uma string de data e hora personalizada, separando e formatando cada parte conforme desejado. É importante manter o padrão correto para evitar erros ao criar datas. Essas técnicas são úteis para exibir informações de data de forma clara e organizada em aplicações.

```jsx
let date = new Date("January 1, 2025 12:30:59")

// Formata para sempre ter 2 dígitos e completa com "0"
console.log(date.getDate().toString().padStart(2, "0"))
```

## **Convertendo uma data para string**

Nesta aula, iremos conhecer métodos para converter data e hora em strings específicas. Essas conversões são úteis para formatar datas e horas de maneira específica em JavaScript.

```jsx
let date = new Date("January 31, 2025 12:30:59")

console.log(date.toString()) // Fri Jan 31 2025 12:30:59 GMT-0300 (Horário Padrão de Brasília)
console.log(date.toDateString()) // Fri Jan 31 2025
console.log(date.toTimeString()) // 12:30:59 GMT-0300 (Horário Padrão de Brasília)

// Exibindo data e hora formatadas de acordo com a localidade
console.log(date.toLocaleDateString()) // 31/01/2025
console.log(date.toLocaleDateString("en")) // 1/31/2025
console.log(date.toLocaleTimeString()) // 12:30:59
console.log(date.toLocaleString()) // 31/01/2025, 12:30:59

// sexta-feira, 31 de janeiro de 2025
console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "full"
    })
)

// 31 de jan.
console.log(
    date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short"
    })
)
```

## **Aprendendo sobre fuso horário**

Nesta aula, abordaremos o conceito de fuso horário, destacando o timestamp como um valor crucial para lidar com data e hora. O timestamp representa um ponto específico no tempo, sendo uma contagem de segundos ou milissegundos desde a referência, que é a meia-noite de 1 de janeiro de 1970 no padrão UTC. O JavaScript utiliza esse padrão como base. Existem duas maneiras de interpretar data e hora: local e UTC. O fuso horário local é determinado pelo ambiente de execução, como o navegador do usuário.

## **Conhecendo a Intl**

Nesta aula, veremos mais sobre a utilização da API INTL do JavaScript para manipular data e hora. Vamos aprender como criar uma nova data, exibir informações como timezone e locale, e formatar a data de acordo com a localidade.

```jsx
// Intl é a API de internacionalização do ECMAScript
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))

// Verificar diferença em minutos do Timezone
const date = new Date()
console.log(date.getTimezoneOffset())
```

## **Criando uma data e hora com fuso horário**

Utilizaremos o método `toISOString` para obter o formato necessário e adicionaremos o deslocamento de fuso desejado. Ao adicionar ou subtrair horas do fuso, vamos ver como a hora é ajustada. A manipulação de fuso horário é essencial para lidar com diferentes fusos em aplicações que requerem precisão temporal.

```jsx
const dateWithTimezone = new Date("2025-01-31T12:30:59.603+03:00")

console.log(dateWithTimezone.toLocaleString()) // 31/01/2025, 06:30:59
console.log(new Date("2025-01-31T12:30:59").toLocaleString()) // 31/01/2025, 12:30:59
```