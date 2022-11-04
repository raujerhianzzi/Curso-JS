let num = [1,2,3,4,9,15,10]

/*
num[6] = 5 //comando acrescenta um valor numa posição especifica
num.push(8) //comando acrescenta um valor sempre no final da váriavel
num.length //comando mostra o comprimento da minha váriavel
num.sort() //comando coloca todos elementos em ordem crescente
num.indexOf()//comando mostra a posição em q o valor esta, se não tiver o valor ele mostra posição -1
console.log(`Nosso vetor é ${num}`)

for(let pos=0;pos < num.length;pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(` a posição ${pos} tem o valor ${num[pos]}`)
}
