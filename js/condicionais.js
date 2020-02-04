console.log("Condicionais If-Else em JavaScript")

/*
    Condicionais avaliam se determinadas condições
    são verdadeiras ou falsas
*/

/*
    Avaliar aprovação do aluno
    Se média de (nota1 + nota2) for maior ou
    igual a 6,0 o aluno estará aprovado
    O número de faltas não poderá ser maior que 25
    Caso contrário, estará reprovado

    Traduzindo do português estruturado para
    JavaScript:
    Se -> If
    Maior ou igual -> >=
    Caso Contrário -> Else
    Operadores Lógicos -> && e ||
*/
var nota1 = 7.0
var nota2 = 5.0
var faltas = 26
var media = (nota1 + nota2) / 2
console.log("Média do aluno:", media)
if (media >= 6.0 && faltas <= 25) {
    // Condição verdadeira
    console.log("Aluno aprovado")
} else {
    // Condição Falsa
    console.log("Aluno reprovado")
}

// Uma forma alternativa de apurar
// if (media < 6.0 || faltas > 25) {
//     // Condição verdadeira
//     console.log("Aluno reprovado")
// } else {
//     // Condição Falsa
//     console.log("Aluno aprovado")
// }

// Utilizando variáveis booleanas
var aprovado = (media >= 6.0 && faltas <= 25)
if (aprovado) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno reprovado")
}

/*

Construir a versão do algoritmo abaixo, usando
If-Else:
    var passouNoVestibular = true
    var passouNoEnem = false
    var entrouNaFacu = passouNoVestibular || passouNoEnem
    console.log("Entrou na Faculdade? ", entrouNaFacu)
*/
var passouNoVestibular = false
var passouNoEnem = true
//var entrouNaFacu = passouNoVestibular || passouNoEnem
if (passouNoVestibular || passouNoEnem) {
    console.log("Entrou na faculdade")
} else {
    console.log("Não passou")
}

