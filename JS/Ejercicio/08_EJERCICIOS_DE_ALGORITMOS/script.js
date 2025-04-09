//Ejercicio N°1

function calcularSumaNumerosNaturales() {
    let input = prompt("Ingresa un número entero positivo (N):");
    let N = parseInt(input);
  
    if (isNaN(N) || N < 1) {
      alert("Por favor, ingresa un número entero positivo válido.");
      return;
    }
  
    // Fórmula de la suma de los N primeros números naturales: N * (N + 1) / 2
    let suma = N * (N + 1) / 2;
  
    alert(`La suma de los primeros ${N} números naturales es: ${suma}`);
  }
  

//Ejercicio N°2

function cienPares() {
    let arrayPares = [];
    let limite = 100;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            arrayPares.push(i);
        }
    }

    alert(`Los números pares del 1 al 100 son: ${arrayPares.join(' - ')}`);
}

//Ejercicio N°3

function cienImPares() {
    let arrayPares = [];
    let limite = 100;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 1) {
            arrayPares.push(i);
        }
    }

    alert(`Los números pares del 1 al 100 son: ${arrayPares.join(' - ')}`);
}

//Ejercicio N°4

function sumarCincoNum(){
    let a = parseInt(prompt('Ingrese su numero a sumar: '));
    let b = parseInt(prompt('Ingrese su numero a sumar: '));
    let c = parseInt(prompt('Ingrese su numero a sumar: '));
    let d = parseInt(prompt('Ingrese su numero a sumar: '));
    let e = parseInt(prompt('Ingrese su numero a sumar: '));
    let resultado = a + b + c + d + e
    alert(`El resultado es: ${resultado}`)
}

//Ejercicio N°5

function sumarCincoNumPartDos(){
    let a = parseInt(prompt('Ingrese su numero a sumar: '));
    let b = parseInt(prompt('Ingrese su numero a sumar: '));
    let c = parseInt(prompt('Ingrese su numero a sumar: '));
    let d = parseInt(prompt('Ingrese su numero a sumar: '));
    let e = parseInt(prompt('Ingrese su numero a sumar: '));
    let operacion = `${a} + ${b} + ${c} + ${d} + ${e}`
    let resultado = a + b + c + d + e
    alert(`Los numeros para la suma ingresaron fueron: ${operacion}`)
    alert(`El resultado es: ${resultado}`)
}

//Ejercicio N°6

function calculadora() {
    // Obtener los valores ingresados
    let numero1 = parseInt(prompt("Ingrese el primer numero "));
    let numero2 = parseInt(prompt("Ingrese el segundo"));
    let operacion = prompt("Ingrese su operacion deseada (Por ejemplo: si desea hacer una suma escriba suma)");
    
    // Pedir confirmación al usuario
    let respuesta = prompt("¿Desea realizar esta operación? Escriba 'si' para continuar:");
    
    // Verificar la respuesta del usuario
    if (respuesta !== "si") {
        alert("Operación cancelada");
        return; // Terminar si no confirmó
    }
    
    // Comprobar que los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error: Debe ingresar números válidos");
        return;
    }
    
    // Realizar la operación
    if (operacion === "suma") {
        resultado = numero1 + numero2;
    } 
    else if (operacion === "resta") {
        resultado = numero1 - numero2;
    } 
    else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
    } 
    else if (operacion === "division") {
        if (numero2 === 0) {
            alert("Error: No se puede dividir por cero");
            return;
        }
        resultado = numero1 / numero2;
    }
    
    // Mostrar el resultado
    alert(`El resultado de su operacion es: ${resultado}`)
}

//Ejercicio N°7