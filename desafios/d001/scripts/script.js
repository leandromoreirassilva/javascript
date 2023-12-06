
function contagem() {
    let minc = document.getElementById('imin')
    let maxc = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')

    const elem = document.getElementById("para");
    const elem2 = document.getElementById("para2");

    let i = Number(minc.value) // pega o valor e converte em numero 
    let f = Number(maxc.value) 
    let p = Number(passo.value) 

    let resultado = "";

    for (let count = i ; count <= f; count += p) {
   
       resultado = resultado + (count) + ' --> ';     
    }

    resultado = resultado + ' xx! ';

    elem2.innerText = (`Contando: `);
    elem.innerText = (resultado);

}
