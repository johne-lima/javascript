let num = [5, 8, 2, 9, 3]
num[2] = 8 // acrescenta o valor 8 no vetor 2
num.sort() //coloca os valores em ordem crescente 
num.push(10) // acrescenta o valor 10 na ultima posição
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O quinto valor do vetor é ${num[5]}`)
console.log(`Elementos em ordem crescente: ${num}`) 
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
