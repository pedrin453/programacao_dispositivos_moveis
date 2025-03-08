/*Exercício 1: Manipulação de Strings
Crie um script que receba uma string e faça as seguintes operações:
1. Converta a string para maiúsculas.
2. Converta a string para minúsculas.
3. Inverta a string.
4. Substitua todas as ocorrências de uma letra específica por outra.
*/

function manipularString(str, letraAntiga, letraNova) {
    
    const maiuscula = str.toUpperCase();
    console.log('Maiúsculas:', maiuscula);

    
    const minuscula = str.toLowerCase();
    console.log('Minúsculas:', minuscula);

    const invertida = str.split('').reverse().join('');
    console.log('Invertida:', invertida);

    const substituida = str.split(letraAntiga).join(letraNova);
    console.log(`Substituindo '${letraAntiga}' por '${letraNova}':`, substituida);
}

const stringExemplo = 'Exemplo de String';
const letraAntiga = 'e';
const letraNova = 'a';

manipularString(stringExemplo, letraAntiga, letraNova);