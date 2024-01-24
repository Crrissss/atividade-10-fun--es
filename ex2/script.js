//2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
//for ímpar ou falso se for par.
let valor=Number(prompt("Digite um numero"))

function imparPar(valor)
{
    if (valor % 2 !== 0) {
        //return true; // É ímpar
        console.log(true)
    } else {
        //return false; // É par
        console.log(false)
    }
    
}
console.log("o numero digitado é")
imparPar(valor)




