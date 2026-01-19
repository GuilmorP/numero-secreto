/*Crie um programa de contagem progressiva.
Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.*/

//Quando for número use Number antes do prompt
let numero = Number(prompt('Digite um número para iniciar a contagem progressiva até ele:'));
let contador = 0;

while(contador <= numero){
        alert(`Contagem de números crescente: ${contador}`)
        console.log(contador)
        contador++ - 1;
    }

    alert(`Chegou a ${numero}!`);
    console.log(`Chegou a ${numero}!`);