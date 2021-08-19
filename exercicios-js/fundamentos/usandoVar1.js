{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera) // Escopo Global - Função
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //não está visivel fora da função
}

teste()
console.log()