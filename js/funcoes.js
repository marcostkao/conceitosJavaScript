console.log("Funções em JavaScript")

/*
    Funções são um dos pilares de qualquer linguagem de 
    programação.
    Temos 2 tipos de função:
    1. Executa um conjunto de instruções
    2. Calcula um valor e devolve um resultado
*/

// Exemplo de função do tipo 1

// Declaração da função
function hello(nome) {
    console.log("Hello, ", nome)
}

function nomeCompleto(primeiroNome, sobrenome) {
    console.log("Hello,", primeiroNome, sobrenome)
}

// Chamada da função
var nome = prompt("Digite seu nome")
hello(nome)

// Exercício
// Crie uma função para exibir o nome e o sobrenome da pessoa
var primeiroNome = prompt("Digite seu primeiro nome")
var sobrenome = prompt("Digite seu sobrenome")
nomeCompleto(primeiroNome, sobrenome)

// Exemplo da Função Tipo 2

// Declaração da Função
function soma(num1, num2) {
    var res = num1 + num2
    return res
}

// Chamada da Função
var num1 = parseInt(prompt("Digite o 1º número"))
var num2 = parseInt(prompt("Digite o 2º número"))
var resultado = soma(num1, num2)
console.log("O resultado da soma é", resultado)

// Chamando no modo simplificado
//console.log("O resultado da soma é", soma(2, 2))

// Exercício - Transformar esse código em uma função que:
//  Verifique se a pessoa foi aprovada e retorne o resultado
//  Regra de Negócio: para entrar na faculdade, a pessoa
//  precisa passar no vestibular OU passar no ENEM

// Código original
// var passouNoVestibular = true
// var passouNoEnem = false
// var entrouNaFacu = passouNoVestibular || passouNoEnem
// console.log("Entrou na Faculdade? ", entrouNaFacu)

// 1. Declaração da Função
function verificaAprovacao(passouNoVestibular, passouNoEnem) {
    var entrouNaFacu = passouNoVestibular || passouNoEnem
    return entrouNaFacu
}

// 2. Chamada da Função
var passouNoVestibular = true
var passouNoEnem = false
var passouNaFacu = verificaAprovacao(passouNoVestibular, passouNoEnem)
console.log("Entrou na Faculdade? ", passouNaFacu)

