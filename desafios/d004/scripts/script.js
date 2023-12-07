function formatReal(realFormatado) {
    realFormatado = realFormatado.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3})
    return realFormatado
}

function msg() {
    let nomeproduto = prompt('Que produto voce está comprando?')
    let valorpoduto = prompt(`Quanto custa o ${nomeproduto} que voce está comprando?`)
    let dinheiro = prompt(`Qual foi o valor que voce deu para pagar o ${nomeproduto}?`)

    valorpoduto = Number(valorpoduto)
    dinheiro = Number(dinheiro)
    let troco = (dinheiro - valorpoduto)

    valorpoduto = formatReal(valorpoduto)  // formata pra string corretamente 
    dinheiro = formatReal(dinheiro) 
    troco = formatReal(troco)  

    // \n quebra linha dentro de alert 
    alert(`Voce comprou o ${nomeproduto} que custou ${valorpoduto}.\nDeu ${dinheiro} em dinheiro e vai receber ${troco} de troco.\nVolte Sempre! `)}
