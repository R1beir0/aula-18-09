/////////////////*1*/
/*const bool1 = true
const bool2 = false
const bool3 = !bool2*/

/*!bool2 = true*/

/*let resultado = bool1 && bool2
console.log("a. ", resultado)

/*Será impresso: a. false*/

/*resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)*/ 

/*Será impresso: b. false*/

/*resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)*/

/*Será impresso: c. true*/

/*console.log("d. ", typeof resultado)*/

/*Será impresso: d. boolean*/


//////////////////*2*/
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

/*Problema: não foi convertido para Number.*/


/////////////////*3*/
/*Solução: Faça:

let primeitoNumero = Number(prompt("Digite um número!"))

let segundoNumero = Number(prompt("Digite outro numero!"))*/


/////////////////////////////////////////////////////////////- *Exercícios de escrita de código*/

///*1*/

/*const idadeUsuario = Number(prompt("Qual é a sua idade?"))
const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

console.log ("Sua idade é maior do que a do seu melhor amigo?" , idadeUsuario > idadeAmigo)

let resultado = idadeAmigo - idadeUsuario

console.log(resultado)*/


///*2*/

/*const par = Number(prompt("Insira um número par!"))

let resultado = par % 2
console.log(resultado)*/

/*Sim, o padrão é que as divisões com números pares sempre restam 0 e se o usuário inserir um número impar restará 1*/


///*3*/

/*const idade = Number(prompt("Qual é a sua idade?"))
let idadeMeses = idade * 12 
/*console.log(idadeMeses)*/

/*let idadeDias = idadeMeses * 365
console.log(idadeDias)*/

/*let idadeHoras = idadeDias * 24 
console.log(idadeHoras)*/

/*console.log("Idade em meses:" , idadeMeses ,
    "Idade em dias:" , idadeDias ,
    "Idade em horas:" , idadeHoras)*/


///*4*/

const primeiroNumero = Number(prompt("Insira um número"))

const segundoNumero = Number(prompt("Insira outro número"))

console.log("O primeiro número é maior que o segundo?" , primeiroNumero > segundoNumero) 

console.log("O primeiro número é igual ao segundo?" , primeiroNumero === segundoNumero)

console.log("O primeiro número é divisível pelo segundo?" , primeiroNumero % segundoNumero === 0)



console.log("O segundo número é divisível pelo primeiro?" ,primeiroNumero % segundoNumero === 0)


















