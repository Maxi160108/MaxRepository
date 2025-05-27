//Primer Ejercicio
function registroParticipantes(){
let participantes = [];
let nombre;

while (true) {
  nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");
  if (nombre.toLowerCase() === "salir") {
    break;
  }
  if (nombre) {
    participantes.push(nombre);
  }
}

let mensaje = `Total de participantes: ${participantes.length}\nLista: ${participantes.join(", ")}`;
if (participantes > 5) {
  mensaje += "\n¡Gran participación! Más de 5 personas se han registrado.";
}

alert(mensaje);
}


//Ejercicio N°2
function cajaRegistradora(){
let productos = ["manzana", "pan", "leche"];

for (let i = 0; i < 5; i++) {
  if (productos.length > 0) {
    let vendido = productos.pop();
    alert("Producto vendido: " + vendido);
  } else {
    alert("Sin stock");
  }
}

productos.push("arroz");
productos.push("jugo");
alert("Productos repuestos: " + productos.join(", "));
}

//No logre terminar, asi que lo he enviado así