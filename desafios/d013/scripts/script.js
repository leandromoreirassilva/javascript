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
    let nomealuno = prompt('Qual é o nome do aluno ')
    let nota1 = prompt(`Primeira nota de ${nomealuno} ?`)
    let nota2 = prompt(`Segunda nota de ${nomealuno} ?`)

    nota1 = Number(nota1)
    nota2 = Number(nota2)

    let media = (nota1 + nota2) / 2
    let situacao = ""

    if (media > 6.0 ) {
        situacao = `Com média acima de 6,0, o aluno está <mark id="mark1">APROVADO</mark>`
    } else if (media < 3.0 ) {
        situacao = `Com média abaixo de 3,0, o aluno está <mark id="mark2">REPROVADO</mark>`
    } else {
        situacao = `Com média entre 3,0 e 6,0, o aluno está em <mark id="mark3">RECUPERACAO</mark>`
    }

    nota1 = nota1.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })
    nota2 = nota2.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })
    media = media.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 })


    let msg = document.getElementById('resultadomensagem')
    msg.innerHTML = "" // limpa os paragrafos 

    let msgTxt = []
    msgTxt[0] = `<strong>Analisando a situacao de ${nomealuno}...</strong>`
    msgTxt[1] = `Com as notas ${nota1} e ${nota2} a sua <strong>média é ${media}</strong> .`
    msgTxt[2] = `${situacao}.`


    //Cria 1 paragrafo para cada mensagem dentro da <div>
    for (const elemento of msgTxt) {
        const paragen = document.createElement('p')     // cria um paragrafo 
        paragen.innerHTML = elemento                    //insere no paragrafro o texto em formato html 
        msg.appendChild(paragen)
    }

}
