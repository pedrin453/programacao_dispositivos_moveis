/*
Exercício 6: Arrays
Crie um script que receba um array de números e faça as seguintes operações:
1. Adicione um número ao final do array.
2. Remova o primeiro número do array.
3. Encontre o maior número do array.
4. Encontre o menor número do array.
Utilize o array [10, 20, 30, 40, 50] para os testes.
 */

function operacoesArray(arr) {

    arr.push(60);
    console.log('Array após adicionar 60:', arr);

    arr.shift();
    console.log('Array após remover o primeiro número:', arr);

    const maiorNumero = Math.max(...arr);
    console.log('Maior número do array:', maiorNumero);

    const menorNumero = Math.min(...arr);
    console.log('Menor número do array:', menorNumero);
}

const array = [10, 20, 30, 40, 50];

operacoesArray(array);