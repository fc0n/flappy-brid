const fabricantes = ["Mercedes", "Audi","BWM"]

function imprimir(nome, indece){
    console.log(`${indece}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))