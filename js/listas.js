console.log("Listas em JavaScript")

/*
    Em lógica de programação, é muito comum
    trabalharmos com listas de itens.
    Chamamos essas listas de Arrays
*/

// Lista de Compras
let listaCompras = ["ovos", "leite", "pão de forma"]
// console.log("Item da lista de compras", listaCompras[0])
// console.log("Item da lista de compras", listaCompras[1])
// console.log("Item da lista de compras", listaCompras[2])

for (let index = 0; index < listaCompras.length; index++) {
    const element = listaCompras[index];
    console.log("Item da lista de compras", element)
}

// Incluir um item na lista
listaCompras.push("batata frita")
console.log(listaCompras)

// Pesquisar um item na lista - laranja
let itemPesquisado = prompt("Digite um item para pesquisa")
let numeroElementos = 0
for (let index = 0; index < listaCompras.length; index++) {
    const element = listaCompras[index];
    if (element == itemPesquisado) {
        console.log("Item encontrado")
        break
    }
    numeroElementos++
}
// Se for necessário feedback quando o elemento não for encontrado
if (numeroElementos == listaCompras.length) {
    console.log("Item não encontrado")
}

// Vimos o jeito raiz de procurar algo numa lista
//  Agora veremos a forma Nutela
if (listaCompras.includes(itemPesquisado)) {
    console.log("Item encontrado")
} else {
    console.log("Item não encontrado")
}
