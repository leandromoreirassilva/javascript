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
    let anoatual = prompt('Qual é o anor que voce quer verificar ?')

    anoatual = Number(anoatual)

    let restopor4 =  (anoatual %4)
    let restopor100 =  (anoatual %100)
    let restopor400 =  (anoatual %400 )

    let resultado

    if ( (restopor4 ==0) || (restopor400 ==0) & (restopor100 != 0)) {
        resultado = true
    } else {
        resultado = false
    }


    let msg = document.getElementById('resultadomensagem')
    msg.innerHTML = ""

    let msgTxt = []
    msgTxt[0] = `<strong>Analisando o ano de ${anoatual}...</strong>`
    if (resultado == true) {
        msgTxt[1] = `O Ano de ${anoatual} <mark style ="background-color: rgba(0, 255, 0, 0.301); color: green ;"><strong>É BISSEXTO</strong></mark> ✅ `
    } else {
        msgTxt[1] = `O Ano de ${anoatual} <mark style ="background-color: rgba(255, 0, 0, 0.301); color: red ;"><strong>NÃO É BISSEXTO</strong></mark>❌ `
    }

    /*   
    let msgTxt = []
    msgTxt[0] = `<strong>Analisando o ano de ${anoatual}...:</strong>`
    msgTxt[1] = `A equacao atua é <strong>${valora}x<sup>2</sup> + ${valorb}x + ${valorc} = 0</strong>.`
    msgTxt[2] = `O Calculo sera realizado <strong>&#916 = ${valorb}<sup>2</sup> - 4 . ${valora} . ${valorc}</strong>`
    msgTxt[3] = `O valor calculado foi <mark><strong>&#916 = ${resDelta}</strong></mark>.`
    */

    //Cria 1 paragrafo para cada mensagem dentro da <div>
    for (const elemento of msgTxt) {
        const paragen = document.createElement('p')     // cria um paragrafo 
        paragen.innerHTML = elemento                    //insere no paragrafro o texto em formato html 
        msg.appendChild(paragen)    
    }

    
}
