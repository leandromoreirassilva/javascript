function formatreal(formatado) {
    formatado = formatado.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return formatado
}

function formatusd(formatado) {
    formatado = formatado.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return formatado
}

function valorporcentagem(porcentagem) {
    let valor = (100 - porcentagem) / 100
    return valor
}

let atualdolar = ""

function autocarregar() {
    /*
    let dolar = prompt('Digite a cotacao atual do dolar:')
    atualdolar = Number(dolar)
    */
}

function func01() {
    let valora = prompt('Qual é o valor de a ?')
    let valorb = prompt('Qual é o valor de b ?')
    let valorc = prompt('Qual é o valor de c ?')

    valora = Number(valora)
    valorb = Number(valorb)
    valorc = Number(valorc)

    let resDelta = (valorb * valorb) - (4 * valora * valorc)

    let msg = document.getElementById('resultadomensagem')
    msg.innerHTML = ""

    let msgTxt = []
    msgTxt[0] = `<strong>Resolvendo Baskara:</strong>`
    msgTxt[1] = `A equacao atua é <strong>${valora}x<sup>2</sup> + ${valorb}x + ${valorc} = 0</strong>.`
    msgTxt[2] = `O Calculo sera realizado <strong>&#916 = ${valorb}<sup>2</sup> - 4 . ${valora} . ${valorc}</strong>`
    msgTxt[3] = `O valor calculado foi <mark><strong>&#916 = ${resDelta}</strong></mark>.`

    //Cria 1 paragrafo para cada mensagem dentro da <div>
    for (const elemento of msgTxt) {
        const paragen = document.createElement('p')     // cria um paragrafo 
        paragen.innerHTML = elemento                    //insere no paragrafro o texto em formato html 
        msg.appendChild(paragen)    
    }

}
