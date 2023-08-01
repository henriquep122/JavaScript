const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos 
//push - adcionar no fim

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift - adcionar no inicio
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop - remove o ultimo elemento do array e devolve o o que foi removido 
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift - remove o primeiro elemento do array e devolve o que foi removido
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um Elemnto
//includes - verifica se um elemento está presente no array (se inclui)
const inclui = arr.includes("Gandalf o cinza")
console.log(inclui)

//indexOf - pra saber o indice do elemento
const indice = arr.indexOf("Gandalf")
console.log(indice)