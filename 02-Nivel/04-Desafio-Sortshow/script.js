const form = document.querySelector("form");

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

  console.log(result);
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
