var idade = 35 
console.log(`Vc tem ${idade} Anos!`)
if (idade < 16){
    console.log('Não Vota!')
}else if (idade <= 18 || idade > 65){
    console.log('Voto Opcional')
}else {
    console.log('Voto Obrigatório')
}
