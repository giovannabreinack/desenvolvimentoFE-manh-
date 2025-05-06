const num = 7
const num2 = 13
const num3 = 8

function printar(){
    console.log(num, num2, num3)
}

function somar(){
    return num + num2 + num3
}

const subtrair = () => {
    console.log(num - num2 - num3)
}

function printarProUsuario(){
    document.getElementById("resultado").textContent  = "qualquer coisa"
    return document.getElementById("resultado").textContent - "qualquer coisa"
}
