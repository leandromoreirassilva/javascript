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
    let oldprice = prompt('Qual era o preco anterior do produto ?')
    let newprice = prompt(`Qual é o preco atual do produto ?`)

    oldprice = Number(oldprice)
    newprice = Number(newprice)

    let pricediff = (newprice / oldprice)
    let pricecost = 0 
    let porcentagem = 0
    let estado = ""

    if (pricediff > 1) {
        porcentagem = (pricediff - 1) * 100
        pricecost = (newprice - oldprice)
        estado = 'aumentou'
    } else {
        porcentagem = (1 - pricediff) * 100
        pricecost = (oldprice - newprice)
        estado = 'baixou'
    }

    // alert(novosalario)

    oldprice = formatreal(oldprice)  // formata pra string corretamente 
    newprice = formatreal(newprice)
    pricecost = formatreal(pricecost)

    porcentagem = porcentagem.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })


    let msg = document.getElementById('resultadomensagem')
    msg.innerHTML = "" // limpa os paragrafos 



    let msgTxt = []
    msgTxt[0] = `<strong>Analisando os valores informados...</strong>`
    msgTxt[1] = `O produto custava ${oldprice} e agora custa ${newprice} .`

    if (estado == 'aumentou') {
        msgTxt[2] = `Hoje o produto está mais caro.`
        msgTxt[3] = `O preco subiu ${pricecost} em relacao ao preco anterior`
        msgTxt[4] = `Uma variacao de ${porcentagem}% para cima .`
    }  else {
        msgTxt[2] = `Hoje o produto está mais barato.`
        msgTxt[3] = `O preco caiu ${pricecost} em relacao ao preco anterior`
        msgTxt[4] = `Uma variacao de ${porcentagem}% para baixo .`
    }


    //Cria 1 paragrafo para cada mensagem dentro da <div>
    for (const elemento of msgTxt) {
        const paragen = document.createElement('p')     // cria um paragrafo 
        paragen.innerHTML = elemento                    //insere no paragrafro o texto em formato html 
        msg.appendChild(paragen)
    }


}
