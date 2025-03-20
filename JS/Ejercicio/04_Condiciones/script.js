//Ejercicio N°1

let temperatura = parseInt(prompt('La temperatura actual es: '));

if (temperatura <= 0) {
    alert('Hace frio')
} else if(temperatura > 0 && temperatura < 25) {
    alert('La temperatura es agradable')
} else {
    alert('La temperatura es alta, hace calor')
}

//Ejercicio N°2

let usuario = prompt('Su usario es: ')
let contraseña = prompt('Su contraseña es: ')

if (usuario == 'usuario123' && contraseña == 'secreto'){
    alert('acceso concedido')
}    else {
    alert('accseso denegado')
}

//Ejercicio N°3

let numero = prompt('El numero que he elegido es: '); 

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

//Ejercicio N°4

let puntuacion = prompt('Mi puntuacion es: ');

if (puntuacion >= 90) {
    console.log("Excelente");
} else if (puntuacion >= 70 && puntuacion < 90) {
    console.log("Buen trabajo");
} else {
    console.log("Necesitas mejorar");
}
