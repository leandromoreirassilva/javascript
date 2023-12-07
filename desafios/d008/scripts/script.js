function formatreal(formatado) {
    formatado = formatado.toLocaleString("pt-BR", {  style:"currency", currency:"BRL", minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return formatado
}

function formatusd(formatado) {
    formatado = formatado.toLocaleString("en-US", { style:"currency", currency:"USD", minimumFractionDigits: 2, maximumFractionDigits: 3 })
    return formatado
}

function valorporcentagem (porcentagem) {
     let valor =  (100 - porcentagem) / 100 
     return valor 
}

let atualdolar = ""

function autocarregar() {
    /*
    let dolar = prompt('Digite a cotacao atual do dolar:')
    atualdolar = Number(dolar)
    */
}

function msg() {
    let nomeproduto = prompt('Que produto voce está comprando?')
    let valorpoduto = prompt(`Qual é o valor de ${nomeproduto} ?`)
 
    valorpoduto = Number(valorpoduto)
    let valordescontado = (valorpoduto * valorporcentagem(10)) 
    let desconto = (valorpoduto - valordescontado )

    valorpoduto = formatreal(valorpoduto)  // formata pra string corretamente 
    valordescontado = formatreal(valordescontado) 
    desconto = formatreal(desconto)  

    let msg = document.getElementById('resultadomensagem')

    msg.innerText = (
        `Calculando desconto de 10% para ${nomeproduto} ...\n \n` + 
        `O Valor original era ${valorpoduto} . \n` + 
        `Voce acaba de ganhar ${desconto} de desconto (-10%). \n` +
        `No fim, voce vai pagar  ${valordescontado} no produto ${nomeproduto} .`  
    )

}
