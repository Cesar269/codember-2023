const cadena = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

let resultado = 0
let i = 0
const arrayResultado = []

for (let i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
        case '#':
            resultado = resultado + 1
            break;
        case '@':
            resultado = resultado - 1
            break;
        case '*':
            resultado = resultado * resultado
            break;
        case '&':
            console.log(resultado)
            arrayResultado.push(resultado)
            break;
        default:
            console.error("caracter no detectado")
            break;
    }

}

console.log(arrayResultado.join(''))


// Las operaciones del lenguaje son las siguientes:

// "#" Incrementa el valor numérico en 1.
// "@" Decrementa el valor numérico en 1.
// "*" Multiplica el valor numérico por sí mismo.
// "&" Imprime el valor numérico actual.