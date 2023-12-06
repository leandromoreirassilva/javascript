
function carregar() {
    //var a = document.querySelector('div#area')
  //  alert('entrei aqui')
  var a = 0
}

    var botaoTeste = window.document.querySelector('div#area')
    //var botaoTeste = window.document.getElementById("area")

    botaoTeste.addEventListener ('click', clicar) 
    botaoTeste.addEventListener("mouseenter", entrar)
    botaoTeste.addEventListener("mouseout", sair)

    function clicar() {
        botaoTeste.innerText = 'Clicou!'
        botaoTeste.style.background = 'red'
    }

    function entrar() {
        botaoTeste.innerText = 'Entrou!'
    } 

    function sair() {
        botaoTeste.innerText = 'Saiu!'
        botaoTeste.style.background = 'green'
    }

    
function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

var vel = 60.5
console.log(`A sua velocidade atual é ${vel} km/h`) // console.log é o print

if (vel >= 60) {
    console.log(`Voce foi multado !!!`)
}