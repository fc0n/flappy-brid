const nome = 'Rebeca'
const concactenacao = 'olá' + nome + "!"
const template = `
    Olá
    ${nome}!`
console.log(concactenacao, template)    

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)