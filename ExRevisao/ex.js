//funcao que recebe dois numeros e vais escrever na consola todos os numeros multiplos de 5 e que sejam pares.

showNumbers(13,39)

function showNumbers(num1,num2){
    for(let i=num1; i<=num2; i++){

        if(i%5 === 0 && i%2 === 0){
            console.log(i)
        }
    }
}