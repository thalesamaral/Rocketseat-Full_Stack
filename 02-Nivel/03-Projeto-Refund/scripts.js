const amount = document.getElementById("amount");

// Capturando mudanças no input
amount.oninput = () => {
  // Aceitando somente números no valor do input
  let value = amount.value.replace(/\D/g, "");
  
  // Transformar o valor em centatos (exemplo: 150/100 = 1.5 é equivalente a R$ 1,50)
  value = Number(value) / 100
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return value;
}
