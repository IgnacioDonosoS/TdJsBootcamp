function sumar(){
let numero1 = parseInt(document.getElementById("valor1").value)
let numero2 = parseInt(document.getElementById("valor2").value)
let resultado = numero1 + numero2;
document.getElementsByClassName("resultado")[0].innerText = resultado;  
}

function restar(){
    let numero1 = parseInt(document.getElementById("valor1").value)
    let numero2 = parseInt(document.getElementById("valor2").value)
    let resultado = numero1 - numero2;
    if (resultado < 0) {
        resultado = 0
    }
    document.getElementsByClassName("resultado")[0].innerText = resultado;  
    }