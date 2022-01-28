// function comparaNumeros(n1, n2){
//     const saoIguais = n1 === n2
//     const soma = n1 + n2
// formar de verifiar se o numero é maior ou menor
//     if(saoIguais){
//         return 'São iguais'
//     }
//     return 'Nao sao iguais'
// }
//return saoIguais ? 'São iguais' : `Não são iguais.`
//}

function compararNum(num1, num2){
    if(!num1 || !num2)return 'Dedina dois numeros!';
    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)
    return `${primeiraFrase} ${segundaFrase}`
}
function criaPrimeiraFrase(num1, num2){
    let saoIguais ='';

    if(num1 !== num2){
        saoIguais = 'nao'
    }
    
    return `Os Numeros ${num1} e ${num2} sao ${saoIguais} sao iguais.`
}
function criaSegundaFrase(num1, num2){
const soma = num1 + num2

let result10 = 'menor'
let result20 = 'menor'

const compara10= soma > 10
const compara20= soma > 20

if(compara10) {
    result10 = 'maior';
}
if(compara20) {
    result20 = 'maior';
}
return `Sua soma e ${soma}, que e ${result10} que 10 e ${result20} que 20`
}
console.log(compararNum(10, 20))
