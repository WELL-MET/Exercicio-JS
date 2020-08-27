const peso1 = 1.0
const peso2 = Number('2.0') //função?
console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) //Verifica se o numero é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 // calculando o peso das notas
const media = total / (peso1 + peso2) 

console.log(media)
console.log(media.toFixed(2)) //Define a quantidade de casas decimais
console.log(media.toString()) // mostra como uma string
console.log(media.toString(2)) //apresenta como binário

console.log(typeof media) //mortra o tipo da variável
console.log(typeof Number)