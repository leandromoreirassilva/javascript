function formattemp(formatado) {
    formatado = formatado.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 3 })
    return formatado
}

function func1() {
    let temp = prompt('Digite uma Temperatura em °C(Celcius)')
    temp = Number(temp)

    let msg = document.getElementById('resultadomensagem')

    msg.innerText = (`A temperatura de ${formattemp(temp)} °C, corresponde a ...\n
                    ${formattemp(temp + 273.15)} °K (Kelvin)\n 
                    ${formattemp((temp * 1.8) + 32)} °F (Fahrenheit)\n 
    `)
}
