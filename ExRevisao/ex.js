//funcao que recebe dois numeros e vais escrever na consola todos os numeros multiplos de 5 e que sejam pares.


sendNudes();

function sendNudes()
{
   let   a = prompt("Qual o seu nome?")
    alert(`${a} SEND NUDES ;)`)
}

/*  criar funçao que recebe 2 numeros e deve escrever 
    consola:todos os numeros entre os dois valores, multiplos de 5 e pares  */
function showNumbers(num1,num2){
for (let i = num1; i < num2; i++) {
if(i%5==0 && i%2==0){
console.log(i)}}
}
showNumbers(7,17)
showNumbers(23,45)