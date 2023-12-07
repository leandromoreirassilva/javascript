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

    msg.innerText = (
        `${nomefuncionario} recebeu um aumento salarial !!! \n` + 
        `O Salário atual era ${salario} . \n` + 
        `Com o aumento de ${porcentagem}%, o valor vai aumentar ${valoraumento} no próximo mes. \n` +
        `E a partir dai, ${nomefuncionario} vai passar a ganhar ${novosalario} .`  
    )

}
