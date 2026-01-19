/*Crie um programa de contagem regressiva.
Peça um número e conte deste número até 0, usando um loop while no console do navegador.*/

//Quando for número use Number antes do prompt
{let numero = Number(prompt('Digite um número para iniciar a contagem regressiva a partir dele:'));
let contador = numero;

while(contador >= 0){
        alert(`Contagem de números decrescente: ${contador}`)
        console.log(contador)
        contador--;
    }

    alert('Chegou a 0!');
    console.log('Chegou a 0!');}