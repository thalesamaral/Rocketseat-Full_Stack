const form = document.querySelector("form");
let qtdSorteio = 0;

form.onsubmit = (event) => {
  event.preventDefault();

  let quantity = parseInt(document.getElementById("quantity").value);
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);

  let toggle = document.getElementById("repeat-off").checked;

  if (start >= end) {
    alert("Por favor, insira um intervalo válido!");
    return;
  }

  let result = generateNumbers(quantity, start, end, toggle);
  result.sort((a, b) => a - b); // Ordena os números em ordem crescente

  console.log(result);
  displayResults(result);
};

function generateNumbers(quantity, start, end, repeatOff) {
  let numbers = [];
  let range = end - start + 1;

  if (repeatOff && quantity > range) {
    alert(
      "A quantidade de números não pode ser maior que o intervalo quando não há repetição!"
    );
    return [];
  }

  while (numbers.length < quantity) {
    let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;

    if (repeatOff) {
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    } else {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

function displayResults(numbers) {
  const wrapper = document.querySelector(".result-wrapper"); // Pegamos a div existente
  wrapper.innerHTML = ""; // Limpamos os resultados anteriores

  numbers.forEach((num) => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result-inner");

    const span = document.createElement("span");
    span.textContent = num;

    resultDiv.appendChild(span);
    wrapper.appendChild(resultDiv);
  });

  // Update info
  qtdSorteio++;

  const titulo = document.querySelector("#info > h2");
  const paragrafo = document.querySelector("#info > p");
  titulo.textContent = "Resultado do sorteio";
  paragrafo.textContent = `${qtdSorteio}º Resultado`;

  form.classList.add("result");
}
