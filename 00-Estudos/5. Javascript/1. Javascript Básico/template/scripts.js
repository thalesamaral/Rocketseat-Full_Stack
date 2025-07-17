const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (evento) => {
    evento.preventDefault()
	
    const valor = input.value
    
    // --- Padrão regex: Apenas dígitos
    const regexNumber = /\d+/g
    
    if(regexNumber.test(valor)) {
		alert("Inválido. o texto contém números!")
    } else {
		alert("Enviado!")
    }
}