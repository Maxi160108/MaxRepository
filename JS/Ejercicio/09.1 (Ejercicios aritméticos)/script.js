//Ejercicio N°1
function calcularPromedio(){

let notas = [];

for (let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt(`Ingresa la nota ${i + 1}:`));


  while (isNaN(nota) || nota < 0 || nota > 7) {
    nota = parseFloat(prompt(`Nota inválida. Ingresa una nota entre 0 y 7 para la nota ${i + 1}:`));
  }

  notas.push(nota);
}

let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
let promedio = suma / notas.length;

alert(`El promedio es: ${promedio.toFixed(1)}`);

if (promedio >= 4.0) {
  alert("Haz aprobado :D");
} else {
  alert("Haz reprobado :(");
}

}

//Ejercicio N°2
function separarParesImpares(){

let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 6; i++) {
  let num = parseInt(prompt("Ingresa un número:"));
  numeros.push(num);
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

alert("Números pares: " + pares.join(", "));
alert("Números impares: " + impares.join(", "));

}