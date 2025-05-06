function somar(){
    var numero01 = parseFloat(document.getElementById("n1").value)
    var numero02 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("resultadoSoma")
    res.innerHTML = numero01 + numero02
}

function subtrair(){
    var numero01 = parseFloat(document.getElementById("n3").value)
    var numero02 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resultadoSubtracao")
    res.innerHTML = numero01 - numero02
}

function divisao(){
    var numero01 = parseFloat(document.getElementById("n5").value)
    var numero02 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resultadoDivisao")

    if(isNaN(numero01) || isNaN(numero02)){
        res.textContent = "Digite algum número"
        return
    }

    if(numero02 !== 0){
        res.innerHTML = (numero01 / numero02).toFixed(2)
        res.style.color = "greenyellow"
        res.style.fontSize = "32px"
        document.getElementById("n6").style.border = "1px solid black"
    } else{
        res.innerHTML = "Não permite dividir por 0"
        res.style.color = "orange"
        res.style.fontSize = "16px"
        document.getElementById("n6").style.border = "2px solid red"
    }
    
}

function multiplicacao(){
    var numero01 = parseFloat(document.getElementById("n7").value)
    var numero02 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resultadoMultiplicacao")
    res.innerHTML = numero01 * numero02
}