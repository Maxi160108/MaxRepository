//Ejercicio N°1

let numero = parseInt(prompt("INGRESE SU NUMERO"));

if(numero % 2 == 0) {
    alert('Su numero es par');
} else {
    alert('Su numero es impar');
}

//Ejercicio 2

function calcularPeso(){

let peso = perseFloat(prompt('Ingrese su peso: '));
let altura = perseFloat(prompt('Ingrese su altura: '));
altura = altura / 100;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert('Tienes bajo peso')
} else if (imc >= 18.5 && imc < 24.9) {
    alert('Tienes peso normal')
} else {
    alert('Tienes Sobrepeso')
}
}
//Ejercicio N°3

let nota1 = parseInt(prompt("INGRESE SU PRIMERA NOTA: "))
let nota2 = parseInt(prompt("INGRESE SU SEGUNDA NOTA: "))
let nota3 = parseInt(prompt("INGRESE SU TERCERA NOTA: "))

let promedio = (nota1 + nota2 + nota3) / 3;

if(promedio > 4 && promedio < 7){
    alert('HAZ APROBADO');
} else if(promedio < 4){
    alert('HAZ REPROBADO :(');
}