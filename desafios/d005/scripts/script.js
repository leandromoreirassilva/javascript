function formatmedida(realFormatado) {
    realFormatado = realFormatado.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 3 })
    return realFormatado
}

function func1() {
    let distancia = prompt('Digite uma distancia em metros (m)')
    distancia = Number(distancia)

    let msg = document.getElementById('resultadomensagem')

    msg.innerText = (`A distancia de ${formatmedida(distancia)} metros, corresponde a ...\n
                    ${formatmedida(distancia / 1000)} quilometro (Km)\n 
                    ${formatmedida(distancia / 100)} hecmetro (Hm)\n 
                    ${formatmedida(distancia / 10)} decametro (Dam)\n 
                    ${formatmedida(distancia / 0.10)} decimetro (dm)\n 
                    ${formatmedida(distancia / 0.010)} centrimetro (cm)\n 
                    ${formatmedida(distancia / 0.001)} milimetro (mm)\n 

    `)
}
