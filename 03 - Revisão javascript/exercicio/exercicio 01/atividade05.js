/*
Exercício 5: Funções
Crie um script que tenha uma função que receba um número e retorne:
1. O dobro do número.
2. O triplo do número.
3. O quadrado do número.
Utilize o número 5 para os testes.
*/

function calcularNumeros(num) {
    const dobro = num * 2;
    const triplo = num * 3;
    const quadrado = num * num;

    console.log(`O dobro de ${num} é: ${dobro}`);
    console.log(`O triplo de ${num} é: ${triplo}`);
    console.log(`O quadrado de ${num} é: ${quadrado}`);
}

const numeroExemplo = 5;

calcularNumeros(numeroExemplo);