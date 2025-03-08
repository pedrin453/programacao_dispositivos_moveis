/*Exercício 2: Operadores Aritméticos e de Comparação
Crie um script que receba dois números e faça as seguintes operações:
1. Some os dois números.
2. Subtraia o segundo número do primeiro.
3. Multiplique os dois números.
4. Divida o primeiro número pelo segundo.
5. Verifique se o primeiro número é maior que o segundo.
*/

function numeros(num1, num2) {
    const soma = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} é: ${soma}`)

    const subtracao = num1 - num2;
    console.log(`A subtração de ${num1} e ${num2} é: ${subtracao}`)

    const multiplicacao = num1 * num2;
    console.log(`A multiplicação de ${num1} e ${num2} é: ${multiplicacao}`)

    const divisao = num1 / num2;
    console.log(`A divisão de ${num1} e ${num2} é: ${divisao}`)

    const maiorQue = num1 > num2;
    console.log(`O número ${num1} é maior que ${num2}? ${maiorQue}`)
}

// Exemplo de uso com os números 15 e 5
const numero1 = 15;
const numero2 = 5;

numeros(numero1, numero2);