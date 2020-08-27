const escola = "Cod3r"

console.log(escola.charAt(4)) //mostra a 4 caractere na string 
console.log(escola.charAt(5)) //não mostra nada pq não tem
console.log(escola.charCodeAt(3)) //mostra o valor da caractere na tabela unicode - ref a 3 posição na string
console.log(escola.indexOf('3')) // é o indici associado a string

console.log(escola.substring(1)) //parte do indice 1 até o final
console.log(escola.substring(0, 3)) //parte do indice 0 até o 3

console.log('Escola'.concat(escola).concat('!')) //juntar string com uma literal
console.log('Escola ' + escola +'!') //concatena da mesma maneira

console.log(escola.replace(3, 'e')) //subistitui o indice 3 pela letra "e" na string.

console.log('Ana, Maria, Pedro'.split(',')) //transforma em 