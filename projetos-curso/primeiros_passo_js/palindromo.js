//solucao 1
//function verificaPalindromo(string) {
//    if (!string) return "string inexistente"
//  return string.split("").reverse().join("") === string;
//     //usando o split e o reverse para inverter a string
//}
// console.log(verificaPalindromo('arara'));

//solucao 2
function verificaPalindromo2(string) {
    if (!string) return
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false)
        }
    }
    return console.log(true)

}
verificaPalindromo2('arara');