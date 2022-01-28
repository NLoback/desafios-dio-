function subtitiuPares(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Voce ja e zero")

        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo o numero ${array[i]} por 0...`)
            array[i] = 0
        } else {
            console.log(` O Numero ${array[i]} nao e par`)
        }
    }
    return array
}
let arr = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(subtitiuPares(arr))