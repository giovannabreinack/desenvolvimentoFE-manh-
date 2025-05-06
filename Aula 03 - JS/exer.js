// declara uma variavel com a sua idade, verificar o tipo dela
const idade = 22
console.log(idade, typeof idade)

// declara uma variavel com a sua comida preferida e atribuir um valor depois da declaração
var comida_fav
comida_fav = "macarrão"

//neste caso, vc so esta printando 2 coisas diferentes, :(
console.log("minha comida favorita é", comida_fav)

// concatenando as string :)
console.log("minha comida favorita é " + comida_fav)

// porem usando template string :)
console.log(`minha comida favorita é ${comida_fav}`)

// Declarar uma variavel e nao dar valor pra ela, sendo undefined
var comida
let hobby
const carro = undefined

// Declarar 5 variaveis diferentes sem valores
var a,b,c,d,e

// Declarar uma variavel contendo uma string
var animal = "coala"

// Declare uma varivel contendo um numero dentro de uma string
var numeroComoString = "7"
var numeroComoString2 = '7'
var numeroComoString3 = `7 - ${animal}`

// Declare uma variavel com seu nome, e outra com sobrenome, e concatene os dois, depois faça um template string dos 2
var nome = "Giovanna"
var sobrenome = "Breinack"
var concatenado = `${nome} ${sobrenome}`
console.log(concatenado)

// Coloque a seguinte frase em uma variavel: It´s time
var frase = "it's time"

// verifique o tipo de todas as variaveis criadas
console.log(typeof nome, typeof a, typeof numeroComoString3, typeof frase)