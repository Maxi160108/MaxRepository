function generadorNumerosPrimos() {
    // Solicitar número límite al usuario
    let limite = parseInt(prompt("Ingrese un numero limite para la impresión: "))
    let arrayPrimos = []

    // Validación de entrada
    if (limite === 0 || limite === 1 || limite < 0) {
        alert("Ingrese un valor valido")
    }

    // Búsqueda de números primos hasta el límite
    for(let i = 2; i < limite + 1; i++) {
        if(esPrimo(i)) {
            arrayPrimos.push(i)
        }
    }

    // Función auxiliar para verificar si un número es primo
    function esPrimo(numero) {
        for(let j = 2; j < numero; j++) {
            if(numero % j === 0) {
                return false;
            }
        }
        return numero !== 1;
    }

    // Validación final y muestra de resultados
    if(limite === 0 || limite === 1 || limite < 0) {
        alert("No se ha generado nada")
    } else {
        alert(`Los numeros primos al numero que ingresaste son: ${arrayPrimos.join(" - ")}`)
    }
}