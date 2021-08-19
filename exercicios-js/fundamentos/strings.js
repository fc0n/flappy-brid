const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charAt(3)) // pegou o codigo do caracteri
console.log(escola.indexOf('3')) // Pega características especifica

console.log(escola.substring(1)) // Tiro primeiro caracteríco
console.log(escola.substring(0 , 3)) // vai do 0 ate o 3

console.log('Escola'.concat(escola).concat("!"))
console.log('Escola' + escola + "!")
console.log(escola.replace(3, 'e')) // substituir


console.log('Ana,Maria,Pedro'.split(','))