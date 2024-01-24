/*
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

*/

let valor=Number(prompt("Digite um numero"))
let divisores=0
function numeroPerfeito(valor)
{
    for (let i = 1; i < valor; i++){
        if (valor % i === 0) {
            divisores+= i;
        }
    }

    if (divisores === valor) {
        console.log(true);
      } else {
        console.log(false);
      }
    

}

numeroPerfeito(valor)
