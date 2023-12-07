function formatreal(formatado) {
    formatado = formatado.toLocaleString("pt-BR", {  style:"currency", currency:"BRL", minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return formatado
}

function formatusd(formatado) {
    formatado = formatado.toLocaleString("en-US", { style:"currency", currency:"USD", minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return formatado
}

let atualdolar = ""

function autocarregar() {
    let dolar = prompt('Digite a cotacao atual do dolar:')
    atualdolar = Number(dolar)
}

function func1() {
    let real = prompt('Quanto R$ voce tem na carteira')
    let valorreal = Number(real)

    let msg = document.getElementById('resultadomensagem')

    msg.innerText = (
        `O valor atual da cotacao do dolar é ${formatusd(atualdolar)} ` + `\n` + 
        `O valor que voce possui na carteira é ${formatreal(valorreal)} ` + `\n` + 
        `Seu dinheiro vale em dolar = ${formatusd(valorreal/atualdolar)}`
    ) 
}
