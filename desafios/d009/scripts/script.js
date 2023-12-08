function formatreal(formatado) {
    formatado = formatado.toLocaleString("pt-BR", {  style:"currency", currency:"BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return formatado
}

function formatusd(formatado) {
    formatado = formatado.toLocaleString("en-US", { style:"currency", currency:"USD", minimumFractionDigits: 2, maximumFractionDigits: 2 })
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
    let nomefuncionario = prompt('Qual é o nome do funcionário ?')
    let salario = prompt(`Qual é o salário de ${nomefuncionario} ?`)
    let porcentagem = prompt(`O salário de ${nomefuncionario} vai ser reajustado em qual porcentagem ?`)
 
    salario = Number(salario)
    let valorporc = Number(porcentagem)

    let valoraumento = (salario * (valorporc/100)) 
    let novosalario = (salario + valoraumento)
    
   // alert(novosalario)

    valoraumento = formatreal(valoraumento)  // formata pra string corretamente 
    novosalario = formatreal(novosalario)  
    salario = formatreal(salario)  

    let msg = document.getElementById('resultadomensagem')

    let msgTxt = []
    msgTxt [0] = `${nomefuncionario} recebeu um aumento salarial !!!`
    msgTxt [1] = `O Salário atual era ${salario} .`
    msgTxt [2] = `Com o aumento de ${porcentagem}%, o valor vai aumentar ${valoraumento} no próximo mes.`
    msgTxt [3] = `E a partir dai, ${nomefuncionario} vai passar a ganhar ${novosalario} .`

    for (const elemento of msgTxt) {
        const paragen = document.createElement('p') // cria um paragrafo 
        const pagagenTexto = document.createTextNode(elemento)
        paragen.appendChild(pagagenTexto)
        msg.appendChild(paragen)
    } 

}
